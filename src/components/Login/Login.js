import React, { useState } from 'react';
import './Login.css';
import Register from './Register';
import { useHistory } from 'react-router-dom';


async function loginUser(credentials) {

    return fetch('https://dash-auth.herokuapp.com/user/authenticate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
      })
        .then(async (data) => data.json())
}

function Login(props) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const [regfirstname, setRegfirstname] = useState();
    const [reglastname, setRegLastname] = useState();
    const [reguser, setReguser] = useState();
    const [regpsswd, setRegpsswd] = useState();
    const [regcnfpwd, setRegcnfpwd] = useState();
    const [message, setMessage] = useState('');
    const [regmessage, setRegmessage] = useState('');
    const [signupstate, setSignupstate] = useState(false);
    async function handleSubmit(e){
        e.preventDefault();
        const token = await loginUser({
            username,
            password
        }); 
        if(token.token){
        props.setToken(token);
        window.location.href = '/react-dashboard/#/dashboard'
        window.location.reload(true)
        } else {
         setMessage(token.message);   
        }

    }

    function handleregister(e) {
        console.log(e);
        e.preventDefault();
        if(regpsswd !== regcnfpwd ){
            setMessage("Passwords are not matching :(")
        }
        else {
            console.log("calling API");
        }
    }

    function handlesignup() {
        var sgnp = signupstate;
        sgnp = !sgnp;
        setSignupstate(sgnp);
    }
    return(
        <div className="login-wrapper">
            <h1>Bon voyage</h1>
            <form className="login-entry" onSubmit={(e) => handleSubmit(e)}>
                <label>
                    <p>Username</p>
                    <input type="text"  onChange={(e) => setUserName(e.target.value)}/>
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" onChange={(e) => setPassword(e.target.value)}/>
                </label>
                <h1>{message}</h1>
                <div>
                    <button className="buttons" type="Submit">Sign In</button>
                </div>
                <div>
                    <button className="buttons" type="button" onClick={() => handlesignup()}>Sign Up</button>
                </div>
            </form>
            {signupstate === true &&
                <Register />
                }
        </div>

    
    )

  

}




export default Login;