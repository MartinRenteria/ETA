import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavButton from '../src/components/Navbar/NavButton';
import { useAuthTokenStore } from "./utils/auth";
import Signup from '../src/components/Signup/Signup';
import { BrowserRouter } from "react-router-dom";
import Employee from './components/Employee';
import LoginForm from './components/Login/Login'


function App() {

  const isAuthenticated = useAuthTokenStore();

  return (
    <BrowserRouter>

      <Jumbotron className="m-0 p-0">
        <NavButton />

        {!isAuthenticated && <Signup />}
        {!isAuthenticated &&<LoginForm />}

        {/* Employee home page */}
        {/* <Card> */}
          <Employee />
        {/* </Card> */}

      </Jumbotron>
    </BrowserRouter>

  )
}

export default App;
