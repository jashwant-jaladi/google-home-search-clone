import { GoogleLogo, SearchWrapper, SearchInput, SearchContainer } from "../styles/SearchBar.styles"
import { FiSearch } from "react-icons/fi"
import { BsMicFill } from "react-icons/bs"
import { SiGooglelens } from "react-icons/si";

const SearchBar = () => {
  return (
    <>
      <GoogleLogo
        src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_92x30dp.png"
        alt="Google logo"
      />

      <SearchContainer>
        <SearchWrapper>
          <FiSearch size={18} color="#9aa0a6"  />
          <SearchInput placeholder="Search" />
          <BsMicFill size={18} color="white"  />
          <SiGooglelens size={18} color="white" style={{ marginLeft: 10 }} />
        </SearchWrapper>
      </SearchContainer>
    </>
  )
}

export default SearchBar
