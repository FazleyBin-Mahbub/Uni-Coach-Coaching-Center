import React from "react";

import img from "../../images/logo-B.png";
import { Container, Nav, Navbar, Stack, Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Header = () => {
  const navStyle = {
    textDecoration: "none",
    color: "#4b83fc",
    font: "montserrat",
    fontSize: "17px",
    fontWeight: "bolder",
  };
  const { user, logout } = useAuth();
  return (
    <Navbar bg="light" className="p-2" fixed="top">
      <Container>
        <div>
          <Link to="/home">
            <img className="w-50 img-fluid" src={img} alt="" />
          </Link>
        </div>
      </Container>
      {/* navbar links  */}
      <Nav className="me-5 m-2">
        <Stack direction="horizontal" gap={4}>
          <NavLink style={navStyle} to="/home">
            Home
          </NavLink>
          <NavLink style={navStyle} to="/services">
            Services
          </NavLink>
          <NavLink style={navStyle} to="/coursepurchase">
            Purchase
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
          <NavLink style={navStyle} to="/register">
            Register
          </NavLink>
          <NavLink style={navStyle} to="/login">
            Login
          </NavLink>

          {user?.email && (
            <Button onClick={logout} variant="danger">
              LogOut
            </Button>
          )}
        </Stack>
      </Nav>
    </Navbar>
  );
};

export default Header;
