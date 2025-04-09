import styled from "styled-components";


export const Wrapper = styled.div`
  width: 100%;
  max-width: 70%;
  margin: 0 auto;
  padding: 12px 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  scroll-behavior: smooth;
  padding-bottom: 80px;
  @media (max-width: 768px) {
    max-width: 90%;
  }
`
