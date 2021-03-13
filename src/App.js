import React from 'react';

import { Jumbotron } from 'react-bootstrap';
import Login from "./components/Login/Login"
import Signup from './components/Signup/Signup';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Jumbotron>
      <h1>Login</h1>
      <Login />
      <br></br>
      <h1>Signup</h1>
      <Signup/>
    </Jumbotron>

  )
}

export default App;
