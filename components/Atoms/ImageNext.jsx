import Image from "next/image";
import React from "react";

const ImageNext = ({ src, alt, width, height, claseAdicional }) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      quality={85}
      style={{ width: "100%", height: "100%" }}
      className={`img-fluid ${claseAdicional}`}
    />
  );
};

export default ImageNext;
