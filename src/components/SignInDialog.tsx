import { Dialog, Overlay, CloseButton, SignInButton } from '../styles/SignInDialog.styles';
import { FcGoogle } from "react-icons/fc";
import { auth } from '../firebase';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';



interface SignInDialogProps {
  onClose: () => void;
}

const SignInDialog: React.FC<SignInDialogProps> = ({ onClose }) => {
  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      onClose();
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
