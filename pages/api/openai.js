
import  { Configuration, OpenAIApi } from "openai";
import {useState} from "react";

const configuration = new Configuration({
  apiKey: process.env.OPEN_AI_API_KEY,
});
const openai = new OpenAIApi(configuration);


export default function handler(req, res) {

    const qt = req.body.question;
    console.log(qt);
    const openaitest = async(qt,res)=>
    { const veri = await openai.createCompletion({
        model: "text-davinci-002",
        prompt: qt,
        temperature: 0.5,
        max_tokens: 64,
      })
      console.log(veri.data.choices[0].text);
    
      res.status(200).json(veri.data?.choices[0]?.text );
}
    const res1 = openaitest(qt,res);

   
}
