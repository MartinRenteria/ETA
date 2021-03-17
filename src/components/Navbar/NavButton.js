import React from 'react';
import { Navbar, Button} from "react-bootstrap"
import Login from "../Login/Login"

export default function NavButton () {

    const [modalLogin, setModalLogin] = React.useState(false);

    return (
        <Navbar className="d-flex justify-content-between" bg="dark" variant="dark">

            {/* Log in and Signup button to open the form */}
            <div className="float-left">
                {/* Log In button function */}
                <Button variant="outline-info" className="ml-2" onClick={() => setModalLogin(true)}>
                    Log In
                </Button>
                <Login
                    show={modalLogin}
                    onHide={() => setModalLogin(false)} />
                
                {/* Sign up Button */}
                <Button variant="outline-info" className="ml-2">Sign Up</Button>
            </div>

            {/* Buttons to open up request Form and Vew time Clock History*/}
            <div className="">
                <Button variant="outline-info" className="ml-2">Request Form</Button>

                <Button variant="outline-info" className="ml-2">View Time Clock History</Button>
            </div>

        </Navbar>
    )
}