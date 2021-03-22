import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavButton from '../src/components/Navbar/NavButton';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Employee from './components/Employee/Employee';
import Home from './components/Home/Home';
import PrivateRoute from './components/PrivateRoute';
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
          <PrivateRoute exact path="/Employee" redirectTo="/" component={Employee} />
        </Switch>}

      </Jumbotron>
    </Router>

  )
}

export default App;
