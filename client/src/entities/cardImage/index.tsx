import { useState, useEffect, useRef } from "react";

import Loading from "../../shared/ui/loading";

import { scaleImageToFit, getImageCenter } from "./utils";

import { ISize, IPosition } from "./types";

const CardImage = ({ imageSrc }: { imageSrc: string }) => {
  const [isLoading, setLoadingState] = useState<boolean>(true);

  const canvasRef = useRef<any>();
  const containerRef = useRef<any>();

  const image = new Image();
  image.src = imageSrc;

  useEffect(() => {
    const targetSize: ISize = {
      width: containerRef.current.offsetWidth,
      height: containerRef.current.offsetHeight,
    };

    canvasRef.current.width = targetSize.width;
    canvasRef.current.height = targetSize.height;

    const canvasContext = canvasRef.current.getContext("2d");

    image.onload = () => {
      const imageSize: ISize = {
        width: image.width,
        height: image.height,
      };

      const scaledImageSize: ISize = scaleImageToFit(targetSize, imageSize);
      const imagePosition: IPosition = getImageCenter(
        targetSize,
        scaledImageSize
      );

      canvasContext.drawImage(
        image,
        imagePosition.x,
        imagePosition.y,
        scaledImageSize.width,
        scaledImageSize.height
      );

      setLoadingState(false);
    };
  }, []);

  return (
    <div
      style={{ width: "100%", height: "100%", position: "relative" }}
      ref={containerRef}
    >
      <canvas ref={canvasRef}></canvas>
      {isLoading ? <Loading /> : null}
    </div>
  );
};

export default CardImage;
