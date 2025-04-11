
export default async function getCroppedImg(imageSrc: string, crop: any): Promise<string> {
    const image = await createImage(imageSrc);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
  
    if (!ctx) throw new Error("Canvas context not found");
  
    const { width, height } = crop;
    canvas.width = width;
    canvas.height = height;
  
    ctx.drawImage(
      image,
      crop.x,
      crop.y,
      width,
      height,
      0,
      0,
      width,
      height
    );
  
    return canvas.toDataURL("image/jpeg");
  }
  
  function createImage(url: string): Promise<HTMLImageElement> {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.addEventListener("load", () => resolve(img));
      img.addEventListener("error", (error) => reject(error));
      img.setAttribute("crossOrigin", "anonymous"); // for CORS support
      img.src = url;
    });
  }
  