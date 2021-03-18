import React from 'react';
import { Form, Button, Modal } from "react-bootstrap"

export default function Signup(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body>
                <Form>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="Text" placeholder="Enter First Name" />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="Text" placeholder="Enter Last Name" />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Enter Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Select A Role for Employee</Form.Label>
                        <Form.Control as="select">
                            <option>Role 1</option>
                            <option>Role 2</option>
                            <option>Role 3</option>
                            <option>Role 4</option>
                            <option>Role 5</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Other Infomation</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>

                    <div className="d-flex justify-content-between">
                        <Button variant="outline-info btn-dark" type="submit">
                            Sign Up
                        </Button>

                        <Button variant="outline-info btn-dark"
                            onClick={props.onHide}>Close</Button>
                    </div>
                </Form>
            </Modal.Body>
        </Modal>

    )
}