import React, { useState } from 'react';
import './Login.css';
import { useHistory } from 'react-router-dom';

async function RegisterUser(userdetails) {
    console.log(userdetails);
    return fetch('https://dash-auth.herokuapp.com/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userdetails)
      
      })
        .then(async (data) => data.json())
}

function Register(props) {
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [cnfpwd, setCnfpwd] = useState();
    const [regmessage, setRegmessage] = useState('');
    const [apimessage, setApimessage] = useState('');

 
    
    async function handleSubmit(e){
        e.preventDefault();
        if(password !== cnfpwd ){
            setRegmessage("Passwords are not matching")
            setApimessage('');
        }
        else {
            const Resp = await RegisterUser({
                firstName,
                lastName,
                username,
                password    
            }); 
           if(Resp.message === "User added") {
            setRegmessage('')
               setApimessage("User Added Successfully. Click 'Back' button for login Page");
           } 
           else
           {
            setRegmessage('')
               setRegmessage("Failed to add user. Please try again after sometime");
           }
        }
        }

    function handleback(e) {
        window.location.href = '/react-dashboard/#/login'
        window.location.reload(true)
    }
    return(
                <div className="signup-wrapper">
                    <h1>User details</h1>   
                           <form onSubmit={(e) => handleSubmit(e)}>
                             <label>
                               <p>Firstname</p>
                                  <input type="text" required onChange={(e) => setFirstName(e.target.value)}/>
                              </label>
                              <label>
                               <p>Lastname</p>
                                  <input type="text" required onChange={(e) => setLastName(e.target.value)}/>
                              </label>
                              <label>
                               <p>Username</p>
                                  <input type="text" required onChange={(e) => setUsername(e.target.value)}/>
                              </label>
                              <label>
                                <p>Password</p>
                                  <input type="password" required onChange={(e) => setPassword(e.target.value)}/>
                              </label>
                              <a className="Externallink" href="https://mugilvannan-4.github.io/React-passwd/" target="_blank" rel="noopener noreferrer" >Need Help?</a>
                              <label>
                                <p>Confirm Password</p>
                                  <input type="password" required onChange={(e) => setCnfpwd(e.target.value)}/>
                              </label>
                              <p className="err">{regmessage}</p>
                              <p className="Suc">{apimessage}</p>
                              <div>
                                  <button className="submitbutton" type="submit">Register</button>
                              </div>
                              <div>
                                  <button className="backbutton" type="button" onClick={() => handleback()}>Back</button>
                              </div>
                           </form>
                </div>       
    )

    } 





export default Register;