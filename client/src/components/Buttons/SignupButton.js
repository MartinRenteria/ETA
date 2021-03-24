import React from 'react';
import { Button } from "react-bootstrap"
import Signup from "../Signup/Signup"

export default function LoginButton() {

    const [modalSignup, setModalSignup] = React.useState(false);

    return (
        <span>
            {/* Sign up Button */}
            <Button variant="outline-info" className="ml-2" onClick={() => setModalSignup(true)}>
                Sign Up
                </Button>
            <Signup
                show={modalSignup}
                onHide={() => setModalSignup(false)} />
        </span>
    )
}