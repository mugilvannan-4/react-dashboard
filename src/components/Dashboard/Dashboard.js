import React from 'react'
import './Dashboard.css'
import { useHistory } from "react-router-dom";



function Dashboard() {
    const history = useHistory();
    function logout(){
        localStorage.clear();
        window.location.href = '/react-dashboard/login';


    }

    return(
    
        <div className="Dashboard-wrapper">
        <h2>Dashboard under construction. Comeback later to get amazed</h2>
          <div>
             <button className="logout" onClick={()=>logout()}>logout</button>
          </div>
        </div>
      
    )
}

export default Dashboard;