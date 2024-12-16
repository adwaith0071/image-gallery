// src/components/ImageGallery.js
import React from "react";
import Image from "./Image";
import "../App.css";

const ImageGallery = ({ images }) => (
  <div className="gallery">
    {images.map((image, index) => (
      <Image key={index} src={image.src} alt={image.alt} />
    ))}
  </div>
);

export default ImageGallery;
