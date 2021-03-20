import React from 'react';
import { useAuthenticatedUser } from "../utils/auth";

function Profile() {

    const user = useAuthenticatedUser();

    return user && (
        <div>
            <h2>My Profile</h2>
            <p>
                <strong>Email:</strong>
                {user.email}
            </p>
        </div>
    );
}

export default Profile;