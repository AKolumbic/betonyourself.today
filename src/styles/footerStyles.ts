import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  background: rgba(0, 0, 0, 0.85); /* Dark semi-transparent background */
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
  flex-wrap: wrap; /* Ensures icons don’t break layout */
`;

export const IconLink = styled.a`
  color: #ffffff;
  font-size: 1.5rem;
  transition: color 0.3s ease, transform 0.2s ease-in-out;

  &:hover {
    color: #ffd700;
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
