import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavButton from '../src/components/Navbar/NavButton';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Employee from './components/Employee/Employee';
import User from './components/User'
import HomePage from './components/Home/Home';
import PrivateRoute from './components/PrivateRoute'

function App() {

  return (
    <Router>

      <Jumbotron className="m-0 p-0">
        <NavButton />
        <Switch>
          {/* Routes open to all users */}
          <Route exact path="/" component={HomePage} />

          {/* Routes for (authenticated) users */}
          <PrivateRoute exact path="/User" redirectTo="/" component={User} />
        </Switch>

        {/* Employee home page */}
        {/* <Card> */}
          <Employee />
        {/* </Card> */}

      </Jumbotron>
    </Router>

  )
}

export default App;
