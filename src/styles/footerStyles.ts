import styled, { keyframes } from "styled-components";

// Define the shine animation
const shine = keyframes`
  0% {
    text-shadow: 0px 0px 2px rgba(255, 255, 255, 0.3);
  }
  50% {
    text-shadow: 0px 0px 8px rgba(255, 255, 255, 0.6);
  }
  100% {
    text-shadow: 0px 0px 2px rgba(255, 255, 255, 0.3);
  }
`;

export const FooterContainer = styled.footer`
  width: 100%;
  background: rgba(0, 0, 0, 0.85);
  padding: 1.5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 10;
`;

export const IconContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 0.5rem;
  flex-wrap: wrap;
`;

export const IconLink = styled.a`
  color: #ffffff;
  font-size: 1.5rem;
  transition: color 0.3s ease, transform 0.2s ease-in-out;

  &:hover {
    color: #ffffff;
    transform: scale(1.15);
  }
`;

export const Copyright = styled.p`
  font-size: 0.9rem;
  font-weight: 300;
  color: #ffffff;
  opacity: 0.8;
  font-family: "Raleway", sans-serif;
  margin-top: 0.5rem;
  text-align: center;
`;

// ✨ Fix Animation Hydration Issue: Only animate on the client
export const NameLink = styled.a`
  color: #ffffff;
  font-weight: 400;
  text-decoration: none;
  transition: text-shadow 0.3s ease-in-out;

  &:hover {
    text-shadow: 0px 0px 10px rgba(255, 255, 255, 0.8);
  }

  /* Only animate the shine effect after hydration */
  @media (prefers-reduced-motion: no-preference) {
    animation: ${shine} 3s infinite ease-in-out;
  }
`;
