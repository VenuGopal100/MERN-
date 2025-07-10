import React, {  createContext, useEffect, useState } from 'react';
import app from "../firebase/firebase.config";
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup} from "firebase/auth";

export const AuthContext=createContext();
const auth=getAuth(app);
const googleProvider=new GoogleAuthProvider();


const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const[loading,setLoading]=useState(true);
    const[error,setError]=useState("");

    const createUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const loginwithGoogle=()=>{
      setLoading(true);
      return signInWithPopup(auth,googleProvider);
    }


    

    const login=(email,password)=>{
      setLoading(true);
      return signInWithEmailAndPassword(auth,email,password);
    }

    useEffect(()=>{

      const unsubscribe=onAuthStateChanged(auth,currentUser=>{
          console.log(currentUser);
          setUser(currentUser);
          setLoading(false);
        });
        return()=>{
          return unsubscribe();
        }
      
    },[])

    const AuthInfo={
        user,
        createUser,
        loginwithGoogle,
        loading,
        login

    }

  return (
    <AuthContext.Provider value={AuthInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider

