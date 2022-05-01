import React, {useContext, useState} from "react";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {GeneralContext} from "../../context/GeneralContext";
import {useNavigate} from "react-router-dom";
import './sign-up-page.css';

export const SignUpPage = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");
    const [badCredentials, setBadCredentials] = useState(false);

    const {setToken} = useContext(GeneralContext);
    const navigate = useNavigate();

    const handleSignIn = () => {
        navigate("/sign-in");
    }

    const handleSubmit = async (e) => {

        e.preventDefault();

        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                firstName: firstName,
                lastName: lastName,
                userName: userName,
                password: password,
                roleName: "ROLE_USER"
            })
        };

        const response = await fetch("http://localhost:8080/api/v1/register", requestOptions);

        if (response.ok) {
            const data = await response.json();
            setToken(data?.token);
            navigate("/...")

        } else {
            setBadCredentials(true);
        }
    }

    return (
        <Container fluid className="d-flex justify-content-center" style={{height: '100vh'}}>
            <div className="App d-flex flex-column align-items-center align-self-center">
                <h3>Create your Task Manager account</h3>
                <div style={{backgroundColor: 'lightgray', padding: "40px"}}>
                    <Form onSubmit={handleSubmit} style={{width: '500px'}}>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGroupFirstname">
                                <Form.Label className="label">First Name</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="First Name"
                                    value={firstName}
                                    onChange={e => setFirstName(e.target.value)}/>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGroupLastname">
                                <Form.Label className="label">Last Name</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Last Name"
                                    value={lastName}
                                    onChange={e => setLastName(e.target.value)}/>
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" controlId="formGroupUsername">
                            <Form.Label className="label">Username</Form.Label>
                            <Form.Control required type="text" placeholder="Username" value={userName}
                                          onChange={e => setUserName(e.target.value)}/>
                        </Form.Group>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGroupPassword">
                                <Form.Label className="label">Password</Form.Label>
                                <Form.Control required type="password" placeholder="Password" value={password}
                                              onChange={e => setPassword(e.target.value)}/>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGroupConfirm">
                                <Form.Label className="label">Confirm</Form.Label>
                                <Form.Control required type="password" placeholder="Confirm password"
                                              value={confirmPass} onChange={e => setConfirmPass(e.target.value)}/>
                            </Form.Group>
                        </Row>

                        <Form.Group>
                            <Form.Text hidden={!badCredentials}>
                                Wrong username or password.
                            </Form.Text>
                        </Form.Group>
                        <br/>
                        <Button variant="success" type="submit" className="btn btn-lg" style={{width: '100%'}}>
                            Create an account
                        </Button>
                        <p className="forgot-password text-md-start" style={{paddingTop: '20px'}}>
                            Already have an account? <a href="#" onClick={handleSignIn}>Sign in</a>
                        </p>
                    </Form>
                </div>
            </div>
        </Container>
    )
}
