import React from 'react';
import { Navbar, Button} from "react-bootstrap"

export default function NavButton () {
    return (
        <Navbar bg="dark" variant="dark">
            <Button variant="outline-info" className="ml-2" >Log In/Out</Button>

            <Button variant="outline-info" className="ml-2">Request Form</Button>

            <Button variant="outline-info" className="ml-2">View Time Clock History</Button>
        </Navbar>
    )
}