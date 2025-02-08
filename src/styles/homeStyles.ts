import { CSSProperties } from "react";

// Main Container
export const containerStyle: CSSProperties = {
  position: "relative",
  width: "100%",
  minHeight: "100vh",
  overflow: "hidden",
};

// Video Background
export const videoWrapperStyle: CSSProperties = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  overflow: "hidden",
  zIndex: 0,
  filter: "blur(2px)",
};

// Gradient Overlay
export const overlayStyle: CSSProperties = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.6))",
  pointerEvents: "none",
  zIndex: 1,
};

// Text Container
export const textContainerStyle: CSSProperties = {
  position: "absolute",
  top: "10%", // Keeps the element 10% from the top
  left: "50%", // Centers it horizontally
  transform: "translateX(-50%)", // Correct horizontal centering
  textAlign: "center",
  width: "80%",
  maxWidth: "700px",
  zIndex: 2,
};

// Heading
export const headingStyle: CSSProperties = {
  fontSize: "clamp(3rem, 8vw, 6rem)",
  margin: 0,
  fontWeight: 700,
  color: "#FFFFFF",
  textShadow: `
    0px 0px 10px rgba(255, 215, 0, 0.5),  
    0px 0px 20px rgba(255, 215, 0, 0.3)
  `,
};

// Subheading
export const subHeadingStyle: CSSProperties = {
  fontSize: "clamp(1.5rem, 4vw, 2rem)",
  marginTop: "1.25rem",
  fontWeight: 300,
  color: "#FFFFFF",
  textShadow: "0px 0px 8px rgba(255, 215, 0, 0.3)",
};

// Button
export const buttonStyle: CSSProperties = {
  marginTop: "1.5rem",
  padding: "1rem 2rem",
  borderRadius: "8px",
  background: "#FFD700",
  color: "#000",
  fontSize: "1.2rem",
  fontWeight: "bold",
  border: "none",
  cursor: "pointer",
  transition: "transform 0.3s ease-out, box-shadow 0.3s ease-out",
};
