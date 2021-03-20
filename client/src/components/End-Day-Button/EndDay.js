import React from 'react';
import { Button } from "react-bootstrap"

export default function EndDay() {
    return (
        <Button className="btn-danger text-light" variant="outline-info"
            style={{ width: "120px" }}
        >
            End my day
        </Button>
    )
}