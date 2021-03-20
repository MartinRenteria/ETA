import React from 'react';
import { useLogout } from "../../utils/auth";
import { Button } from "react-bootstrap";


export default function LogoutButton(){

    const logout = useLogout();

    return(
        <Button href="/" onClick={logout} variant="outline-info btn-dark" className="ml-2" type="submit">
            Log Out
        </Button>
    )
}