
import Nodemailer from 'nodemailer';
import axios from 'axios';
import mailSettings from  '../../configmail';
import {google } from 'googleapis';
const Oauth2 = google.auth.OAuth2;

const oauth2Client = new Oauth2(mailSettings.client_id,mailSettings.client_secret);
oauth2Client.setCredentials({'refresh_token':mailSettings.refresh_token});


  const transporter = Nodemailer.createTransport({ 
    service: 'gmail',
    auth: {
        type: 'OAuth2',
        user: 'omarx816@gmail.com',
        clientId: mailSettings.client_id,
        clientSecret: mailSettings.client_secret,
        refreshToken: mailSettings.refresh_token,
        accessToken: oauth2Client.getAccessToken()

    },
   
    
  });
  async function getToken(){
    const header = {headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Bearer Mzg4ODI5Njk1NDI4NDZhMmJkNTBkZDZhYWYyZGRlZDY6ZmY3ZDgyZDJhOTY2NDFiOWIwMjAzNmZmMGZkNDc4ZWI=',
        'grant_type': 'authorization_code',
        'clientId': '38882969542846a2bd50dd6aaf2dded6',
        'clientSecret': 'ff7d82d2a96641b9b02036ff0fd478eb',
    }
    }
    const response = axios.post('https://oauth.yandex.com/token?grant_type=authorization_code&code=SplxlOBeZQQYbYS6WxSbIA&clientId=38882969542846a2bd50dd6aaf2dded6&clientSecret=ff7d82d2a96641b9b02036ff0fd478eb', {
        

  }, header);

  console.log(response.data);
  }

export default function handler(req, res) {
    const accessToken = oauth2Client.getAccessToken();

    //getToken();
    console.log(req.body);
    const mailData = {
        from: "omarx816@gmail.com",
        to: req.body.email,

        subject: `Message From `+req.body.name,
        text: `Message From `+req.body.email+` Message: `+req.body.message,

       }
       transporter.sendMail(mailData, function (err, info) {
        if(err)
          console.log(err)
        else
          console.log(info)
      })
    


    res.status(200).json({ name: req.body.name,email:req.body.email });
}