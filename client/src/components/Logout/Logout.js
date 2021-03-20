import React from 'react';
import { Button } from "react-bootstrap";
import { useLogout } from "../../utils/auth";

export default function LogoutButton(){

    const logout = useLogout();

    console.log(logout)

    return(
        <Button onClick={logout} variant="outline-info btn-dark" className="ml-2" type="submit">
            Log Out
        </Button>
    )
}