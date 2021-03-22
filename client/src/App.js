import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavButton from '../src/components/Navbar/NavButton';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Employee from './components/Employee/Employee'
// Import pages
import Home from './components/pages/Home';
import EmployeePage from './components/pages/Employee-page';
import EmployerPage from './components/pages/Employer-page';
import RequestFormPage from './components/pages/Request-Form-page';
import TimeHistoryPage from './components/pages/Time-History-page';

// import PrivateRoute from './components/PrivateRoute';
import { useAuthTokenStore } from './utils/auth';

function App() {

  const isAuthDone = useAuthTokenStore();

  return (
    <Router>

      <Jumbotron className="m-0 p-0">
        {/* <NavButton /> */}

        {/* Switch case testing */}
        {/* {isAuthDone && */}
        {/* <Switch> */}
          {/* Routes open to all users */}
          {/* <Route exact path="/" component={Home} /> */}

          {/* Routes for (authenticated) users */}
          {/* <PrivateRoute exact path="/Employee" redirectTo="/" component={Employee} /> */}
        {/* </Switch>} */}
        
        {/* Settup router to route pages */}
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/employee" component={EmployeePage} />
            <Route exact path="/employer" component={EmployerPage} />

            {/* button routes */}
            <Route exact path="/request-form" component={RequestFormPage} />
            <Route exact path="/time-history" component={TimeHistoryPage} />
          </Switch>
        </Router>

        {/* <Employee/> */}

      </Jumbotron>
    </Router>

  )
}

export default App;
