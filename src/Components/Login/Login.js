import React from "react";
import { Form } from "react-bootstrap";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Login.css";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Login = () => {
  const { signInWithGoogle } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_url = location.state?.from || "/purchase";
  const handleGoogleLogin = () => {
    signInWithGoogle().then(() => {
      history.push(redirect_url);
    });
  };
  return (
    <div className="mt-5 pt-5 ">
      <h4 className="login-title">Login</h4>
      <Form onSubmit="" className="login-form ">
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Control type="email" placeholder="Enter email" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Control
            type="password"
            placeholder="Password must be 8 characters"
            required
          />
        </Form.Group>
      </Form>

      <button className="login-btn fw-bolder">Login</button>
      <br />
      <p className="mt-2">--------or---------</p>
      <div className="mt-3">
        <span className="google-icon" onClick={handleGoogleLogin}>
          <FontAwesomeIcon icon={faGoogle} />
        </span>

        <span className="fb-icon">
          <FontAwesomeIcon icon={faFacebook} />
        </span>
      </div>

      <br />
      <div className="new-reg">
        <p>New Here?</p>
        <NavLink to="/register">Register</NavLink>
      </div>
    </div>
  );
};

export default Login;
