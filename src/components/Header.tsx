import { HeaderContainer, IconButton, SearchPill, GeminiIconWrapper, SearchContainer } from '../styles/Header.styles';
import { PiFlaskFill } from "react-icons/pi";
import { FcGoogle } from "react-icons/fc";
import { useState } from 'react';
import { useAuth } from '../Context/AuthContext';
import AuthAvatar from './AuthAvatar';
import SignInDialog from './SignInDialog';
import UserMenu from './UserMenu';


const Header = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const { currentUser } = useAuth();
  
  return (
    <HeaderContainer>
      <IconButton>
        <PiFlaskFill size={35} />
      </IconButton>
      
      <SearchContainer>
        <SearchPill>
          <FcGoogle size={32}/>
          <p>Search</p>
        </SearchPill>
        
        <GeminiIconWrapper>
          <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
            <path d="M16 8.016A8.522 8.522 0 008.016 16h-.032A8.521 8.521 0 000 8.016v-.032A8.521 8.521 0 007.984 0h.032A8.522 8.522 0 0016 7.984v.032z" fill="url(#prefix__paint0_radial_980_20147)"/>
            <defs>
              <radialGradient id="prefix__paint0_radial_980_20147" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(16.1326 5.4553 -43.70045 129.2322 1.588 6.503)">
                <stop offset=".067" stopColor="#9168C0"/>
                <stop offset=".343" stopColor="#5684D1"/>
                <stop offset=".672" stopColor="#1BA1E3"/>
              </radialGradient>
            </defs>
          </svg>
        </GeminiIconWrapper>
      </SearchContainer>
      
      <AuthAvatar 
        user={currentUser || undefined} 
        openDialog={() => setIsDialogOpen(true)} 
        toggleUserMenu={() => setIsUserMenuOpen(!isUserMenuOpen)} 
      />
      
      {isDialogOpen && (
        <SignInDialog onClose={() => setIsDialogOpen(false)} />
      )}
      
      {isUserMenuOpen && currentUser && (
        <UserMenu user={currentUser} onClose={() => setIsUserMenuOpen(false)} />
      )}
    </HeaderContainer>
  );
};

export default Header;