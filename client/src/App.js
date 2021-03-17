import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import Login from "../src/components/Login/Login"
import Signup from '../src/components/Signup/Signup';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavButton from '../src/components/Navbar/NavButton';
import { useAuthTokenStore } from "./utils/auth";
import RegistrationForm from '../src/components/RegistrationForm';
import { BrowserRouter} from "react-router-dom";;

function App() {

  useAuthTokenStore();

  return (
    <BrowserRouter>
    
    <Jumbotron className="m-0 p-0">
      <NavButton/>

      <h1>Login</h1>
      <Login />

      <br></br>
      <h1>Sign up</h1>
      <Signup/>

     <RegistrationForm />
      
    </Jumbotron>
    </BrowserRouter>

  )
}

export default App;
