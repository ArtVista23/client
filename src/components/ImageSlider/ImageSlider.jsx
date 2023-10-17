import React, { useState, useEffect } from "react";
import "./ImageSlider.css"; // Create a CSS file for styling
import { Box } from "@mui/material";

const ImageSlider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      // Increment index to show the next image
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change the interval according to your preference

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

  return (
    <div className="image-slider">
      {images.map((image, index) => (
        <Box
          component={"img"}
          key={index}
          src={`/images/${image}`}
          alt={`Slide ${index}`}
          className={`slider-image ${
            index === currentImageIndex ? "visible" : "hidden"
          }`}
        />
      ))}
    </div>
  );
};

export default ImageSlider;
