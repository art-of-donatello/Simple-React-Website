import React from "react"
import '../styles/globals.css';
import store from '../component/store/store';
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux';
import { SessionProvider } from "next-auth/react"

function MyApp({ Component, pageProps: { session, ...pageProps }, }) {
  return (
    <Provider store={store}>
  <SessionProvider session={session}>
  
      <Component {...pageProps} />
    

    </SessionProvider>
    </Provider>
    ) 
  
}

export default MyApp
