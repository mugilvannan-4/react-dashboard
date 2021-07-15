import { useState } from 'react';

function useToken() {

    const getToken = ()=> {
        const tokenstring = localStorage.getItem('token');
        console.log(tokenstring);
        const userToken = JSON.parse(tokenstring);
        return userToken?.token
        };
    const [token, setToken] = useState(getToken());

     const saveToken = userToken => {
        localStorage.setItem('token', JSON.stringify(userToken));
         setToken(userToken.token);
     }   
     
     return {
         setToken: saveToken,
         token  
     }
}

export default useToken;