

const AuthCheck = (session,callback) => {

    if(session.status === 'authenticated'){
        console.log(session.status );
        return session;

    }else{
        console.log(session.status );
            
            return {redirect:{
                destination: '/login',
                permanent: false,
            }}
    
    }


}

export default AuthCheck;