import React, { Suspense, lazy, useState, useEffect } from 'react';
import axios from 'axios';
//import {getToken, getUsers} from './tools/isAuth';

// router
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './scss/styles.scss';

const Dashboard = lazy(() => import('./routes/Dashboard'));
const Historic = lazy(() => import('./routes/Historic'));
const Login = lazy(() => import('./routes/Login'));
const Params = lazy(() => import('./routes/Params'));
const Register = lazy(() => import('./routes/Register'));
const Stats = lazy(() => import('./routes/Stats'));
const Tasks = lazy(() => import('./routes/Tasks'));

export default function App() {
  let TOKEN;

  //const [tokenMain, setToken] = useState('');
  
  useEffect(() => {

    //Get Token of current user
    (async () => {
      const result = await axios({
      method: 'post',
      url: 'http://127.0.0.1:8000/api/login_check',
      data: {
        username: 'marthe.gomes@dbmail.com',
        password: 'test'
      }
    })
    
    TOKEN = result.data.token;
    console.log(TOKEN)

    //Put token in local storage
    localStorage.setItem('Token', TOKEN)
    let userToken = localStorage.getItem('Token');
    
    //Get users from db with token in local storage
    const getUsers = await axios({
      url: 'http://127.0.0.1:8000/api/users',
      headers: {
        Authorization: `Bearer ${userToken}`
      }
    }) 
        console.log(getUsers)
    })()
  })


  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/">Dashboard</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/historique">Histo</Link></li>
            <li><Link to="/statistiques">Stats</Link></li>
            <li><Link to="/taches">Taches</Link></li>
            <li><Link to="/parametres">Params</Link></li>
          </ul>
        </nav>

        <Suspense fallback={<div>Chargement...</div>}>
          <Switch>
            <Route exact path="/" component={Dashboard}/> 
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path="/historique" component={Historic}/>
            <Route path="/statistiques" component={Stats}/>
            <Route path="/taches" component={Tasks}/>
            <Route path="/parametres" component={Params}/>
          </Switch>
        </Suspense>
      </div>
    </Router>
  )
}