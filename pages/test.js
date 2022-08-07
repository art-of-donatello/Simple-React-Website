import React from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useSession, signIn, signOut,getSession} from "next-auth/react"
import { getCsrfToken } from "next-auth/react"
import {app,db,auth} from "../component/system/firebase";
import { getDatabase, ref, set } from "firebase/database";
import { collection, addDoc,doc,setDoc } from "firebase/firestore"; 

export const LoginCheck=()=>{
    const loginInfo = useSelector((state)=>state.login);
    console.log(JSON.stringify(loginInfo));
    return loginInfo;
}

export default function Home() {
    const  session = useSession();
    const database = getDatabase();
    set(ref(database, 'users/' + '1234'), {
      username: 1234,
      email: 'asdasd@asdas.com',
    }).then((result) => {console.log(result)});

    try {
      const docRef = setDoc(doc(db, "user","test"), {
        first: "Ada",
        last: "Lovelace",
        born: 1815
      });
      const data = {
        first: "Ada",
        last: "Lovelace",
        born: 1815
      };
      const newCityRef = doc(collection(db, "user","test","test3"));
      const newCityRef1 = doc(collection(db, "user","test","test4"));
      setDoc(newCityRef1, data);


      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  
    /*const csfrtoken= getCsrfToken();
    console.log(csfrtoken.then((data)=>console.log(data)));*/
    const check = LoginCheck();
    if(typeof window!=='undefined'){
    const serializedStore = localStorage.getItem('store');

     
    console.log("data");
    console.log(JSON.stringify(serializedStore));
    }

  
    if(session.data!==null){
      console.log(session);
    }
    if(session.status==="unauthenticated"){
      signIn();
      return "unauthenticated";
    }else{

  return (

    <div className='container bg-slate-300'>
        asdsad
       {JSON.stringify(check)}
       <Link href="/">
    <button>
        Teste Git
    </button>
    </Link>
    <button onClick={()=>signIn()}>
        logina git Git
    </button>
    <button onClick={()=>signOut()}>
        logina ÇIKIÇKI
    </button>
    </div>
  )}
}
