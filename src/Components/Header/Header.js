import React from "react";
import img from "../../images/logo-B.png";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <div>
          <img className="w-50 img-fluid" src={img} alt="" />
        </div>

        <Nav className="ms-auto">
          <NavLink to="#home">Home</NavLink>
          <NavLink to="#link">Link</NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
