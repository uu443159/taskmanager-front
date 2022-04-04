import React, {useContext, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, Button, Form} from 'react-bootstrap';
import {GeneralContext} from "../../context/GeneralContext";

export const AddTaskModal = () => {
    const [ title, setTitle ] = useState("");
    const [ description, setDescription ] = useState("");
    const [ badCredentials, setBadCredentials ] = useState(false);
    const {userName, token, modalVisible, setModalVisible} = useContext(GeneralContext);

    const handleSubmit = async (e) => {

        console.log('button clicked')
        console.log(token)
        console.log(userName)

        e.preventDefault();

        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json', 'Authorization': token},
            body: JSON.stringify({
                userName: userName,
                title: title,
                description: description
            })
        }

        const response = await fetch("http://localhost:8080/api/v1/task/save", requestOptions);

        if (response.ok) {
            setModalVisible(false)

        } else {
            console.log('error')
        }
    };

    return (
        <Modal
            show={modalVisible}
            onHide={() => setModalVisible(false)}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>Add new task</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit} >
                    <Form.Group controlId="formGroupTitle">
                        <Form.Label>Task title</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            value={title}
                            onChange={e => setTitle(e.target.value)}/>
                    </Form.Group>

                    <Form.Group controlId="formGroupDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            value={description}
                            onChange={e => setDescription(e.target.value)}/>
                    </Form.Group>

                    <Button variant="secondary" onClick={() => setModalVisible(false)}>
                        Close
                    </Button>
                    <Button variant="primary" type="submit">Add</Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
}