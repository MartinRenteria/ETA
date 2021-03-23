import React from 'react';
import { Button } from "react-bootstrap"
import { Link } from "react-router-dom";

export default function TimeHistory() {
    return (
        <Link to="/time-history">
            <Button variant="outline-info" className="ml-2">
                View Time Clock History
            </Button>
        </Link>
    )
}