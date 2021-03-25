import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavButton from '../src/components/Navbar/NavButton';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Employee from './components/Employee/Employee';
import Employer from './components/Employer/Employer';
import Home from './components/Home/Home';
import EmployeeRoute from './components/EmployeeRoute';
import EmployerRoute from './components/EmployerRoute';
import { useAuthTokenStore } from './utils/auth';

function App() {

  const isAuthDone = useAuthTokenStore();

  return (
    <Router>

      <Jumbotron className="m-0 p-0">
        <NavButton />
        {isAuthDone &&
        <Switch>
          {/* Routes open to all users */}
          <Route exact path="/" component={Home} />

          {/* Routes for (authenticated) users */}
          <EmployeeRoute exact path="/Employee" redirectTo="/" component={Employee} />
          <EmployerRoute exact path="/Employer" redirectTo="/" component={Employer} />
        </Switch>}

      </Jumbotron>
    </Router>

  )
}

export default App;
