import React from "react";
import icon from "../../../assets/icon.png";
import message from "../../../assets/message.png";
import iconProfile from "../../../assets/img-profile.png";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "./Navbar.css";

class Header extends React.Component {
  render() {
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
          <Nav.Link href="#pricing">
            <img src={message} alt="iconmessage" className="icon-message"></img>
          </Nav.Link>
          <Nav.Link href="#about" className="dropdown">
            <img
              src={iconProfile}
              className="iconProfile"
              alt="iconprofile"
            ></img>
          </Nav.Link>
          <NavDropdown>
              <NavDropdown.Item href="#action3">Logout</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Edit Profile</NavDropdown.Item>
            </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
  }
}

export default Header;
