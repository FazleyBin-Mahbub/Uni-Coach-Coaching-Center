import React from "react";
import { Form, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Register.css";
const Register = () => {
  // registration
  const handleRegistration = () => {};
  return (
    <div className="mt-5 pt-5">
      <h3>Create an Account</h3>
      <Form onSubmit={handleRegistration} className="register-form">
        <Form.Control
          className="mb-3"
          type="text"
          placeholder="Enter Your Name"
          required
        />
        <Form.Control
          className="mb-3"
          type="email"
          placeholder="Enter email"
          required
        />

        <Form.Group className="mb-3" controlId="formGridPassword">
          <Form.Control
            type="password"
            placeholder="Password must be 8 characters"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            type="password"
            placeholder="Re-enter Password"
            required
          />
        </Form.Group>

        <Button className="mt-3" variant="primary" type="submit">
          Register
        </Button>
      </Form>
      <div className="mt-4 already-login">
        <p>Already have an account?</p> <NavLink to="/login">Login</NavLink>
      </div>
    </div>
  );
};

export default Register;
