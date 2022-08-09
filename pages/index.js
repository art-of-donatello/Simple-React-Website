import Head from 'next/head'
import Image from 'next/image'
import {App} from './App'
import React from 'react'
import {getSession} from 'next-auth/react'

/*export async function getServerSideProps(context) {
   const session = await getSession(context)
if(!session){
   return {
     //props: { session }
     redirect:{
       destination: '/SignIn',
       permanent: false
     }
   }
 }

 return {
  props: { session }
 }
}*/

export default function Home() {
  return (
    <div >
        <App/>
      
    </div>
  )
}
 