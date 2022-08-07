import NextAuth from "next-auth";
import  CredentialsProvider  from "next-auth/providers/credentials";

import {app,db,auth} from "../../../component/system/firebase";
import { getAuth,signOut, sendSignInLinkToEmail,signInWithEmailAndPassword,createUserWithEmailAndPassword } from "firebase/auth";

const fireapp = getAuth(app);

export default NextAuth({


    providers: [
        CredentialsProvider({
          // The name to display on the sign in form (e.g. 'Sign in with...')
          name: 'Credentials',
          // The credentials is used to generate a suitable form on the sign in page.
          // You can specify whatever fields you are expecting to be submitted.
          // e.g. domain, username, password, 2FA token, etc.
          // You can pass any HTML attribute to the <input> tag through the object.
          session: {
            strategy: 'database'
          },
        
          credentials: {
            username: { label: "username", type: "text", placeholder: "username" },
            password: {  label: "password", type: "password" },
            loginType: {  label: "loginType", type: "hidden" },
          },
        
          async authorize(credentials, req) {
            // You need to provide your own logic here that takes the credentials
            // submitted and returns either a object representing a user or value
            // that is false/null if the credentials are invalid.
            // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
            // You can also use the `req` object to obtain additional parameters
            // (i.e., the request IP address)
            // e.g. return { id: 1, name: 'J Smith', email: '
            var userr="";
          
            

            
         /*   const res = await fetch("/your/endpoint", {
              method: 'POST',
              body: JSON.stringify(credentials),
              headers: { "Content-Type": "application/json" }
            })
            const user = await res.json()*/
            
            // If no error and we have user data, return it
            var user ="";
            // Return null if user data could not be retrieved
            
            if(credentials.loginType==="login"){
                user = await login(credentials);
                console.log(user+"asdasd");
               user= user?{ id: 1, name: userr, email: user, token: 'asdasdadsad',adasd:'asdasd',user:"omer" }:null;
            }else{
                user = await save(credentials);
               user= user?{ id: 1, name: userr, email: user, token: 'asdasdadsad',adasd:'asdasd',user:"omer" }:null;
            }
            
          return user;
           
          }
        })
      ],
      secret: process.env.SECRET,
      pages: {
        signIn: '/SignIn',
      },
      callbacks: {
        async session({ session, token, user }) {
          // Send properties to the client, like an access_token from a provider.
          console.log('### SESSION CALLBACK ###')
      console.log('session: ', session)
      console.log('user: ', token)
      console.log('user: ', user)

     
          session.accessToken = "asdasdas";
          session.user = session.user
          session.user.fikir = "";
          return session
        }
      }
      
      
})

async function login(credentials){
    var email="";
   await signInWithEmailAndPassword(fireapp,credentials.username,credentials.password).then((userCredential) => {
        // Signed in 
       console.log(userCredential.user.email+" ek fonstiyo")
    
       email = userCredential.user.email;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        email = null;
      });
      return email;
}
async function save(credentials) {
    await createUserWithEmailAndPassword(fireapp,credentials.username,credentials.password).then((userCredential) => {
        console.log(userCredential.user.email);
       
    
        return userCredential.user.email
      }).catch((error) => {
        console.log(error);
    
        return null});
}