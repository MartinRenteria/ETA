import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavButton from '../src/components/Navbar/NavButton';
import { useAuthTokenStore } from "./utils/auth";
import RegistrationForm from '../src/components/RegistrationForm';
import { BrowserRouter } from "react-router-dom";
import Employee from './components/Employee/Employee';
;

function App() {

  useAuthTokenStore();

  return (
    <BrowserRouter>

      <Jumbotron className="m-0 p-0">
        <NavButton />

        <RegistrationForm />

        {/* Employee home page */}
        {/* <Card> */}
          <Employee />
        {/* </Card> */}

      </Jumbotron>
    </BrowserRouter>

  )
}

export default App;
