import React, {useContext} from 'react';
import {Button, Form, Nav, Navbar} from 'react-bootstrap';
import AddTaskModal from "../modal/AddTaskModal";
import {GeneralContext} from "../../context/GeneralContext";

export const Header = () => {
    const context = useContext(GeneralContext);

    return (
        <Navbar bg="light" expand="lg" fixed="top">
            <div>
                <Nav style={{marginLeft: '5vw'}}>
                    <span style={{width: '85vw'}}/>
                    <AddTaskModal/>
                    <span style={{width: '5vw'}}/>
                    <div className="greetings">
                        Hello {context.userName}!
                    </div>
                </Nav>
            </div>
        </Navbar>
    );
}
