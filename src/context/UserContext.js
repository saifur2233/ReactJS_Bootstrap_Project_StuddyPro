import React, { createContext, useEffect, useState } from 'react'
import {getAuth, createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, signOut,
  onAuthStateChanged,  GithubAuthProvider, 
  GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthContext = createContext();

const auth = getAuth(app)

const UserContext = ({children}) => {
  const [user, setUser] =useState({});
  const [loading, setLoading] = useState(true);
  const googleprovider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();


  const createUser=(email, password)=>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const logIn=(email, password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  const logout=()=>{
    setLoading(true);
    return signOut(auth);
  }

  const GoogleSignIn = () =>{
    setLoading(true);
    return signInWithPopup(auth, googleprovider);
  }

  const GitHubSignIn = () =>{
    setLoading(true);
    return signInWithPopup(auth, gitHubProvider);
  }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, currentUser=>{
      setUser(currentUser);
      setLoading(false);
    })
    return ()=>{
      unsubscribe();
    }
  },[]);

  const authInfo = {user, loading, createUser, GoogleSignIn, GitHubSignIn, logIn, logout};

  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default UserContext