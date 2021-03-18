import React from 'react';
import { Form, Button, Modal } from "react-bootstrap"

export default function Login(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body>
                <Form>
                    <Form.Group controlId="LoginEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="loginPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="rememberMe">
                        <Form.Check type="checkbox" label="Remember Me" />
                    </Form.Group>

                    <div className="d-flex justify-content-between">
                        <Button variant="outline-info btn-dark" type="submit">
                            Log In
                    </Button>

                        <Button variant="outline-info btn-dark"
                        onClick={props.onHide}>Close</Button>
                    </div>

                </Form>
            </Modal.Body>
        </Modal>

    )
}