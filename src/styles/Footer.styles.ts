import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0;
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #303134;
  z-index: 100;


  @media (min-width: 768px) {
    padding: 10px 0;
  }
`;


type IconButtonProps = {
    isActive?: boolean;
  };
  
  export const FooterIconButton = styled.button<IconButtonProps>`
  background: ${({ isActive }) => (isActive ? "#0883AF" : "transparent")};
  border: none;
  cursor: pointer;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ isActive }) => (isActive ? "#0883AF" : "#e8f0fe")};
  }

  &:focus-visible {
    outline: 2px solid #5eb5d5;
    outline-offset: 3px;
  }

  &:active {
    background-color: ${({ isActive }) => (isActive ? "#0883AF" : "#dbeafe")};
  }

  @media (min-width: 768px) {
    width: 70px;
    height: 70px;
  }
`;
