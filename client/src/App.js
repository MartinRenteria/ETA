import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavButton from '../src/components/Navbar/NavButton';
import { useAuthTokenStore } from "./utils/auth";
import Signup from '../src/components/Signup/Signup';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Employee from './components/Employee/Employee';
import LoginForm from './components/Login/Login'
import HomePage from './components/Home/Home';
import PrivateRoute from './components/PrivateRoute'



function App() {

  const isAuthenticated = useAuthTokenStore();

  return (
    <Router>

      <Jumbotron className="m-0 p-0">
        <NavButton />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <PrivateRoute exact path="/Employee" component={Employee} />
        </Switch>
        {!isAuthenticated && <Signup />}
        {!isAuthenticated &&<LoginForm />}

      </Jumbotron>
    </Router>

  )
}

export default App;
