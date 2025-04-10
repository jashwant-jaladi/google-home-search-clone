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
import { FiSearch } from "react-icons/fi"
import { BsMicFill } from "react-icons/bs"
import { SiGooglelens } from "react-icons/si"
import { IoMdTime } from "react-icons/io"

const SearchBar = () => {
  const [query, setQuery] = useState("")
  const [focused, setFocused] = useState(false)
  const [previousSearches, setPreviousSearches] = useState<string[]>([])
  const navigate = useNavigate()

  useEffect(() => {
    // Load previous searches from localStorage
    const savedSearches = localStorage.getItem('previousSearches')
    if (savedSearches) {
      setPreviousSearches(JSON.parse(savedSearches))
    }
  }, [])

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && query.trim()) {
      // Save the search to localStorage
      const newSearch = query.trim()
      const updatedSearches = [newSearch, ...previousSearches].slice(0, 10) // Keep only last 10 searches
      setPreviousSearches(updatedSearches)
      localStorage.setItem('previousSearches', JSON.stringify(updatedSearches))
      
      navigate(`/searchresults?q=${encodeURIComponent(newSearch)}`)
    }
  }

  const handleSearchClick = () => {
    if (query.trim()) {
      // Save the search to localStorage
      const newSearch = query.trim()
      const updatedSearches = [newSearch, ...previousSearches].slice(0, 10) // Keep only last 10 searches
      setPreviousSearches(updatedSearches)
      localStorage.setItem('previousSearches', JSON.stringify(updatedSearches))
      
      navigate(`/searchresults?q=${encodeURIComponent(newSearch)}`)
    }
  }

  return (
    <>
      {focused && <Overlay onClick={() => setFocused(false)} />}
      <SearchContainer focused={focused}>
        {!focused && (
          <GoogleLogo
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_92x30dp.png"
            alt="Google logo"
          />
        )}
        <SearchWrapper focused={focused}>
          <FiSearch
            size={18}
            color="#9aa0a6"
            onClick={handleSearchClick}
          />
          <SearchInput
            placeholder="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            onFocus={() => setFocused(true)}
          />
          <BsMicFill size={18} color="white" />
          <SiGooglelens size={18} color="white" style={{ marginLeft: 10 }} />
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
