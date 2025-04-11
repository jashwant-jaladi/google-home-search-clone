// src/components/Header/AuthAvatar.jsx
import { RxAvatar } from 'react-icons/rx';
import { ProfilePic } from '../styles/AuthAvatar.styles';
import { IconButton } from '../styles/Header.styles';


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