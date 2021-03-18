import React from 'react';
import { Button } from "react-bootstrap"
export default function Logout(){
    return(
        <Button variant="outline-info btn-dark" className="ml-2" type="submit">
            Log Out
        </Button>
    )
}