import React from 'react';
import { useState,useEffect,useRef,useContext } from 'react';

import axios from 'axios';
import { useSession, signIn, signOut } from "next-auth/react"

const register_Url= '/api/registeruser';


const Signon = () => {
  
    const userRef = useRef();
    const errorRef = useRef();

    const [user,setUser] = useState('');
    const [pwd,setPwd] = useState('');
    const [errMsg,setErmsg] = useState('');
    const [success,setsuccess] = useState(false);
    
    
    
    const[username,setUsername]=useState("");
 
      
    
    useEffect(()=>{
        useRef.current?.focus();
    },[]);

    useEffect(()=>{
        setErmsg('');
    },[user,pwd])
    
    const handleSubmit =async (e)=>{
        e.preventDefault();
        console.log(JSON.stringify(user,pwd));
        console.log( "jksadhsad jkhajksd hjksahd jkashdjkhsakjd jksahdjkhsa dkjsahdjhdjhaskj");

        const result = await signIn("credentials",{
            username:user,
            password:pwd,
            loginType:"login",
            redirect:true,
            callbackUrl:"http://localhost:3000/"
           });
/*    
        try{
            const response = await axios.post(register_Url,JSON.stringify({user,pwd}),{
                headers : {'Content-Type':'application/json'},
                withCredentials:true
            })
        
            console.log(JSON.stringify(response?.data));
            const accessToken = response?.data?.accessToken;
            const roles = response?.data?.roles;
 
           
            
            
           

        } catch (err){
            if(!err.response) {
                setErmsg(' jksadhsad jkhajksd hjksahd jkashdjkhsakjd jksahdjkhsa dkjsahdjhdjhaskj');
            }
            console.log(err?.response);
            console.log(JSON.stringify(err?.data));
        }
       */
        setUser('');
        setPwd('');
        setsuccess(true);
    }

  return (
  
    <section className='py-24 '>
      
    

       {errMsg.length>0?(<div ref = {errorRef} className={" bg-green-100 border-l-4 border-red-500 text-red-700 p-4"+errMsg?"errMsg":"offScreen"} role="alert">
            <p className ="font-bold">Simple Alert</p>
            <p>This is a Simple Alert with Tailwind Snippets</p>
            </div>):""}
    <div className="container mx-auto text-gray-600 body-font flex  defaultscroll bg-white is-sticky items-center justify-center">
        <form className="xl:w-2/6 lg:w-3/5 md:w-2/3 w-5/6  rounded-lg items-center justify-center " onSubmit={handleSubmit}>
          <div className="flex font-bold justify-center mt-6">
            <img className="h-20 w-20 mb-3" src="./images/kabin.png" />
          </div>
          <h2 className="text-2xl text-center text-gray-200 mb-8">Sign In</h2>
          <div className="px-12 pb-10 justify-center flex flex-col items-center">
            <div className="w-full mb-2">
              <div className="flex items-center">
                <input type="text" placeholder="Email Address" className="
			  w-full
			  border
			  rounded
			  px-3
			  py-2
			  text-gray-700
			  focus:outline-none
			" 
            id = "username"
            ref = {userRef}
            onChange = {(e)=>setUser(e.target.value)}
            value = {user}
            required
            />
              </div>
            </div>
            <div className="w-full mb-2">
              <div className="flex items-center">
                <input type="password" placeholder="Password" className="
			  w-full
			  border
			  rounded
			  px-3
			  py-2
			  text-gray-700
			  focus:outline-none
			" 
            id = "password"
            
            onChange = {(e)=>setPwd(e.target.value)}
            value={pwd}
            required
            />
              </div>
            </div>
            <button type="submit" className="py-2 mt-8 rounded-sm xl:w-1/6 w-auto md:w-2/6 bg-black  text-gray-100 focus:outline-none">
              Sign In
            </button>
          </div>
        </form>
      </div>
    
      </section>
   
  ) 
} 
export default Signon; 