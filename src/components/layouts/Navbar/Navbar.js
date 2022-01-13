import React from "react";
import icon from "../../../assets/icon.png";
import message from "../../../assets/message.png";
import iconProfile from "../../../assets/img-profile.png";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navbar.css";

class Header extends React.Component {
  state= {
    userToken: "",
    isLogin:false,
  }

  onLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("vehilce-rental-token");

    this.setState({
      userToken: "",
      isLogin: false,
    });
  };

  componentDidMount(){
    const URL = `http://localhost:8080/users`
    console.log(URL);
  }
  render() {
    return (
    <Navbar>
      <Container className="header">
        <Navbar.Brand href="#home">
          <img src={icon} alt="icon" className="icon-header"></img>
        </Navbar.Brand>
        <Nav className="navbar">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#vehicletype">Vehicle Type</Nav.Link>
          <Nav.Link href="#history">History</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#pricing">
            <img src={message} alt="iconmessage" className="icon-message"></img>
          </Nav.Link>
          {/* <Nav.Link href="#about" className="dropdown">
            <img
              src={iconProfile}
              className="iconProfile"
              alt="iconprofile"
            ></img>
          </Nav.Link> */}
          <NavDropdown 
          title={
            <img
              src={iconProfile}
              className="iconProfile"
              alt="iconprofile"
            ></img>
          }
          >
              <NavDropdown.Item  as={Link} to="/profile" >Edit Profile</NavDropdown.Item> 
              <NavDropdown.Item as={Link} to="#" >Help</NavDropdown.Item>
              <NavDropdown.Item  onClick="{this.onLogout}" >Logout</NavDropdown.Item>
            </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
  }
}

export default Header;
