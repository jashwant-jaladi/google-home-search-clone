import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  padding: 20px 0;
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #303134;
  z-index: 100;
`;


type IconButtonProps = {
    isActive?: boolean;
  };
  
  export const FooterIconButton = styled.button<IconButtonProps>`
    background: ${({ isActive }) => (isActive ? "#0883AF" : "transparent")};
    border: none;
    cursor: pointer;
    border-radius: 24px;
    width: 70px;
    height: 35px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  
    &:hover {
      background-color: #E8F0FE;
    }
  
    &:focus {
      outline: none;
    }
  
    transition: background-color 0.2s ease;
  `;
  