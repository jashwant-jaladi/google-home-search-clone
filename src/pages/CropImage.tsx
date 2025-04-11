import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Cropper from "react-easy-crop";
import getCroppedImg from "../utils/cropImage";
import { Area } from "react-easy-crop";
import {
  CropContainer,
  Controls,
  ZoomSlider,
  ProceedButton
} from "../styles/CropImage.styles";

const CropImage = () => {
  const [imageData, setImageData] = useState<string | null>(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedImage = localStorage.getItem("capturedImage");
    if (storedImage) {
      setImageData(storedImage);
    }
  }, []);

  const onCropComplete = useCallback((_: Area, croppedAreaPixels: Area) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const handleProceed = async () => {
    if (!imageData || !croppedAreaPixels) return;
    const croppedImage = await getCroppedImg(imageData, croppedAreaPixels);
    localStorage.setItem("processedImage", croppedImage);
    navigate("/image-results");
  };

  return (
    <CropContainer>
      {imageData && (
        <>
          <Cropper
            image={imageData}
            crop={crop}
            zoom={zoom}
            aspect={1}
            onCropChange={setCrop}
            onZoomChange={setZoom}
            onCropComplete={onCropComplete}
            style={{ containerStyle: { height: "100vh" } }}
          />
          <Controls>
            <ZoomSlider
              type="range"
              min={1}
              max={3}
              step={0.1}
              value={zoom}
              onChange={(e) => setZoom(Number(e.target.value))}
            />
            <ProceedButton onClick={handleProceed}>Crop & Continue</ProceedButton>
          </Controls>
        </>
      )}
    </CropContainer>
  );
};

export default CropImage;
