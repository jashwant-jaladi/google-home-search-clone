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
    transition: opacity 0.3s ease;
    margin-bottom: 20px;
    
    @media (min-width: 768px) {
        width: 20%;
    }

    @media (min-width: 1024px) {
        width: 15%;
    }
`

export const SearchContainer = styled.div<{ focused?: boolean }>`
    position: ${({ focused }) => focused ? 'fixed' : 'sticky'};
    top: ${({ focused }) => focused ? '0' : 'auto'};
    left: 0;
    right: 0;
    z-index: 100;
    padding: ${({ focused }) => focused ? '20px' : '0 0 20px 0'};
    width: 100%;
    height: ${({ focused }) => focused ? '100vh' : 'auto'};
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${({ focused }) => focused ? '#202124' : 'transparent'};
    transition: all 0.3s ease;

    @media (max-width: 600px) {
        padding: 10px;
    }
    
    
    @media (max-width: 375px) { // Mobile M
        padding: 8px;
    }
    
    @media (max-width: 320px) { // Mobile S
        padding: 6px;
    }
`   

export const SearchWrapper = styled.div<{ focused?: boolean }>`
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 600px;
    padding: 12px 16px;
    border: 1px solid #5f6368;
    border-radius: 24px;
    background-color: #303134;
    gap: 12px;
    transition: all 0.3s ease;
    transform: ${({ focused }) => focused ? 'translateY(0)' : 'none'};
    position: sticky;
    top: 0;
    z-index: 99;

    svg {
        width: 20px;
        height: 20px;
        flex-shrink: 0;
        
        @media (max-width: 480px) { // Added intermediate breakpoint for devices like iPhone 12 Pro
            width: 18px;
            height: 18px;
        }
        
        @media (max-width: 375px) {
            width: 16px;
            height: 16px;
        }
        
        @media (max-width: 320px) {
            width: 14px;
            height: 14px;
        }
    }

    @media (max-width: 600px) {
        gap: 8px;
        padding: 10px 12px;
    }
    
    @media (max-width: 480px) { // Added intermediate breakpoint for devices like iPhone 12 Pro
        gap: 5px;
        padding: 12px 12px;
    }
    
    @media (max-width: 375px) {
        gap: 6px;
        padding: 8px 10px;
    }
    
    @media (max-width: 360px) { // Mobile S
        gap: 4px;
        padding: 8px 8px;
    }
    @media (max-width: 320px) {
        gap: 4px;
        padding: 6px 8px;
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

    @media (max-width: 600px) {
        font-size: 16px;
    }
    
    @media (max-width: 375px) { // Mobile M
        font-size: 15px;
    }
    
    @media (max-width: 320px) { // Mobile S
        font-size: 14px;
    }
`

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 99;
    opacity: 0;
    animation: fadeIn 0.3s ease forwards;

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`

export const PreviousSearches = styled.div`
    width: 100%;
    max-width: 600px;
    border-radius: 12px;
    margin-top: 8px;
    padding: 8px 0;
    opacity: 0;
    transform: translateY(-10px);
    animation: slideIn 0.3s ease forwards;

    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateY(-10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @media (max-width: 600px) {
        padding: 8px;
    }
    
    @media (max-width: 375px) { // Mobile M
        padding: 6px;
    }
    
    @media (max-width: 320px) { // Mobile S
        padding: 4px;
    }
`

export const SearchItem = styled.div`
    display: flex;
    align-items: center;
    padding: 8px 16px;
    gap: 12px;
    cursor: pointer;
    color: #e8eaed;
    font-size: 16px;
    transition: background-color 0.2s ease;

    &:hover {
        background-color: #3c4043;
        border-radius: 8px;
    }

    span {
        flex: 1;
    }

    @media (max-width: 600px) {
        padding: 8px 12px;
        gap: 10px;
        font-size: 15px;
    }
    
    @media (max-width: 375px) { // Mobile M
        padding: 6px 10px;
        gap: 8px;
        font-size: 14px;
    }
    
    @media (max-width: 320px) { // Mobile S
        padding: 5px 8px;
        gap: 6px;
        font-size: 13px;
    }
`

export const PreviousSearchSettings = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  width: 100%;
  margin-top: 10px;

  @media (max-width: 600px) {
    font-size: 12px;
  }
  
  @media (max-width: 375px) { // Mobile M
    font-size: 11px;
    margin-top: 8px;
  }
  
  @media (max-width: 320px) { // Mobile S
    font-size: 10px;
    margin-top: 6px;
  }
`

export const NoPreviousSearches = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px;
  color: #9aa0a6;
  gap: 8px;

  span:first-child {
    font-size: 16px;
    font-weight: 500;
  }

  span:last-child {
    font-size: 14px;
  }

  @media (max-width: 600px) {
    padding: 16px;
    
    span:first-child {
      font-size: 15px;
    }

    span:last-child {
      font-size: 13px;
    }
  }
  
  @media (max-width: 375px) { // Mobile M
    padding: 12px;
    gap: 6px;
    
    span:first-child {
      font-size: 14px;
    }

    span:last-child {
      font-size: 12px;
    }
  }
  
  @media (max-width: 320px) { // Mobile S
    padding: 10px;
    gap: 4px;
    
    span:first-child {
      font-size: 13px;
    }

    span:last-child {
      font-size: 11px;
    }
  }

`

