// src/components/Header/SignInDialog.jsx
import styled from 'styled-components';
import { FcGoogle } from "react-icons/fc";
import { auth } from '../firebase';
import { signInWithPopup, signInWithRedirect, GoogleAuthProvider } from 'firebase/auth';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 999;
`;

const Dialog = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #303134;
  padding: 24px;
  border-radius: 12px;
  border: 1px solid #5f6368;
  width: 90%;
  max-width: 400px;
  z-index: 1000;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 16px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);

  @media (max-width: 480px) {
    padding: 16px;
    gap: 12px;
  }

  h2 {
    margin: 0;
    font-size: 20px;

    @media (max-width: 480px) {
      font-size: 18px;
    }
  }

  p {
    font-size: 14px;
    color: #dadce0;

    @media (max-width: 480px) {
      font-size: 13px;
    }
  }
`;

const SignInButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  background-color: transparent;
  border: 1px solid #5f6368;
  border-radius: 8px;
  padding: 12px 16px;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  width: 100%;

  &:hover {
    background-color: #3c4043;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    padding: 10px 14px;
    gap: 10px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  color: #9aa0a6;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    color: white;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

interface SignInDialogProps {
  onClose: () => void;
}

const SignInDialog: React.FC<SignInDialogProps> = ({ onClose }) => {
  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const isMobile = window.innerWidth < 768;

      if (isMobile) {
        await signInWithRedirect(auth, provider);
      } else {
        await signInWithPopup(auth, provider);
        onClose();
      }
    } catch (error) {
      console.error('Error signing in with Google:', error);
    }
  };

  return (
    <>
      <Overlay onClick={onClose} />
      <Dialog>
        <CloseButton onClick={onClose}>✕</CloseButton>
        <h2>Sign in</h2>
        <p>Use your Google Account to access saved searches, history, and more</p>
        <SignInButton onClick={handleGoogleSignIn}>
          <FcGoogle size={24} />
          Sign in with Google
        </SignInButton>
      </Dialog>
    </>
  );
};

export default SignInDialog;
