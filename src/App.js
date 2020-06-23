import React, { Suspense, lazy } from 'react';

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