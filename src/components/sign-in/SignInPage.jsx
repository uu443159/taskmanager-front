import React, {useContext, useState} from "react";
import {Button, Form} from "react-bootstrap";
import {GeneralContext} from "../../context/GeneralContext";
import {useNavigate} from "react-router-dom";

export const SignInPage = () => {

    const [ userName, setUserName ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ badCredentials, setBadCredentials ] = useState(false);

    const { setToken } = useContext(GeneralContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {

        e.preventDefault();

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                login: userName,
                password: password })
        };

        const response = await fetch("http://localhost:8080/api/v1/auth", requestOptions);

        if (response.ok) {
            const data = await response.json();
            setToken(data?.token);
            navigate("/...")

        } else {
            setBadCredentials(true);
        }
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={userName} onChange={e => setUserName(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
                </Form.Group>
                <Form.Group>
                    <Form.Text hidden={!badCredentials}>
                        Wrong username or password.
                    </Form.Text>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}