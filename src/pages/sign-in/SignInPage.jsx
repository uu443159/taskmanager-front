import React, {useContext, useState} from "react";
import {Button, Container, Form} from "react-bootstrap";
import {GeneralContext} from "../../context/GeneralContext";
import {useNavigate} from "react-router-dom";

export const SignInPage = () => {

    const [form, setForm] = useState({})
    const {userName, password} = form
    const [errors, setErrors] = useState({})
    const [badCredentials, setBadCredentials] = useState(false);

    const {token, setToken, setUserName} = useContext(GeneralContext);
    const navigate = useNavigate();

    const setField = (field, value) => {
        setForm({
            ...form,
            [field]: value
        })
        if (!!errors[field]) setErrors({
            ...errors,
            [field]: null
        })
    }

    const findFormErrors = () => {
        const newErrors = {}

        if (!userName || userName === '') newErrors.userName = 'Enter an user name'
        if (!password || password === '') newErrors.pasword = 'Enter a password'

        return newErrors
    }

    const handleSignUp = () => {
        navigate("/sign-up");
    }

    const handleSubmit = async (e) => {

        e.preventDefault();

        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                login: userName,
                password: password
            })
        };
        const response = await fetch("http://localhost:8080/api/v1/auth", requestOptions);


        if (response.ok) {
            const data = await response.json();
            setUserName(data?.userName);
            setToken(data?.token);
            console.log("the token is ", token);

        } else {
            setBadCredentials(true);
        }

        const newErrors = findFormErrors()
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
        }
    }

    return (
        <Container fluid className="d-flex justify-content-center" style={{height: '100vh'}}>
            <div className="App d-flex flex-column align-items-center align-self-center">
                <h3>Sign in to Task Manager</h3>
                <div style={{backgroundColor: 'lightgray', padding: "40px"}}>
                    <Form onSubmit={handleSubmit} style={{width: '500px'}}>
                        <Form.Group className="mb-3" controlId="formGroupUsername">
                            <Form.Label className="d-flex align-self-left">Username</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Username"
                                onChange={e => setField("userName", e.target.value)}
                                isInvalid={!!errors.userName}/>
                            <Form.Control.Feedback type='invalid'>
                                {errors.userName}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGroupPassword">
                            <Form.Label className="d-flex align-self-left">Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                onChange={e => setField("password", e.target.value)}
                                isInvalid={!!errors.password}/>
                            <Form.Control.Feedback type='invalid'>
                                {errors.password}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group>
                            <Form.Text hidden={!badCredentials}>
                                Wrong username or password.
                            </Form.Text>
                        </Form.Group>
                        <br/>
                        <Button variant="success" type="submit" className="btn btn-lg" style={{width: '100%'}}>
                            Sign in
                        </Button>
                        <p className="forgot-password text-md-start" style={{paddingTop: '20px'}}>
                            New to Task Manage? <a href="#" onClick={handleSignUp}>Create an account</a>
                        </p>
                    </Form>
                </div>

            </div>
        </Container>
    )
}
