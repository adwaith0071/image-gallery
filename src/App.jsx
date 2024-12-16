// src/App.js
import React from "react";
import ImageGallery from "./components/ImageGallery";

const images = [
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/800px-HTML5_logo_and_wordmark.svg.png",
    alt: "Image 1",
  },
  {
    src: "https://miro.medium.com/v2/resize:fit:1400/1*yjH3SiDaVWtpBX0g_2q68g.png",
    alt: "Image 2",
  },
  {
    src: "https://images.ctfassets.net/aq13lwl6616q/7cS8gBoWulxkWNWEm0FspJ/c7eb42dd82e27279307f8b9fc9b136fa/nodejs_cover_photo_smaller_size.png",
    alt: "Image 3",
  },
  // Add more images
];

const App = () => (
  <div className="App">
    <h1>Image Gallery</h1>
    <ImageGallery images={images} />
  </div>
);

export default App;
