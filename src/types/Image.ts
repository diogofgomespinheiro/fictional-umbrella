/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-useless-constructor */
export interface IImage {
  alt: string;
  url: string;
  dimensions: { width: number; height: number };
}

export const getFormattedImage = (image: Record<string, any>): IImage => {
  const { alt, url, dimensions } = image;
  return {
    alt,
    url,
    dimensions
  };
};
