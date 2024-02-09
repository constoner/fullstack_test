import { ISize } from "./types";

export const scaleImageToFit = (target: ISize, image: ISize) => {
  const scale: number = Math.min(
    target.width / image.width,
    target.height / image.height
  );
  return {
    width: image.width * scale,
    height: image.height * scale,
  };
};

export const getImageCenter = (target: ISize, image: ISize) => {
  return {
    x: target.width / 2 - image.width / 2,
    y: target.height / 2 - image.height / 2,
  };
};
