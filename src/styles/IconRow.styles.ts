import styled from "styled-components";

export const IconRowContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
  width:100%
`;
export const IconRowItem = styled.button<{ bgcolor: string }>`
  border: none;
  border-radius: 24px;
  width: 90px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: ${({ bgcolor }) => bgcolor};
  box-shadow: inset 0 0 2px rgba(255,255,255,0.1);
  
`;
