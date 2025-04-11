import styled from 'styled-components';


export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 999;
`;

export const Dialog = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #303134;
  padding: 24px;
  border-radius: 12px;
  border: 1px solid #5f6368;
  width: 90%;
  max-width: 400px;
  z-index: 1000;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 16px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);

  @media (max-width: 480px) {
    padding: 16px;
    gap: 12px;
  }

  h2 {
    margin: 0;
    font-size: 20px;
    
    @media (max-width: 480px) {
      font-size: 18px;
    }
  }

  p {
    font-size: 14px;
    color: #dadce0;
    
    @media (max-width: 480px) {
      font-size: 13px;
    }
  }
`;

export const SignInButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  background-color: transparent;
  border: 1px solid #5f6368;
  border-radius: 8px;
  padding: 12px 16px;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  width: 100%;

  &:hover {
    background-color: #3c4043;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    padding: 10px 14px;
    gap: 10px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  color: #9aa0a6;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    color: white;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;