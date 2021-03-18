import React from 'react';
import { Button } from "react-bootstrap"

export default function InAndOut () {
    return (
        <Button className="btn-warning text-success" variant="outline-info"
            style= {{width: "120px"}}
        >
            Clock In/Out
        </Button>
    )
}