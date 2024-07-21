import React from "react";
import { saveAs } from "file-saver";
import art from "../assets/images/art.jpg";
import "../Download/Download.css";

const ImageDownloader = () => {
  const downloadImage = () => {
    fetch(art)
      .then((response) => response.blob())
      .then((blob) => {
        saveAs(blob, "art 1.jpg");
      })
      .catch((error) => console.error("Error downloading the image:", error));
  };

  return <button onClick={downloadImage}>Download Image</button>;
};

export default ImageDownloader;
