import { createSlice, } from "@reduxjs/toolkit";


function saveToLocalStorage(store) {
    try {
        const serializedStore = JSON.stringify(store);
        localStorage.setItem('store', serializedStore);
    } catch(e) {
        console.log(e);
    }
}




const loginSlice = createSlice({
    name: "login",
    initialState: {
        loginInfo:{
        username:"",
        password:"",
        isLogin:false
    }
    },
    reducers: {
        login: (state, action) => {

            console.log("login action: " + action.payload.username + " " + action.payload.password);
            state.loginInfo.username = action.payload.username;                                                                                     
            state.loginInfo.password = action.payload.password; 
           
            saveToLocalStorage(state);
        },
        logout: (state, action) => {
          
        }
    
    }
});

export const {login, logout} = loginSlice.actions;


export const loginState = state => state.login;
export const isLogin = state => state.login.isLogin;

export default loginSlice.reducer;
