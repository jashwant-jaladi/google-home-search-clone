import styled from "styled-components";

export const GoogleLogo = styled.img`
    width: 35%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    padding-left: 10px;
    position: sticky;
   
    
`

export const SearchContainer = styled.div`
    position: sticky;
    top: 0;
    z-index: 99;
    margin-top : 20px;
    padding-bottom: 20px;
    width: 100%;
    display: flex;
    justify-content: center;
`

export const SearchWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    
    padding: 12px 16px;
    border: 1px solid #5f6368;
    border-radius: 24px;
    background-color: #303134;
    gap: 12px;

    svg {
        width: 20px;
        height: 20px;
        flex-shrink: 0;
    }
`

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
`
