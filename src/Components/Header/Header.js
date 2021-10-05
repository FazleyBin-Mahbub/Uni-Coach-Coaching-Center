import React from "react";
import img from "../../images/logo-B.png";
import { Container, Nav, Navbar, Stack } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
  const navStyle = {
    textDecoration: "none",
    color: "#4b83fc",
    font: "montserrat",
    fontSize: "17px",
    fontWeight: "bolder",
  };
  return (
    <Navbar bg="light" className="p-2" fixed="top">
      <Container>
        <div>
          <Link to="/home">
            <img className="w-50 img-fluid" src={img} alt="" />
          </Link>
        </div>
      </Container>
      <Nav className="me-5 m-2">
        <Stack direction="horizontal" gap={5}>
          <NavLink style={navStyle} to="/home">
            Home
          </NavLink>
          <NavLink style={navStyle} to="/services">
            Services
          </NavLink>
          <NavLink style={navStyle} to="/about">
            About
          </NavLink>
          <NavLink style={navStyle} to="/contact">
            Contact
          </NavLink>
          <NavLink style={navStyle} to="/blog">
            Blog
          </NavLink>
        </Stack>
      </Nav>
    </Navbar>
  );
};

export default Header;
