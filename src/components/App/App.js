import React, { useState } from 'react';
import './App.css';
import { HashRouter, BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { HashRouter as Router } from 'react-router-dom'
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
            {
                <HashRouter >
             <Login setToken={setToken} />
             </HashRouter>
            /* <HashRouter >
                <Switch>
                    <Route path="/login">
                       <Login setToken={setToken} />
                    </Route>
                </Switch>
            </HashRouter> */
            
            }
             
           </div>
        )
    }

    return(
        <div className="dashboard">
             {
                <Dashboard />
             /* <HashRouter>
                <Switch>
                    <Route path="/dashboard">
                        <Dashboard />
                    </Route>
                </Switch>
            </HashRouter> */
            }

         </div>
    )
    }



export default App;