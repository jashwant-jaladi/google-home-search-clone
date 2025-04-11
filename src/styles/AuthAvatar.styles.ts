import styled from 'styled-components';

export const ProfilePic = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: #8ab4f8;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #202124;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
