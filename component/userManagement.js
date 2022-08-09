import React from 'react';
import { useState,useEffect,useRef,useContext } from 'react';

import {createUser, getUsers,setRole,getUser,Realtime } from './system/firebaseActions';
import axios from 'axios';
import { useSession, signIn, signOut } from "next-auth/react"



const Input =({label="",type="text",placeholder="",onChange={},value="",id=""})=>{
    return(
  
        <div className="w-full mb-2">

        <div className="flex items-center">
          <input  id={id} type={type} placeholder={placeholder} className="w-full border rounded px-3 py-2 text-gray-700 focus:outline-none" 
          onChange = {onChange}
          value = {value}
          />
        </div>
      </div>
    )
}

const Usermanagement = () => {
  

    const errorRef = useRef();

    const [errMsg,setErmsg] = useState('');
    const [success,setsuccess] = useState(false);
 
    Realtime();
    
    const[username,setUsername]=useState("");
    const[Email,setEmail]=useState("");
 
    const [users,setUsers]=useState([]);

    const getUserr=async()=>{
        console.log(Email);
        const oneuser=await getUser(Email);
        
        oneuser.forEach((doc)=>{ 
            console.log(doc.data());
        });
    
    }
    
    const getAll=async()=>{

        const res=await getUsers();
     
        setUsers([]);
        res.forEach((doc)=>{
            console.log(doc.id);
            console.log(doc.data());
            setUsers((prev)=>[...prev,doc.data()]);
            
        })
        console.log(users);
    }
    
    useEffect(()=>{
        useRef.current?.focus();
    },[]);


    
    const handleSubmit =async (e)=>{
        e.preventDefault();
       const data={

        username:username,
        email:Email,
       }
       const res= createUser(data);
       console.log(res);
        /*
        setUser('');
        setPwd('');
        */
        setsuccess(true);
    }

  return (
  
    <section className='py-24 '>
      
        <p> Create New User</p>

       {errMsg.length>0?(<div ref = {errorRef} className={" bg-green-100 border-l-4 border-red-500 text-red-700 p-4"+errMsg?"errMsg":"offScreen"} role="alert">
            <p className ="font-bold">Simple Alert</p>
            <p>This is a Simple Alert with Tailwind Snippets</p>
            </div>):""}
    <div className="container mx-auto text-gray-600 body-font flex  defaultscroll bg-white is-sticky items-center justify-center">
        <form className="xl:w-2/6 lg:w-3/5 md:w-2/3 w-5/6  rounded-lg items-center justify-center " onSubmit={handleSubmit}>
          <div className="flex font-bold justify-center mt-6">
            <img className="h-20 w-20 mb-3" src="./images/kabin.png" />
          </div>
          <h2 className="text-2xl text-center text-gray-200 mb-8">Create New User</h2>
          <div className="px-12 pb-10 justify-center flex flex-col items-center">
           


            <Input label="text" type="text" placeholder="Email Address" onChange={(e)=>setEmail(e.target.value)} value={Email} id="Email"  required={true}/>
            <Input label="text" type="text" placeholder="Username" onChange={(e)=>setUsername(e.target.value)} value={username} id="username"   required={true}/>
            
            
            <button type="submit" className="py-2 mt-8 rounded-sm xl:w-1/6  md:w-2/6 w-5/6 bg-black  text-gray-100 focus:outline-none">
              New User
            </button>
            <div className="flex font-bold justify-center mt-6">
          {
           users.length> 0?users.map((user)=>{
              return(
               
                <div key={user.email} className="xl:w-1/6  md:w-auto w-auto justify-center items-center  ">
                  <p>{user.name}</p>
                  <p>{user.email}</p>
                </div>
               
              )
            }):""
          }
          </div>
            <button type="button" onClick={()=>getAll()}  className="py-2 mt-8 rounded-sm xl:w-1/6  md:w-2/6 w-5/6 bg-black  text-gray-100 focus:outline-none">
              Get Users
            </button>

            <button type="button" onClick={()=>getUserr()}  className="py-2 mt-8 rounded-sm xl:w-1/6  md:w-2/6 w-5/6 bg-black  text-gray-100 focus:outline-none">
              Get User
            </button>
          </div>
        </form>
      </div>
    
      </section>
   
  ) 
} 
export default Usermanagement;; 