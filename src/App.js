import React from 'react';
import { Jumbotron} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavButton from './components/Navbar/NavButton';

function App() {

  return (
    <Jumbotron className="m-0 p-0">

      <NavButton/>
      
    </Jumbotron>
  )
}

export default App;
