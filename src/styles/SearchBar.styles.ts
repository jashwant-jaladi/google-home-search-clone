import styled from "styled-components";

export const GoogleLogo = styled.img`
    width: 35%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    padding-left:10px`  

    export const SearchWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 90%;
    max-width: 600px;
    margin-top: 20px;
    
    padding: 12px 16px;
    border: 1px solid #5f6368;
    border-radius: 24px;
    background-color: #303134;
    gap: 12px;
  `;
  
  export const SearchInput = styled.input`
    flex: 1;
    background: transparent;
    border: none;
    outline: none;
    color: white;
    font-size: 18px;
    font-weight: 500;
  
    ::placeholder {
      color: #9aa0a6;
      font-weight: 400;
    }
  `;
  
 
 
  