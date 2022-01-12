import React from "react";
import icon from "../../../assets/icon.png";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./index.css";

function HeaderBefore() {
  return (
    <Navbar>
      <Container className="header">
        <Navbar.Brand href="#home">
          <img src={icon} alt="icon" className="icon"></img>
        </Navbar.Brand>
        <Nav className="navbar">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#vehicletype">Vehicle Type</Nav.Link>
          <Nav.Link href="#history">History</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#login">
            <button  className="button-login">Login</button>
          </Nav.Link>
          <Nav.Link href="#register">
            <button  className="button-register">Register</button>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default HeaderBefore;
