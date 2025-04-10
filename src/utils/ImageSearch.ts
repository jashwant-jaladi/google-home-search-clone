import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

const handleImageInput = async (navigate: (path: string) => void) => {
  console.log("Image input clicked");
  try {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Prompt, // shows action sheet for Camera / Gallery
    });

    if (image?.dataUrl) {
      // Store it to state or navigate to crop page
      localStorage.setItem('capturedImage', image.dataUrl);
      navigate('/cropimage');
    }
  } catch (error) {
    console.error("Image capture failed:", error);
  }
};

export default handleImageInput;