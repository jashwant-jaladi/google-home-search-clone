import { ModalBox, Button, ModalOverlay } from "../styles/ImageSourceModal.styles";

interface Props {
  onSelect: (source: "camera" | "gallery") => void;
  onClose: () => void;
}

const ImageSourceModal = ({ onSelect, onClose }: Props) => {
  return (
    <ModalOverlay onClick={onClose}>
      <ModalBox onClick={(e) => e.stopPropagation()}>
        <Button onClick={() => { onSelect("camera"); onClose(); }}>📷 Camera</Button>
        <Button onClick={() => { onSelect("gallery"); onClose(); }}>🖼️ Gallery</Button>
      </ModalBox>
    </ModalOverlay>
  );
};

export default ImageSourceModal;
