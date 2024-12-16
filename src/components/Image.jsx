// src/components/Image.js
import React from "react";

const Image = React.memo(({ src, alt }) => (
  <img src={src} alt={alt} loading="lazy" />
));

export default Image;
