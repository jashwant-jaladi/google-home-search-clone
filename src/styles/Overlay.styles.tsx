import styled, { keyframes } from "styled-components"

const pulse = keyframes`
  0% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.1); }
  100% { opacity: 0.3; transform: scale(1); }
`

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 1);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`

export const Dots = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 20px;
`

export const Dot = styled.div<{ color: string }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${({ color }) => color};
  animation: ${pulse} 1.2s infinite ease-in-out;
`

export const SongButton = styled.button`
  margin-top: 30px;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.4);
  color: white;
  padding: 8px 16px;
  border-radius: 999px;
  font-size: 14px;
  cursor: not-allowed;
  opacity: 0.4;
`