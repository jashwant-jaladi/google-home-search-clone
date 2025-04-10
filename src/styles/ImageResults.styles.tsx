import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 24px;
  background-color: #202124;
  min-height: 100vh;
  color: #fff;
`;

export const Heading = styled.h2`
  font-size: 28px;
  margin-bottom: 20px;
  color: #fff;
`;

export const ImagePreviewContainer = styled.div`
  margin-bottom: 24px;
`;

export const PreviewLabel = styled.h4`
  font-size: 16px;
  color: #ccc;
  margin-bottom: 8px;
`;

export const PreviewImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
  border: 2px solid #5f6368;
`;

export const ResultsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 16px;
`;

export const Card = styled.div`
  background-color: #303134;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.6);
  }
`;

export const Thumb = styled.img`
  width: 100%;
  height: 140px;
  object-fit: cover;
  display: block;
`;

export const Title = styled.p`
  font-size: 13px;
  color: #e8eaed;
  padding: 8px 10px 4px 10px;
  line-height: 1.4;
`;

export const SourceLink = styled.a`
  font-size: 12px;
  color: #8ab4f8;
  padding: 0 10px 10px 10px;
  display: inline-block;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    color: #a3d2ff;
  }
`;
export const HomeButton = styled.button`
  position: absolute;
  top: 24px;
  right: 24px;
  background-color: #303134;
  border: none;
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #3c4043;
  }

  svg {
    color: #e8eaed;
  }
`;