import styled from "styled-components";

export const FeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: transparent;
  padding: 0 16px; /* Add some padding for smaller screens */

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

export const NewsCard = styled.a`
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-radius: 12px;
  background-color: #303134;
  text-decoration: none;
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: background-color 0.2s ease;
  width: 100%; /* Full width on small screens */

  &:hover {
    background-color: #3c4043;
  }

  @media (min-width: 768px) {
    width: calc(50% - 16px); /* Two cards per row on medium screens */
  }

  @media (min-width: 1024px) {
    width: calc(33.333% - 16px); /* Three cards per row on large screens */
  }
`;

export const NewsImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px 8px 0 0; /* Top corners only if you want it flush with card */
`;

export const NewsContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
`;

export const NewsTitle = styled.h3`
  font-size: 16px;
  margin: 0;
  color: #e8eaed;

`;

export const NewsMeta = styled.div`
  font-size: 13px;
  color: #9aa0a6;
  padding-top: 5px;
`;
