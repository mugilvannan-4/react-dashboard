import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard.js';
import Login from '../Login/Login';
import useToken from './useToken';
import { useHistory } from 'react-router-dom';
import { render } from '@testing-library/react';

function App() {
    const history = useHistory();
    const { token, setToken } = useToken();

    if(!token){
        return(
           <div className="login">
            <BrowserRouter>
                <Switch>
                    <Route path="/login">
                       <Login setToken={setToken} />
                    </Route>
                </Switch>   
            </BrowserRouter>
           </div>
        )
    }

    return(
        <div className="dashboard">
             <BrowserRouter>
                <Switch>
                    <Route path="/dashboard">
                        <Dashboard />
                    </Route>
                </Switch>   
            </BrowserRouter>
             </div>
    )
    }    



export default App;