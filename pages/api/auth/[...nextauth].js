import NextAuth from "next-auth";
import  CredentialsProvider  from "next-auth/providers/credentials";

import {app,db,auth} from "../../../component/system/firebase";
import { getAuth,signOut, sendSignInLinkToEmail,signInWithEmailAndPassword,createUserWithEmailAndPassword,updateCurrentUser,updateProfile,updatePassword,updateEmail,updatePhoneNumber } from "firebase/auth";

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
          
          
            

            
         /*   const res = await fetch("/your/endpoint", {
              method: 'POST',
              body: JSON.stringify(credentials),
              headers: { "Content-Type": "application/json" }
            })
            const user = await res.json()*/
            
            // If no error and we have user data, return it
            var user1 ="";
            // Return null if user data could not be retrieved
            
            if(credentials.loginType==="login"){
                user1 = await login(credentials);
               
               user1= user1?{ id: 1, name: "", email: user1, token: 'asdasdadsad',adasd:'asdasd',user:"omer" }:null;
            }else{
                user1 = await save(credentials);
               user1= user1?{ id: 1, name: "", email: user1, token: 'asdasdadsad',adasd:'asdasd',user:"omer" }:null;
            }
            const user=user1;
          return user;
           
          }
        })
      ],
      secret: process.env.SECRET,
      pages: {
        signIn: '/SignIn',
      },
      callbacks: {
        async jwt({ token, user, account, profile, isNewUser }) {
          if (user) {
           
            // token = user;
            token.user=user
          }
          return Promise.resolve(token);
        },
        async session({ session, token, user }) {
          // Send properties to the client, like an access_token from a provider.
          console.log('### SESSION CALLBACK ###')
          console.log('session: ', session)
          console.log('token: ', token)
          console.log('user: ', user)

         
          session.accessToken = "asdasdas";
          session.user = token.user
          session.token = token
          session.user.fikir = "";
        
         
        // you might return this in new version
        return Promise.resolve(session)
        }
      }
      
      
})

async function login(credentials){
    var email="";
   await signInWithEmailAndPassword(fireapp,credentials.username,credentials.password).then((userCredential) => {
        // Signed in 
     
    
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
       
    
        return null});
}