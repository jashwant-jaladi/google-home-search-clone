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
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const Card = styled.div`
  background-color: #303134;
  padding: 16px;
  border-radius: 12px;
  width: 200px;
  display: flex;
  flex-direction: column;
`;

export const Thumb = styled.img`
  width: 100%;
  height: 120px;
  object-fit: cover;
  border-radius: 8px;
`;

export const Title = styled.p`
  font-size: 14px;
  margin: 10px 0;
  color: #e8eaed;
`;

export const SourceLink = styled.a`
  font-size: 13px;
  color: #8ab4f8;
  text-decoration: underline;
  transition: color 0.2s;

  &:hover {
    color: #a3d2ff;
  }
`;
