import React from "react";
import {Button} from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

export const HomePage = () => {

    const navigate = useNavigate();

    const handleSignIn = () => {
        navigate("/sign-in");
    }

    const handleSignUp = () => {
        navigate("/sign-up");
    }

    return (
        <div>
            <Button variant="primary" onClick={handleSignIn}>Sign In</Button>
            <Button variant="light" onClick={handleSignUp}>Sign Up</Button>
        </div>
    );
}