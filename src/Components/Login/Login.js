import React from "react";
import { Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Login.css";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Login = () => {
  const { signInWithGoogle } = useAuth();
  return (
    <div className="mt-5 pt-5 ">
      <h4>Please Login</h4>
      <Form onSubmit="" className="login-form ">
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Control type="email" placeholder="Enter email" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Control type="password" placeholder="Password" required />
        </Form.Group>
      </Form>

      <button className="login-btn fw-bolder">Login</button>
      <br />
      <div className="mt-3">
        <span className="google-icon" onClick={signInWithGoogle}>
          <FontAwesomeIcon icon={faGoogle} />
        </span>

        <span className="fb-icon">
          <FontAwesomeIcon icon={faFacebook} />
        </span>
      </div>

      <br />
      <NavLink to="/register">New User?</NavLink>
    </div>
  );
};

export default Login;
