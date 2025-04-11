// src/components/Header/UserMenu.jsx
import styled from 'styled-components';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';

const UserMenuContainer = styled.div`
  position: absolute;
  top: 50px;
  right: 20px;
  background-color: #303134;
  border-radius: 8px;
  padding: 12px;
  border: 1px solid #5f6368;
  z-index: 9999;
  min-width: 220px;
  max-width: 90vw;

  @media (max-width: 480px) {
    right: 10px;
    top: 45px;
    min-width: unset;
    width: 90vw;
    padding: 10px;
  }

  .user-info {
    display: flex;
    align-items: center;
    gap: 12px;
    padding-bottom: 12px;
    border-bottom: 1px solid #5f6368;
    margin-bottom: 12px;

    @media (max-width: 480px) {
      flex-direction: row;
      gap: 10px;
    }

    .user-details {
      h4 {
        margin: 0;
        color: white;
        font-size: 16px;

        @media (max-width: 480px) {
          font-size: 14px;
        }
      }

      p {
        margin: 4px 0 0;
        color: #9aa0a6;
        font-size: 14px;

        @media (max-width: 480px) {
          font-size: 13px;
        }
      }
    }
  }

  .menu-item {
    padding: 8px 12px;
    color: white;
    cursor: pointer;
    border-radius: 4px;

    &:hover {
      background-color: #3c4043;
    }

    @media (max-width: 480px) {
      font-size: 14px;
      padding: 8px 10px;
    }
  }
`;

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
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 480px) {
    width: 32px;
    height: 32px;
    font-size: 14px;
  }
`;


interface User {
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
}

interface UserMenuProps {
  user: User;
  onClose: () => void;
}

const UserMenu: React.FC<UserMenuProps> = ({ user, onClose }) => {
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      onClose();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <UserMenuContainer>
      <div className="user-info">
        <ProfilePic>
          {user.photoURL ? (
            <img src={user.photoURL || ''} alt={user.displayName || 'User'} />
          ) : (
            user.displayName?.charAt(0).toUpperCase()
          )}
        </ProfilePic>
        <div className="user-details">
          <h4>{user.displayName}</h4>
          <p>{user.email}</p>
        </div>
      </div>
      
      <div className="menu-item" onClick={handleSignOut}>
        Sign out
      </div>
    </UserMenuContainer>
  );
};

export default UserMenu;