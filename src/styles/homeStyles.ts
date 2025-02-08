import { CSSProperties } from "react";

// Main Container
export const containerStyle: CSSProperties = {
  position: "relative",
  width: "100%",
  minHeight: "100vh",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
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

// Text Container - FIXED FOR MOBILE
export const textContainerStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  width: "90%",
  maxWidth: "700px",
  padding: "1rem",
  zIndex: 2,
};

// Heading - FIXED FOR MOBILE
export const headingStyle: CSSProperties = {
  fontSize: "clamp(2.5rem, 6vw, 5rem)", // Adjusted for smaller screens
  margin: 0,
  fontWeight: 700,
  color: "#FFFFFF",
  fontFamily: "'Racing Sans One', sans-serif",
  textShadow: `
    0px 0px 10px rgba(255, 215, 0, 0.5),  
    0px 0px 20px rgba(255, 215, 0, 0.3)
  `,
};

// Subheading - FIXED FOR MOBILE
export const subHeadingStyle: CSSProperties = {
  fontSize: "clamp(1.2rem, 4vw, 2rem)", // Adjusted for readability
  marginTop: "1rem",
  fontWeight: 300,
  color: "#FFFFFF",
  fontFamily: "'Nothing You Could Do', cursive",
  textShadow: "0px 0px 8px rgba(255, 215, 0, 0.3)",
};

// Button - FIXED FOR MOBILE
export const buttonStyle: CSSProperties = {
  marginTop: "1.5rem",
  padding: "1rem 2rem",
  borderRadius: "8px",
  background: "rgba(255, 215, 0, 0.9)", // Ensuring opacity
  color: "#000",
  fontSize: "clamp(1rem, 4vw, 1.2rem)", // Adjusted for small screens
  fontWeight: "bold",
  fontFamily: "'Racing Sans One', sans-serif",
  border: "2px solid #FFD700",
  cursor: "pointer",
  transition: "transform 0.3s ease-out, box-shadow 0.3s ease-out",
};
