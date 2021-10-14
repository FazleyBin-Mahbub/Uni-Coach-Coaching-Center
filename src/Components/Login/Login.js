import React from "react";
import { Form, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Login.css";
const Login = () => {
  const { signInWithGoogle, user } = useAuth();
  return (
    <div className="mt-5 pt-5 ">
      <h4>Please Login</h4>
      <Form className="login-form ">
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Control type="email" placeholder="Enter email" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Control type="password" placeholder="Password" required />
        </Form.Group>
      </Form>
      <div>
        Name: <strong>{user.displayName}</strong>
      </div>
      <Button className="mt-3" variant="primary" type="submit">
        Login
      </Button>
      <br />
      <Button
        onClick={signInWithGoogle}
        className="ms-3 mt-3"
        variant="primary"
        type="submit"
      >
        Google
      </Button>

      <Button className="ms-3 mt-3" variant="primary" type="submit">
        Facebook
      </Button>

      <br />
      <NavLink
        style={{
          marginTop: "10px",
        }}
        to="/register"
      >
        New User?
      </NavLink>
    </div>
  );
};

export default Login;
