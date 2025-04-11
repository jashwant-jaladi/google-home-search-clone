import { Capacitor } from '@capacitor/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

export const handleImageInput = async (
  source: 'camera' | 'gallery',
  navigate: (url: string) => void
) => {
  try {
    const isWeb = Capacitor.getPlatform() === 'web';

    if (isWeb) {
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = 'image/*';
      if (source === 'camera') input.capture = 'environment';

      input.onchange = (event: any) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
          const dataUrl = reader.result as string;
          localStorage.setItem('capturedImage', dataUrl);
          setTimeout(() => navigate('/cropimage'), 100);
        };
        reader.readAsDataURL(file);
      };

      input.click();
      return;
    }

    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: source === 'camera' ? CameraSource.Camera : CameraSource.Photos,
    });

    if (image?.dataUrl) {
      localStorage.setItem('capturedImage', image.dataUrl);
      setTimeout(() => navigate('/cropimage'), 100);
    }
  } catch (error) {
    console.error("Image capture failed:", error);
    alert("Could not access camera or gallery. Please check permissions.");
  }
};
