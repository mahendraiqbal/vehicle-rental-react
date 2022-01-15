import React from "react";
import icon from "../../../assets/icon.png";
import message from "../../../assets/message.png";
import iconProfile from "../../../assets/img-profile.png";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import Button from "@restart/ui/esm/Button";

class Header extends React.Component {
  state= {
    userToken: "",
    isLogin:false,
    userProfile: require("../../../assets/img-profile.png")
  };

  onLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("vehicle-rental-token");
    // localStorage.removeItem("vehicle-rental-photo")

    this.setState({
      userToken: "",
      isLogin: false,
    });
  };

  componentDidMount(){
    const token = localStorage.getItem("vehicle-rental-token");
    // const imgProfile = localStorage.getItem("vehicle-rental-photo");

    if(token) {
      this.setState({
        userToken: JSON.parse(token),
        isLogin: true,
      })
    }
  }
  render() {
    const { isLogin } = this.state;
    console.log(isLogin);
    return (
    <Navbar>
      <Container className="header">
        <Navbar.Brand href="#home">
          <img src={icon} alt="icon" className="icon-header"></img>
        </Navbar.Brand>
        <Nav className="navbar">
          <Nav.Link as={NavLink} exact to="/home">Home</Nav.Link>
          <Nav.Link as={NavLink} to="/vehicleType">Vehicle Type</Nav.Link>
          <Nav.Link as={NavLink} to="/history">History</Nav.Link>
          <Nav.Link as={NavLink} to="/about">About</Nav.Link>
          {isLogin ? (
            <>
            <Nav.Link href="#message">
            <img src={message} alt="iconmessage" className="icon-message"></img>
            </Nav.Link>
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
            </>
          ) : (
            <>
            <Link to="/login" className="login-nav">
              <Button
                variant="outline-warning"
                type="button"
                size="sm"
                className="btn-login"
                >
                Login
              </Button>
            </Link>
            <Link to="/signUp" className="signUp-nav">
              <Button
                variant="warning"
                type="button"
                size="sm"
                className="btn-login"
                >
                Sign Up
              </Button>
            </Link>
            </>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
  }
}

export default Header;
