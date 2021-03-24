import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuthTokenStore } from './utils/auth';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Import pages
import Home from './components/pages/Home';
import EmployeePage from './components/pages/Employee-page';
import EmployerPage from './components/pages/Employer-page';
import RequestFormPage from './components/pages/Request-Form-page';
import TimeHistoryPage from './components/pages/Time-History-page';

import PrivateRoute from './components/PrivateRoute';

function App() {

  const isAuthDone = useAuthTokenStore();

  return (
    <Router>
      <Jumbotron className="m-0 p-0">

        {/* Switch case testing */}
        {isAuthDone &&
          /* Settup router to route pages */
          <Switch >
            <Route exact path="/" component={Home} />
            <Route exact path="/employee" component={EmployeePage} />
            {/* <PrivateRoute exact path="/Employee" redirectTo="/" component={EmployeePage} /> */}
            <Route exact path="/employer" component={EmployerPage} />

            {/* button routes */}
            <Route exact path="/request-form" component={RequestFormPage} />
            <Route exact path="/time-history" component={TimeHistoryPage} />
          </Switch>}
      </Jumbotron>
    </Router >

  )
}

export default App;
