import React from 'react';
import { Button } from "react-bootstrap"
import { Link } from "react-router-dom";

export default function RequestForm() {

    // let history = useHistory();

    // const goToRequestForm = e => {
    //     e.preventDefault();
    //     history.push("/request-form")
    // }

    return (
        <Link to="/request-form">
            <Button variant="outline-info" className="ml-2">
                Request Form
            </Button>
        </Link>
    )
}