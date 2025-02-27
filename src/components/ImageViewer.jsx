// import React from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import  Button  from "../components/ui/Button";
import sampleImage from "../assets/img/jakpro-orgchart.jpeg"; // Ensure this path is correct

const ImageViewer = () => {
  const handleSaveImage = () => {
    const link = document.createElement("a");
    link.href = sampleImage;
    link.download = "sample-image.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col items-center gap-4 p-4 w-screen h-screen">
      <div className="rounded-lg overflow-hidden w-full h-full flex items-center justify-center">
      <TransformWrapper defaultScale={1} defaultPositionX={0} defaultPositionY={0}>
          <TransformComponent>
            <div className="w-full h-full flex items-center justify-center">
              <img src={sampleImage} alt="Sample" className="max-w-full max-h-full w-auto h-auto object-contain" />
            </div>
          </TransformComponent>
        </TransformWrapper>
      </div>
      <Button onClick={handleSaveImage}>Save Organization Chart</Button>
    </div>
  );
};

export default ImageViewer;