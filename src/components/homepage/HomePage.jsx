import React from "react";
import {Button, Container, Form, FormControl, FormGroup, Nav, Navbar, NavDropdown, NavItem} from "react-bootstrap";
import Sidebar from "./Sidebar";
import './home-page.css';
import AddTask from "../add-task/AddTask";

export const HomePage = () => {

    return (

        <Container fluid>
            <Sidebar/>
            <Container>
                <Navbar  bg="light" variant="dark" expand="lg" fixed="top">
                    <Container>
                        <Nav className="me-auto">
                            <Form inline="true" className="d-flex flex-row">
                                <Form.Control type="text" placeholder="Search" className="mr-sm-2" />
                                <Button variant="success">Search</Button>
                            </Form>
                            <span style={{width: '60vw'}} />
                           <AddTask />
                            <span style={{width: '5vw'}} />
                            <i className="bi bi-list-ul text-black fs-2" />
                        </Nav>
                    </Container>
                </Navbar>
            </Container>
        </Container>
    );
}
