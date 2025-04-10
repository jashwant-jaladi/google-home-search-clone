import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

export const handleImageInput = async () => {
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
      window.location.href = '/cropimage'; // Or use React Router navigation
    }
  } catch (error) {
    console.error("Image capture failed:", error);
  }
};
