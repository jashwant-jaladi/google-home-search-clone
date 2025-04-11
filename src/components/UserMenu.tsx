import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import { UserMenuContainer, ProfilePic } from '../styles/UserMenu.styles';



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