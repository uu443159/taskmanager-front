import React, {useContext} from 'react';
import { Nav, Navbar, Form, FormControl, Container, Button } from 'react-bootstrap';
import {GeneralContext} from "../../context/GeneralContext";
import {useNavigate} from "react-router-dom";

export const Header = () => {

    const { token, setToken } = useContext(GeneralContext);
    const navigate = useNavigate();

    const handleSignIn = () => {
        navigate("/sign-in");
    }

    const handleSignUp = () => {
        navigate("/sign-up");
    }

    const handleSignOut = () => {
        setToken("");
        navigate("/");
    }



    return (

        <Navbar expand="lg">
            <Container fluid>
                <Navbar.Brand href="/">
                    <img
                        alt="logo"
                        src="/images/Utilities-tasks-icon.png"
                        width="46"
                        height="38"
                        className="d-inline-block"
                    />{' '}
                    taskManager
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="navbarScroll">
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{maxHeight: '100px'}}
                        navbarScroll
                    >
                        <Nav.Link href="#add-task">Add task icon</Nav.Link>
                        <Nav.Link href="#show-task">Show tasks icon</Nav.Link>
                    </Nav>

                </Navbar.Collapse>

                <Button
                    // className="shadow p-3 mb-5 bg-white rounded"
                    variant="light"
                    hidden={token}
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
                    hidden={token}
                    style={{
                        alignItems: "center",
                        width: 180,
                        height: 60,
                        background: "#25A1E7",
                        textAlign: "center",
                        fontFamily: "Roboto",
                        fontStyle: "normal",
                        fontWeight: 500,
                        fontSize: 30,
                        color: "#FFFFFF"
                    }}
                    onClick={handleSignUp}>Sign Up</Button>
                <Button
                    variant="default"
                    hidden={!token}
                    style={{
                        alignItems: "center",
                        width: 180,
                        height: 60,
                        background: "#25A1E7",
                        textAlign: "center",
                        fontFamily: "Roboto",
                        fontStyle: "normal",
                        fontWeight: 500,
                        fontSize: 30,
                        color: "#FFFFFF"
                    }}
                    onClick={handleSignOut}>Sign out</Button>
            </Container>
        </Navbar>
    )
}