import React,{useState,useEffect} from "react";
import {useSelector,useDispatch} from "react-redux";
import {login,logout,loginState} from "./loginSlicer";

export const LoginCheck=()=>{
    const loginInfo = useSelector(loginState);
    console.log(JSON.stringify(loginInfo));
    return loginInfo;
}
const LoginPage = () => {

    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");

    const dispatch = useDispatch();
    const loginInfo = useSelector(loginState);

    function handleSubmit(e){

        e.preventDefault();
        dispatch(login({username:username,password:password}));
        console.log(username+" "+password);
        //const {username,password} = e.target.elements;

       // dispatch(login({username:username.value,password:password.value}));
    }
 

    return(
<div className=" max-w-7xl bg-slate-400  self-center items-center ">
    <h1>Login</h1>

        {loginInfo.username}
        
    <form className=" self-center items-center" onSubmit={handleSubmit}>
        <input type="text" onChange={(e)=>setUsername(e.target.value)} value={username} placeholder="username" />
        <input type="password" onChange={(e)=>setPassword(e.target.value)} value={password} placeholder="password" />
        <button type="submit">Login</button>

    </form>
</div>



    )
}

export default LoginPage;