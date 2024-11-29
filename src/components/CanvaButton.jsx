// import React, { useState } from "react";

// const CanvaButton = () => {
//   const [designUrl, setDesignUrl] = useState("");

//   const handleCanvaSuccess = (design) => {
//     console.log("Design received:", design);
//     setDesignUrl(design.exportUrl);
//   };
//   // "eea46613d68136e2a7f0e1a74a4e4d6048d8803b⁠",
//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h1>Design Your Business Card</h1>
//       <div
//         className="canva-button"
//         data-app-id="your-app-id" // Replace with your Canva API app ID
//         data-design-type="business_card"
//         data-publish="true"
//         data-height="600"
//         data-width="400"
//         onCanvaSuccess={(e) => handleCanvaSuccess(e.detail)}
//         style={{
//           display: "inline-block",
//           backgroundColor: "#00c4cc",
//           padding: "10px 20px",
//           borderRadius: "5px",
//           color: "white",
//           cursor: "pointer",
//           textDecoration: "none",
//         }}
//       >
//         Design with Canva
//       </div>
//       {designUrl && (
//         <div style={{ marginTop: "20px" }}>
//           <h2>Your Design:</h2>
//           <img
//             src={designUrl}
//             alt="Designed Business Card"
//             style={{ maxWidth: "100%", border: "1px solid #ddd" }}
//           />
//           <p>
//             <a href={designUrl} target="_blank" rel="noopener noreferrer">
//               Download Your Design
//             </a>
//           </p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CanvaButton;
