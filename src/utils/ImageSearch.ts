import { Capacitor } from '@capacitor/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { useNavigate } from 'react-router-dom';
export const handleImageInput = async (navigate: ReturnType<typeof useNavigate>) => {
  try {
    if (Capacitor.getPlatform() === 'web') {
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = 'image/*';
      input.onchange = (event: any) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
          const dataUrl = reader.result as string;
          localStorage.setItem('capturedImage', dataUrl);
          window.location.href = '/cropimage';
        };
        reader.readAsDataURL(file);
      };
      input.click();
      return;
    }

    // Native camera flow
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Prompt,
    });

    if (image?.dataUrl) {
      localStorage.setItem('capturedImage', image.dataUrl);
      navigate('/cropimage');

    }
  } catch (error) {
    console.error("Image capture failed:", error);
  }
};
