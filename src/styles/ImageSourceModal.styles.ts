import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const ModalBox = styled.div`
  background-color: #202124;
  color: white;
  padding: 20px 30px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Button = styled.button`
  padding: 10px 16px;
  font-size: 16px;
  background-color: #3c4043;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #5f6368;
  }
`;