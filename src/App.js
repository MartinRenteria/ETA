import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import Login from "./components/Login/Login"
import Signup from './components/Signup/Signup';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavButton from './components/Navbar/NavButton';

function App() {
  return (
    <Jumbotron className="m-0 p-0">
      <NavButton/>

      <h1>Login</h1>
      <Login />
      <br></br>
      <h1>Sign up</h1>
      <Signup/>
    </Jumbotron>

  )
}

export default App;
