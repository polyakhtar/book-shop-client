import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.init';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
const auth=getAuth(app);
export const AuthContext=createContext();
const AuthProvider = ({children}) => {
const [user,setUser]=useState(null);
const [loading,setLoading]=useState(true);
const createUser=(email,password)=>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,password);
}
const logIn=(email,password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password)
}
const googleSignIn=(provider)=>{
    setLoading(true);
    return signInWithPopup(auth,provider)
}
const logOut=()=>{
    setLoading(true)
    return signOut(auth)
}
const updateUser=(userInfo)=>{
    return updateProfile(auth.currentUser,userInfo)
}
useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser);
        setLoading(false)

    })
    return ()=>{
        unsubscribe();
    }
}
,[])
const authInfo={user,loading,createUser,logIn,googleSignIn,updateUser,logOut}
    return (
        <div>
         <AuthContext.Provider value={authInfo}>
            {children}
            </AuthContext.Provider>   
        </div>
    );
};

export default AuthProvider;