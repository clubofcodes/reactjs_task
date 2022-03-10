import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuthentication } from '../Utils/useAuthentication'

export const Dashboard = () => {
    //For redirecting to particular route/path using react-router-dom hook.
    const navigate = useNavigate();
    // Custom hook to get user email from state using global context.
    const userAuth = useAuthentication();
    // Logout button click event to logout and redirect to home component.
    const userLogout = () => {
        userAuth.logout();
        navigate('/');
    }

    return (
        <div className="container-fluid d-flex align-items-center justify-content-center h-100">
            <div className="row">
                <div className="col">
                    <h2 className="text-center mb-4">Welcome to aboard, {userAuth.userData}</h2>
                    <button className="btn btn-danger btn shadow-none" onClick={userLogout}>Logout</button>
                </div>
            </div>
        </div>
    )
}

