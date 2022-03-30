import React from "react";
import icon from "../../../assets/icon.png";
import message from "../../../assets/message.png";
// import iconProfile from "../../../assets/man.png";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import "./Navbar.css";
import Button from "@restart/ui/esm/Button";
import {logoutAction} from '../../../redux/actions/auth';
import {logout} from '../../../utils/https/auth';
import Swal from 'sweetalert2'

class Header extends React.Component {
  state = {
    userToken: "",
    isLogin: false,
    photoProfile: require("../../../assets/img-profile.png"),
  };

  onLogout = () => {
    Swal.fire({
      icon: "warning",
      title: "Do you want to logout?",
      confirmButtonText: "Logout",
      cancelButtonText: "Cancel"
    }).then((result) => {
      if (result.isConfirmed) {
        const token = this.props.token;
        logout(token)
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
        this.props.dispatch(logoutAction());

        Swal.fire({
          icon: "success",
          title: "Logout Success",
          text: "You have successfully logged out",
        });

        this.setState({
          userToken: "",
          isLogin: false,
        });
        
        setTimeout(() => {
          window.location.reload(false);
        }, 3000);
      }
    })
  }

  componentDidMount() {
    const token = this.props.token;
    const image = this.props.auth.userData.photo;

    if (image !== "null") {
      this.setState({
        photoProfile: process.env.REACT_APP_HOST + `/images/profile/${image}`,
      });
    }

    if (token) {
      this.setState({
        userToken: token,
        isLogin: true,
      });
    }
  }

  componentDidUpdate(prevProps) {
    const image = this.props.auth.userData.photo;
    if (image !== prevProps.auth.userData.photo) {
      this.setState({
        photoProfile: process.env.REACT_APP_HOST + `/images/profile/${image}`,
      });
    }
  }
  render() {
    const { isLogin } = this.state;
    // console.log(isLogin);
    return (
      <Navbar>
        <Container className="header">
          <Navbar.Brand href="#home">
            <img src={icon} alt="icon" className="icon-header"></img>
          </Navbar.Brand>
          <Nav className="navbar">
            <Nav.Link as={NavLink} exact to="/">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/vehicle/type">
              Vehicle Type
            </Nav.Link>
            <Nav.Link as={NavLink} to="/history">
              History
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about">
              About
            </Nav.Link>
            {isLogin ? (
              <>
                <Nav.Link as={NavLink} to="/chat/list">
                  <img
                    src={message}
                    alt="iconmessage"
                    className="icon-message"
                  ></img>
                </Nav.Link>
                <NavDropdown
                  title={
                    <img
                      src={this.state.photoProfile}
                      className="iconProfile"
                      alt="iconprofile"
                      onError={({ currentTarget }) => {
                        console.log(currentTarget);
                        currentTarget.onerror = null;
                        currentTarget.src = require("../../../assets/man.png");
                      }}
                    ></img>
                  }
                >
                  <NavDropdown.Item as={Link} to="/profile">
                    Edit Profile
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/help">
                    Help
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={this.onLogout}>
                    Logout
                  </NavDropdown.Item>
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
                    className="btn-signUp"
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

const mapStateToProps = (state) => {
  return {
    token: state.auth.userData.token,
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(Header);
