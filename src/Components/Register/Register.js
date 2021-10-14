import React from "react";
import { Form, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Register.css";
const Register = () => {
  return (
    <div className="mt-5 pt-5">
      <h3>Please Register</h3>
      <Form className="register-form">
        <Form.Control
          className="mb-3"
          type="email"
          placeholder="Enter email"
          required
        />

        <Form.Group className="mb-3" controlId="formGridPassword">
          <Form.Control type="password" placeholder="Password" required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control placeholder="Apartment, studio, or floor" required />
        </Form.Group>

        <Form.Group controlId="formGridCity">
          <Form.Control placeholder="City" required />
        </Form.Group>

        <Button className="mt-3" variant="primary" type="submit">
          Register
        </Button>
      </Form>
      <NavLink to="/login">Already Registered?</NavLink>
    </div>
  );
};

export default Register;
