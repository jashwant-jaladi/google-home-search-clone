
import { Overlay, Dots, Dot, SongButton } from "../styles/Overlay.styles"


const VoiceOverlay = () => {
    return (
      <Overlay>
        <h2>Speak now</h2>
        <Dots>
          <Dot color="#4285F4" />
          <Dot color="#EA4335" />
          <Dot color="#FBBC05" />
          <Dot color="#34A853" />
        </Dots>
        <SongButton>🎵 Search a song</SongButton>
      </Overlay>
    )
  }
  
  export default VoiceOverlay