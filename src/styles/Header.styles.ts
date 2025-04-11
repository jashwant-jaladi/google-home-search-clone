import styled from "styled-components";



export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 20px;`

export const IconButton = styled.button`
    background: transparent;
    border: none;
    font-size: 32px;
    cursor: pointer;
    color: lightblue;`

// GeminiIconWrapper
export const GeminiIconWrapper = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 10px;

  svg {
    width: 20px;
    height: 20px;
  }
`;


// SearchPill
export const SearchPill = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 12px;
  border-radius: 12px;
  margin: 5px;
  background-color: #202124;
  color: white;
  font-weight: 500;
  font-size: 15px;

 

  p {
    margin: 0;
    
  }

  svg {
    width: 24px;
    height: 24px;
  }
`;


// SearchContainer
export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 42%;
  padding-: 0px 15px;
  background-color: #303134;
  border-radius: 12px;

  @media (max-width: 2500px) {
    width: 12%;
    
  }
  @media (max-width: 1300px) {
    width: 22%;
  }
  @media (max-width: 768px) {
    width: 25%;
    
  }
  
  @media (max-width: 1024px) {
    width: 25%;
    
  }
  @media (max-width: 480px) {
    width: 45%;
    
  }
  
  @media (max-width: 375px) {
    width: 47%;
} 
  @media (max-width: 360px) { 
    width: 50%;
    
  }
  @media (max-width: 320px) {
    width: 45%;
    
  }

`;


