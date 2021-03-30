import React from "react";
import { useLogout } from "../../utils/auth";
import { Button } from "react-bootstrap";

export default function LogoutButton() {
	const logout = useLogout();

	return (
		<Button onClick={logout} variant="light outline-info" className="ml-2" type="submit">
			Log Out
		</Button>
	);
}
