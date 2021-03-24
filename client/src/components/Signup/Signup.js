import React, { useRef } from "react";
import { useLogin } from "../../utils/auth";
import api from "../../utils/api";
import { Form, Button, Modal } from "react-bootstrap";

export default function Signup(props) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const titleRef = useRef();

  // Get the helper login function from the `useLogin` hook.
  const login = useLogin();

  const handleSubmit = async e => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const firstName = firstNameRef.current.value;
    const lastName = lastNameRef.current.value;
    const title = titleRef.current.value;

    console.log(email, password);

    try {
      // Register the user.
      await api.register({ email, password, firstName, lastName, title });

      // User has been successfully registered, now log them in with the same information.
      await login({ email, password });

      // User has been successfully registered, logged in and added to state. Perform any additional actions you need here such as redirecting to a new page.
    } catch (err) {
      // Handle error responses from the API. This will include
      if (err.response && err.response.data) {
        console.log(err.response.data);
      } else {
        console.log(err);
      }
    }
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="Text"
              ref={firstNameRef}
              placeholder="Enter First Name"
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="Text"
              ref={lastNameRef}
              placeholder="Enter Last Name"
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              ref={emailRef}
              placeholder="name@example.com"
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Enter Password</Form.Label>
            <Form.Control
              type="password"
              ref={passwordRef}
              placeholder="Password"
            />
          </Form.Group>
          {/* this doesn't have password verification yet */}
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Employee Title</Form.Label>
            <Form.Control
              type="Text"
              ref={titleRef}
              placeholder="Enter title"
            />
          </Form.Group>
          <div className="d-flex justify-content-between">
            <Button variant="outline-info btn-dark" type="submit">
              Sign Up
            </Button>

            <Button variant="outline-info btn-dark" onClick={props.onHide}>
              Close
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
