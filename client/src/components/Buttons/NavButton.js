import React from 'react';
import { useAuthTokenStore } from "../../utils/auth";
import { Navbar } from "react-bootstrap";

import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import SignupButton from './SignupButton';
import RequestForm from '../Request-Form/RequestForm';
import TimeHistory from '../Time-History/TimeHistory';

export default function NavButton () {

    const isAuthenticated = useAuthTokenStore();

    return (

        <Navbar className="d-flex justify-content-between" bg="dark" variant="dark">

            {/* Log in and Signup button to open the form */}
            <div className="RegisteringButtons">

                <LoginButton/>
            
                <SignupButton />

            </div>

            {/* Buttons to open up request Form and Vew time Clock History*/}
            <div className="">
                <RequestForm />
                <TimeHistory />
            </div>

        {!isAuthenticated && <SignupButton />}
        {!isAuthenticated && <LoginButton />}
            {isAuthenticated && <LogoutButton />}

        </Navbar>
    )
}