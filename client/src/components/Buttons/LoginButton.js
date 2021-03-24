import React from 'react';
import { Button } from "react-bootstrap"
import Login from "../Login/Login"

export default function LoginButton() {

    const [modalLogin, setModalLogin] = React.useState(false);

    return (
        <span>
            {/* Log In button function */}
            < Button variant="outline-info" className="ml-2" onClick={() => setModalLogin(true)}>
                Log In
            </Button >
            <Login
                show={modalLogin}
                onHide={() => setModalLogin(false)} />
        </span>
    )
}
