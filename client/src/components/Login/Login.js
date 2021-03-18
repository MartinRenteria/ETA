import React, {useRef} from "react";
import { useLogin } from "../../utils/auth";
import { Form, Button, Modal } from "react-bootstrap"

export default function LoginForm(props) {

    const emailRef = useRef();
    const passwordRef = useRef();

    // Get the helper login function from the `useLogin` hook.
    const login = useLogin();

    const handleSubmit = async e => {
        e.preventDefault();

        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        try {

            await login({ email, password });

            // User has been successfully logged in and added to state. Perform any additional actions you need here such as redirecting to a new page.

        } catch(err) {

             // Handle error responses from the API
             if( err.response && err.response.data ) console.log(err.response.data);

        }
    }

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
                        <Form.Control type="email" ref={emailRef} placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="loginPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" ref={passwordRef} placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="rememberMe">
                        <Form.Check type="checkbox" label="Remember Me" />
                    </Form.Group>

                    <div className="d-flex justify-content-between">
                        <Button variant="outline-info btn-dark" type="submit" onSubmit={handleSubmit}>
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