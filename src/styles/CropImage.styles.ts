import styled from "styled-components";

export const CropContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: #202124;
`;

export const Controls = styled.div`
  position: absolute;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #303134;
  padding: 16px 24px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 16px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
`;

export const ZoomSlider = styled.input`
  width: 150px;
  accent-color: #8ab4f8;
`;

export const ProceedButton = styled.button`
  background-color: #8ab4f8;
  color: #202124;
  border: none;
  border-radius: 6px;
  padding: 8px 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #a3d2ff;
  }
`;
