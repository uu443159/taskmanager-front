import React from "react";
import {Container, Navbar, Button} from "react-bootstrap";
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
        <>
            <Navbar expand="lg">
                <Container fluid>
                    <Navbar.Brand href="/" style={{fontFamily: "Roboto", fontStyle: "normal", fontWeight: 900, fontSize: 30}}>
                        <img
                            alt="logo"
                            src="/images/Utilities-tasks-icon.png"
                            width="46"
                            height="38"
                            className="d-inline-block"
                        />{' '}
                        taskManager
                    </Navbar.Brand>

                    <div>
                        <Button
                            className="shadow p-3 mb-5 bg-white rounded"
                            variant="light"
                            style={{
                                alignItems: "center",
                                width: 180,
                                height: 60,
                                textAlign: "center", fontFamily: "Roboto", fontStyle: "normal", fontWeight: 500, fontSize: 30
                            }}
                            onClick={handleSignIn}>
                            Sign In</Button>
                        <Button
                            variant="default"
                            style={{
                                alignItems: "center",
                                width: 180,
                                height: 60,
                                background: "#25A1E7",
                                textAlign: "center", fontFamily: "Roboto", fontStyle: "normal", fontWeight: 500, fontSize: 30, color: "#FFFFFF"
                            }}
                            onClick={handleSignUp}>Sign Up</Button>
                    </div>
                </Container>
            </Navbar>


        </>
    );
}