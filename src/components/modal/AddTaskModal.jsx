import React, {useContext, useRef, useState} from "react";
import {Button, Form, Modal} from 'react-bootstrap';
import {GeneralContext} from "../../context/GeneralContext";


export default function AddTaskModal() {

    const context = useContext(GeneralContext);

    const initialFormData = Object.freeze({
        username: context.userName,
        title: "",
        description: ""
    });

    const [show, setShow] = useState(false);
    const [validated, setValidated] = useState(false);
    const [formData, updateFormData] = React.useState(initialFormData);
    const formRef = useRef(null);

    const handleClose = () => {
        setShow(false);

        updateFormData({
            ...initialFormData
        });

        setValidated(false);
    }
    const handleShow = () => {
        setShow(true);
    }

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        });
    };

    const handleSubmit = async (event) => {
        const form = event.currentTarget;

        event.preventDefault();

        if (form.checkValidity() === false) {
            event.stopPropagation();
        }

        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json', 'Authorization': context.token},
            body: JSON.stringify(formData)
        };

        const response = await fetch("http://localhost:8080/api/v1/task/save", requestOptions);

        if (response.ok) {
            handleClose();
            window.location.reload(false);
        }

        setValidated(true);
    };

    return (
        <>
            <i className="bi bi-journal-plus text-black fs-2" style={{cursor: 'pointer'}} onClick={handleShow}/>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>New Task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form itemRef={formRef} noValidate validated={validated} onSubmit={handleSubmit} id="taskForm">
                        <Form.Group className="mb-3" controlId="formTaskTitle">
                            <Form.Label>Task title</Form.Label>
                            <Form.Control type="text" placeholder="Enter task title" required onChange={handleChange}
                                          name="title"/>
                            <Form.Control.Feedback type="invalid">
                                Please provide a task title.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formTaskDescription">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" placeholder="Add task description" required
                                          onChange={handleChange} name="description"/>
                            <Form.Control.Feedback type="invalid">
                                Please provide a task description.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" type="submit" form="taskForm">
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
