import React from 'react';
import { Button } from "react-bootstrap";
import { useLogout } from "../../utils/auth";

export default function LogoutButton(){

    const logout = useLogout();

    return(
        <Button variant="outline-info btn-dark" className="ml-2" type="submit" onClick={logout}>
            Log Out
        </Button>
    )
}