import  { Configuration, OpenAIApi } from "openai";
import React, {useEffect,useState} from "react";

import Axios from 'axios';
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default function Openai() {
    const [airesponse,setAiresponse] = useState("");
    const [soru,setSoru] = useState("");



    const openaitest=async (soru)=>{
     
       await Axios.post("/api/openai",{
            question:soru
        }).then((response)=>{
           
           setAiresponse(JSON.stringify(response.data));
        
           console.log(JSON.stringify(response.data));
           
        })
    } 

    const changeRes=(e)=>{
        console.log("buraya gelindi");

        setSoru(e.target.value)

        console.log(airesponse);
    }

  return (  

    <>
        <div>
        <label htmlFor="soru">Soru</label>
            <input  className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md" type="text" onChange={(e)=>changeRes(e)} value={soru} placeholder="soru" />
        </div>
        <div>
            <button className="" onClick={()=>openaitest(soru)}>Sor</button>
        </div>
        <div>
            {airesponse}
        </div>
    </>
  )
}
