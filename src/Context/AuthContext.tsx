import { createContext, useState, useEffect, useContext } from 'react';
import { auth } from '../firebase';
import { 
  signInWithPopup, 
  GoogleAuthProvider, 
  signOut as firebaseSignOut, 
  User, 
  UserCredential 
} from 'firebase/auth';
import { ReactNode } from 'react';


export const AuthContext = createContext<{
    currentUser: User | null;
    signInWithGoogle: () => Promise<UserCredential>;
    signOut: () => Promise<void>;
}>({
    currentUser: null,
    signInWithGoogle: async () => {
        throw new Error('signInWithGoogle function must be overridden');
    },
    signOut: async () => {
        throw new Error('signOut function must be overridden');
    }
});
  

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);


  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  const signOut = () => {
    return firebaseSignOut(auth);
  };

 
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signInWithGoogle,
    signOut
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};


export const useAuth = () => {
  return useContext(AuthContext);
};