import React from "react";
import "./Header.css";
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
    fontWeight: "bold",
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
          <div className="home-btn">
            <NavLink style={navStyle} to="/home">
              Home
            </NavLink>
          </div>
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

          {user.email ? (
            <Button onClick={logout} variant="danger">
              LogOut
            </Button>
          ) : (
            <NavLink style={navStyle} to="/login">
              Login
            </NavLink>
          )}
        </Stack>
      </Nav>
    </Navbar>
  );
};

export default Header;
