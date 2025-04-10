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
`
export const PreviousSearchSettings = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  width: 100%;
  margin-top: 10px;
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
`
