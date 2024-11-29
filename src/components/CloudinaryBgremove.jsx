import React from "react";
import { CloudinaryImage } from "@cloudinary/url-gen";
import {
  backgroundRemoval,
  dropShadow,
} from "@cloudinary/url-gen/actions/effect";
import { scale } from "@cloudinary/url-gen/actions/resize";

const CloudinaryBgremove = () => {
  // Public ID of the image (corrected the path)
  const publicId =
    "cart_items/cart_items/67491af569eb53806f82ea1f_1732844996985"; // Ensure this path is correct
  const width = 300;
  const height = 300;

  // Create CloudinaryImage instance
  const cloudinaryImage = new CloudinaryImage(publicId, {
    cloudName: "dgveluvei",
  });

  // Apply transformations (background removal and drop shadow)
  const imageUrl = cloudinaryImage
    .effect(backgroundRemoval()) // Apply background removal
    .effect(dropShadow().azimuth(150).elevation(50).spread(70)) // Apply drop shadow
    .resize(scale().width(width).height(height)) // Resize image
    .format("auto") // Auto format
    .quality("auto") // Auto quality
    .toURL(); // Generate the URL

  return (
    <div>
      <h1>Cloudinary Background Removal Example</h1>
      <img
        width={width}
        height={height}
        src={`https://res.cloudinary.com/demo/image/upload/e_background_removal/e_grayscale/cart_items/cart_items/67491af569eb53806f82ea1f_1732844996985`}
        alt="Image-with Background Removed"
      />
    </div>
  );
};

export default CloudinaryBgremove;
