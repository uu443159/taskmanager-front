import React, {useContext} from "react";
import {Button, Container, Form, FormControl, FormGroup, Nav, Navbar, NavDropdown, NavItem} from "react-bootstrap";
import Sidebar from "./Sidebar";
import './home-page.css';
import AddTask from "../add-task/AddTask";
import {GeneralContext} from "../../context/GeneralContext";
import TaskCards from "../task-card/TaskCards";

export const HomePage = () => {

    const context = useContext(GeneralContext);

    return (

        <Container fluid>
            <Sidebar/>
            <div>
                <Navbar bg="light" expand="lg" fixed="top">
                    <div>
                        <Nav style={{marginLeft: '5vw'}}>
                            <span style={{width: '65vw'}}/>
                            <Form inline="true" className="d-flex flex-row">
                                <Form.Control type="text" placeholder="Search" className="mr-lg-2"/>
                                <Button variant="success">Search</Button>
                            </Form>
                            <span style={{width: '5vw'}}/>
                            <AddTask/>
                            <span style={{width: '5vw'}}/>
                            <div className="greetings">
                                Hello {context.userName}!
                            </div>
                        </Nav>
                    </div>
                </Navbar>

            </div>
            <TaskCards/>

        </Container>
    );
}
