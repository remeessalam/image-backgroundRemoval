import React, { useState } from "react";
import axios from "axios";
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "dgveluvei",
  api_key: "672534592576227",
  api_secret: "m_ON69zq5EyIbxSLa0_Q_5_z9Kk",
});
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});
const PhotoRoomEditor = () => {
  const [image, setImage] = useState(null);
  const [editedImage, setEditedImage] = useState(null);

  const handleImageUpload = (e) => {
    setImage(e.target.files[0]);
  };
  //   const url = "https://sdk.photoroom.com/v1/segment";
  const apiKey = "eea46613d68136e2a7f0e1a74a4e4d6048d8803b";

  const removeBackground = async () => {
    if (!image) {
      alert("Please upload an image first.");
      return;
    }

    const formData = new FormData();
    formData.append("image_file", image);
    console.log("upload");
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "X-Api-Key": apiKey,
        },
        body: formData,
      });
      console.log(response, "upload");

      if (response.ok) {
        const result = await response.json();
        if (result && result.url) {
          setEditedImage(result.url); // Set the image URL
        } else {
          alert("Error: Background not removed or no URL found in response.");
        }
      } else {
        alert("Error: Failed to remove background.");
      }
    } catch (error) {
      console.error("Error processing image:", error);
    }
  };

  const downloadImage = () => {
    const imageUrl =
      "https://image-api.photoroom.com/v2/edit?background.color=transparent&background.scaling=fill&outputSize=1000x1000&padding=0.1&imageUrl=https://res.cloudinary.com/dgveluvei/image/upload/v1732788714/cart_items/cart_items/67480d2625eb8ece00e2b6f0_1732788712179.jpg&apiKey=eea46613d68136e2a7f0e1a74a4e4d6048d8803b";

    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = "background_removed_image.png"; // Desired filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link); // Clean up the DOM
  };
  const [url, seturl] = useState(null);
  const removeBackgroundtwo = async () => {
    try {
      const result = await cloudinary.uploader.upload(
        "https://res.cloudinary.com/dgveluvei/image/upload/v1732788714/cart_items/cart_items/67480d2625eb8ece00e2b6f0_1732788712179.jpg",
        {
          background_removal: "cloudinary_ai", // Cloudinary's AI-based background removal
        }
      );

      console.log("Background Removed Image URL:", result.secure_url);
      seturl(result.secure_url);
    } catch (error) {
      console.error("Error removing background:", error);
    }
  };

  removeBackgroundtwo();
  return (
    <div>
      {/* <img
          src="https://image-api.photoroom.com/v2/edit?background.color=transparent&background.scaling=fill&outputSize=1000x1000&padding=0.1&imageUrl=https://res.cloudinary.com/dgveluvei/image/upload/v1732788714/cart_items/cart_items/67480d2625eb8ece00e2b6f0_1732788712179.jpg&apiKey=eea46613d68136e2a7f0e1a74a4e4d6048d8803b"
          alt="imagessdf"
        /> */}
      {editedImage && <img src={editedImage} alt="Edited" />}
      <h1>PhotoRoom Editor</h1>
      <input type="file" onChange={handleImageUpload} />
      <button onClick={removeBackground}>Remove Background</button>
      <div className="imagecontainer">{url && <img src={url} alt="" />}</div>
      <button onClick={downloadImage} className="download-button">
        Download Image
      </button>
    </div>
  );
};

export default PhotoRoomEditor;
