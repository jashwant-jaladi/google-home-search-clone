import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import {
  GoogleLogo,
  SearchWrapper,
  SearchInput,
  SearchContainer,
  Overlay,
  PreviousSearches,
  SearchItem,
  PreviousSearchSettings,
  NoPreviousSearches
} from "../styles/SearchBar.styles"
import { FiSearch, FiArrowLeft } from "react-icons/fi"
import { BsMicFill } from "react-icons/bs"
import { SiGooglelens } from "react-icons/si"
import { IoMdTime } from "react-icons/io"
import VoiceOverlay from "./Overlay"
import useVoiceSearch from "../hooks/useVoiceSearch"
import { handleImageInput } from "../utils/ImageSearch"
import ImageSourceModal from "./ImageSourceModal";


const SearchBar = () => {
  const [query, setQuery] = useState("")
  const [focused, setFocused] = useState(false)
  const [previousSearches, setPreviousSearches] = useState<string[]>([])
  const navigate = useNavigate()
  const { startListening, listening, isSupported } = useVoiceSearch()
  const [showImageModal, setShowImageModal] = useState(false);


  useEffect(() => {
    const savedSearches = localStorage.getItem("previousSearches")
    if (savedSearches) {
      setPreviousSearches(JSON.parse(savedSearches))
    }
  }, [])

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && query.trim()) {
      const newSearch = query.trim()
      const updatedSearches = [newSearch, ...previousSearches].slice(0, 10)
      setPreviousSearches(updatedSearches)
      localStorage.setItem("previousSearches", JSON.stringify(updatedSearches))
      navigate(`/searchresults?q=${encodeURIComponent(newSearch)}`)
    }
  }

  const handleSearchClick = () => {
    if (query.trim()) {
      const newSearch = query.trim()
      const updatedSearches = [newSearch, ...previousSearches].slice(0, 10)
      setPreviousSearches(updatedSearches)
      localStorage.setItem("previousSearches", JSON.stringify(updatedSearches))
      navigate(`/searchresults?q=${encodeURIComponent(newSearch)}`)
    }
  }

  const handleVoiceSearch = () => {
    if (!isSupported) {
      alert("Voice search isn't supported in your browser. Try using Chrome on desktop or Android.")
      return
    }

    startListening((text: string) => {
      setQuery(text)
      navigate(`/searchresults?q=${encodeURIComponent(text)}`)
    })
  }

  return (
    <>
      {listening && <VoiceOverlay />}
      {focused && query === "" && <Overlay onClick={() => setFocused(false)} />}
      <SearchContainer focused={focused}>
        {!focused && (
          <GoogleLogo
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_92x30dp.png"
            alt="Google logo"
          />
        )}
        <SearchWrapper focused={focused}>
          {focused ? (
            <FiArrowLeft
              size={18}
              color="#9aa0a6"
              style={{ cursor: "pointer" }}
              onClick={() => {
                setFocused(false)
                setQuery("")
                navigate("/")
              }}
            />
          ) : (
            <FiSearch
              size={18}
              color="#9aa0a6"
              style={{ cursor: "pointer" }}
              onClick={handleSearchClick}
            />
          )}

          <SearchInput
            placeholder="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            onFocus={() => setFocused(true)}
          />
          <BsMicFill
            size={18}
            color="white"
            onClick={handleVoiceSearch}
            style={{ cursor: "pointer" }}
          />
          <SiGooglelens
            size={18}
            color="white"
            style={{ marginLeft: 10, cursor: "pointer" }}
            onClick={(e: React.MouseEvent) => {
              e.preventDefault();
              setShowImageModal(true);
            }}
          />

          {showImageModal && (
            <ImageSourceModal
              onSelect={(source) => handleImageInput(source, navigate)}
              onClose={() => setShowImageModal(false)}
            />


          )}


        </SearchWrapper>

        {focused && (
          <>
            <PreviousSearchSettings>
              <div>Recent Searches</div>
              <div>MANAGE HISTORY</div>
            </PreviousSearchSettings>
            <PreviousSearches>
              {previousSearches.length > 0 ? (
                previousSearches.map((search, index) => (
                  <SearchItem key={index} onClick={() => setQuery(search)}>
                    <IoMdTime size={18} color="#9aa0a6" />
                    <span>{search}</span>
                  </SearchItem>
                ))
              ) : (
                <NoPreviousSearches>
                  <span>No recent searches</span>
                  <span>Start typing to search</span>
                </NoPreviousSearches>
              )}
            </PreviousSearches>
          </>
        )}
      </SearchContainer>
    </>
  )
}

export default SearchBar
