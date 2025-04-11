import { IconRowContainer, IconRowItem } from '../styles/IconRow.styles'
import { MdOutlineImageSearch } from "react-icons/md";
import { IoLanguage } from "react-icons/io5";
import { RiGraduationCapLine } from "react-icons/ri";
import { IoMdMusicalNote } from "react-icons/io";


const IconRow = () => {
  return (
    <>
<IconRowContainer>
  <IconRowItem bgcolor="#5C4612">
    <MdOutlineImageSearch size={24} color="#FABB05" />
  </IconRowItem>
  
  <IconRowItem bgcolor="#1A2B50">
    <IoLanguage size={24} color="#4285F4" />
  </IconRowItem>
  
  <IconRowItem bgcolor="#1B3D33">
    <RiGraduationCapLine size={24} color="#0F9D58" />  
  </IconRowItem>
  
  <IconRowItem bgcolor="#522726">
    <IoMdMusicalNote size={24} color="#E94335" />
  </IconRowItem>
</IconRowContainer>
    <hr style={{ border: "1px solid rgb(102, 104, 107)", margin: "20px 0", width: "100vw" }} />
    </>
  )
}

export default IconRow