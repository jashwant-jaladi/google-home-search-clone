import styled from "styled-components";

export const WidgetContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  padding: 10px 16px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none;
  }

  
  box-sizing: border-box;

  @media (max-width: 768px) {
  width: 100%;
}
`;



export const WidgetItemColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  padding: 10px;
  min-width: 150px; 
  height: 80px;
  scroll-snap-align: start;
  background-color: inherit;
  border-radius: 10px;
  border: 2px solid rgba(255,255,255,0.1);
  color: white;
  font-size: 14px;
  
`;

export const StyledSpan = styled.span`
  color: #f24c4c; /* Dark red */
  font-weight: 400;
  padding-left: 4px;
`;


    
export const WidgetItemRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between; 
  padding-top: 15px;
  gap: 10px;
  font-size: 16px;
  width: 100%; 
`;

export const WidgetIcon = styled.img`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    ;`

    export const AqiIcon = styled.div<{ bg: string }>`
    width: 25px;
    height: 25px;
    padding: 5px;
    border-radius: 50%;
    background-color: ${({ bg }) => bg};
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  

  export const SettingsBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  padding: 10px;
  min-width: 150px;
  height: 80px;
  scroll-snap-align: start;
  background-color: inherit;
  border-radius: 10px;
  border: 2px solid rgba(255, 255, 255, 0.1);
  color: white;
  box-sizing: border-box;
`;

export const SettingsTopRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const SettingsTitle = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #72b7d7;
`;

export const SettingsText = styled.div`
  font-size: 12px;
  color: #aaa;
  padding-top: 18px;
`;
