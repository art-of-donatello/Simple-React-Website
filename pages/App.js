import React from 'react';
import {Banner,Cart,Footer,Header,Product,Content,Sponsor,Postgonder,Cablecar,AuthCheck} from '../component';
import { getSession } from 'next-auth/react'

/*const getServersideProps = async (contex) => {
 const session = await getSession();

 AuthCheck(session);
console.log(session);
 if(session.status === 'unauthenticated'){
   return {
     redirect: {
       destination: '/login',
       permanent: false
     }
   }
 }

}
*/




export const App = ({data}) => {
  return (
    <div className="App"> 
      
    <main>
    
    <Header />   

    <Banner />   
    <Content />
    <Sponsor />
    
    <Footer />
   
     </main>
    </div>
  ) 
} 


export default App; 