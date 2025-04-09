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

  width: 100%;
  box-sizing: border-box;
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

export const WeatherIcon = styled.img`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    ;`