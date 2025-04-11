// src/components/Header/AuthAvatar.jsx
import { RxAvatar } from 'react-icons/rx';
import styled from 'styled-components';
import { IconButton } from '../styles/Header.styles';

const ProfilePic = styled.div`
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

interface AuthAvatarProps {
  user?: {
    photoURL?: string | null;
    displayName?: string | null;
  };
  openDialog: () => void;
  toggleUserMenu: () => void;
}


const AuthAvatar: React.FC<AuthAvatarProps> = ({ user, openDialog, toggleUserMenu }) => {
  if (user?.photoURL) {
    return (
      <ProfilePic onClick={toggleUserMenu}>
        <img src={user.photoURL} alt={user.displayName || 'User avatar'} />
      </ProfilePic>
    );
  } else if (user?.displayName) {
    return (
      <ProfilePic onClick={toggleUserMenu}>
        {user.displayName.charAt(0).toUpperCase()}
      </ProfilePic>
    );
  } else {
    return (
      <IconButton onClick={openDialog}>
        <RxAvatar size={35} />
      </IconButton>
    );
  }
};

export default AuthAvatar;