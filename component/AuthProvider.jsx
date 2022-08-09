import { createContext,useState,useEffect } from "react";
import React from "react";
import { getAuth,signOut, sendSignInLinkToEmail,signInWithEmailAndPassword,createUserWithEmailAndPassword } from "firebase/auth";
import  {FirebaseConfig} from "./system/firebase";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const AuthContext = createContext({});


 
export const AuthProvider = ({children}) => {
  const firebaseAuth = initializeApp(FirebaseConfig);
    
    const [auth,setAuth]=useState({});

    function logout(){
      const auth1 = getAuth();
      console.log(auth1);
      signOut(auth1).then(() => {
        // Sign-out successful.
        console.log("logout başarılı");
      }).catch((error) => {
        // An error happened.
      });

    }
    function login(){
      
      console.log("login girişi yapıldı");
      const auth1 = getAuth(firebaseAuth);
      console.log(auth);
      signInWithEmailAndPassword(auth1,auth.user,auth.pwd).then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
    }
  
    function newUser(){
      console.log("yeni kullanici kaydı"+auth.user);
      const auth1 = getAuth(firebaseAuth);
createUserWithEmailAndPassword(auth1,auth.user,auth.pwd)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
    }
   

   return (
     <AuthContext.Provider value={{auth,setAuth,login,newUser,logout,getAuth}}>
        {children}
     </AuthContext.Provider>
   )
 }
 
 export default AuthContext