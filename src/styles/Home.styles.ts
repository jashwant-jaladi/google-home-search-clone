import styled from "styled-components";


export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  max-width: 70%;
  margin: 0 auto;
  padding: 12px 8px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    max-width: 90%;
  }
`;