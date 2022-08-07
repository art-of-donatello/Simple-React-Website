// Next.js API route support: https://nextjs.org/docs/api-routes/introduction,

import {app,db,auth} from "../../component/system/firebase";
import { getAuth,signOut, sendSignInLinkToEmail,signInWithEmailAndPassword,createUserWithEmailAndPassword} from "firebase/auth";


export default function handler(req, res) {
  const fireapp = getAuth(app);
  const result = createUserWithEmailAndPassword(fireapp,req.body.user,req.body.pwd).then((userCredential) => {
    console.log(userCredential.user.email);
   

    res.status(200).json(userCredential)
  }).catch((error) => {
    console.log(error);

    res.status(200).json(error)});
  

}
