import { configureStore } from "@reduxjs/toolkit";
import loginSlicer,{loginState} from "../reducers/login/loginSlicer";


function loadFromLocalStorage() {
    try {
        
        const serializedStore =""// localStorage.getItem('store');
          
        if(serializedStore === null) return undefined;
        return JSON.parse(serializedStore);
    } catch(e) {
        console.log(e);
        return undefined;
    }
}
//store.subscribe(() => saveToLocalStorage(store.getState()));

export default configureStore({
    name: "store",
    reducer: {
            login:loginSlicer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production',
    preLoadedState: "",
    
});