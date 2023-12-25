import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);


  const createUser = async (email, password) => {
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      // Do something with the user data if needed
      console.log("User", user);
      const newUser = userCredential.user;
      setUser(newUser);
      setLoading(false);
    } catch (error) {
      // Handle error
      console.error(error.message);
      setError(error.message);
      setLoading(false);
    }
  };
 
  const loginwithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider)
  }

  const login = async (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logOut = () => {
    return signOut(auth)
  }

  useEffect( () => {
    const unsubcribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      return unsubcribe();
    }
  }, [])

  const authInfo = {
    createUser,
    user, 
    loading,
    error,
    setError, 
    loginwithGoogle,
    login,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
