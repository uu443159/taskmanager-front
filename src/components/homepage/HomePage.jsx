import React from "react";
import {Container, Navbar, Button, Row, Image, Col} from "react-bootstrap";
import {useNavigate} from 'react-router-dom';
import homePageImage from '../../assets/home-page.png';
import tasksIcon from '../../assets/icon-tasks.png';
import './home-page.css';

export const HomePage = () => {

    const navigate = useNavigate();

    const handleSignIn = () => {
        navigate("/sign-in");
    }

    const handleSignUp = () => {
        navigate("/sign-up");
    }

    return (
        <Container fluid style={{paddingTop: 50, paddingLeft: 100, paddingRight: 100}}>
            <Row>
                <Col className="logo-wrapper">
                    <img alt="logo" src={tasksIcon} className="logo"/>
                    <span className="logo-text">taskManager</span>
                </Col>
                <Col className="sign-in-wrapper">
                    <Button
                        variant="light"
                        onClick={handleSignIn}>
                        Sign In</Button>
                    <Button
                        variant="primary"
                        onClick={handleSignUp}>Sign Up</Button>
                </Col>
            </Row>
            <Row style={{padding: 100}}>
                <Col style={{display: "flex", alignItems: "flex-start", flexDirection: "column"}}>
                    <div className="moto-wrapper">
                        <p>Task Manager</p>
                        <p>This tool is designed to help you better manage your tasks</p>
                    </div>
                    <Button
                        variant="primary"
                        size="lg"
                    onClick={handleSignIn}>
                        Get Started</Button>
                </Col>
                <Col>
                    <Image src={homePageImage} fluid={true} rounded={true}/>
                </Col>
            </Row>
        </Container>
    );
}
