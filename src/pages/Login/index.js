import React from "react";
import "./Login.css";
import { connect } from "react-redux";
import { loginAction } from "../../redux/actions/auth";
import { toast } from "react-toastify";

import imageVan from "../../assets/image-van.jpeg";
import iconGoogle from "../../assets/icon-google.png"
import icon from "../../assets/icon.png";
import { Col, Row } from "react-bootstrap";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
// import axios from "axios";

class index extends React.Component {
  submitHandler = (e) => {
    e.preventDefault();
    const body = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    //   const URL = process.env.REACT_APP_HOST + "/auth";
    //   console.log(process.env.REACT_APP_HOST)
    //   axios
    //     .post(URL, body)
    //     .then((response) => {
    //       const token = response.data.result.token;
    //       const Userid = response;
    //       console.log(token);
    //       console.log(Userid);
    //       localStorage.setItem("vehicle-rental-token", JSON.stringify(token));
    //       props.history.push("/home");
    //     })
    //     .catch((err) => console.error(err));
    this.props.dispatch(loginAction(body));
  };
  componentDidUpdate() {
    if (this.props.auth.isFulfilled === true) {
      localStorage["vehicle-rental-token"] = JSON.stringify(
        this.props.auth.userData.token
      );
      // // console.log(this.props.auth.userData.token)
      localStorage["vehicle-rental-photo"] = this.props.auth.userData.photo;
      // // console.log(this.props.auth.userData)
      localStorage["vehicle-rental-roles"] = this.props.auth.userData.roles_id;
      // console.log(this.props.auth.userData.roles_id)
      toast.success("Login success", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 10000,
      })
      this.props.history.push("/");
    }
    if (this.props.auth.isRejected === true) {
      toast.error("Email or Password zonk", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 5000,
      });
    }
  }
  render() {
    if (this.props.auth.isFulfilled) return <Redirect to="/" />;
    return (
      <main>
        <Row>
          <Col md={6} className="image">
            <img src={imageVan} className="image-van" alt="image_van"></img>
          </Col>
          <Col md={6} className="form">
            <form className="submitLogin" onSubmit={this.submitHandler}>
              <div className="title-login">Login</div>
              <div className="input-email">
                <input
                  type="email"
                  className="email"
                  id="email"
                  placeholder="Email"
                  name="email"
                />
              </div>
              <div className="input-password">
                <input
                  type="password"
                  className="password"
                  id="password"
                  placeholder="Password"
                  name="password"
                />
              </div>
              <div className="button-LoginSignIn">
                <button className="loginSignIn">Login</button>
              </div>
            </form>
            <Link to="/forgotPassword">
              <div className="forgot-password">Forgot password?</div>
            </Link>
            <span className="text-span">try another way</span>
            <div className="button-login-google">
              <button 
                type="submit"
                className="login-google"
              >
                <img 
                  src={iconGoogle}
                  alt="iconGoogle"
                  width={20}
                  height={20}
                />
                Login With Google
              </button>
            </div>
            <div className="button-sign-up">
              <Link to="/signUp">
                <button className="sign-up">Sign Up</button>
              </Link>
            </div>
            <footer>
              <div className="icon-signUp">
                <img
                  src={icon}
                  className="icon-rental-signup"
                  alt="icon_rental"
                ></img>
              </div>
              <p className="text-footer-signup">
                Plan and book your perfect trip with <br /> expert advice,
                travel tips for vehicle <br /> information from us <br /> <br />{" "}
                ©2020 Vehicle Rental Center. All rights reserved
              </p>
              <hr />
              <div className="icon-footer">
                <i className="fab fa-twitter"></i>
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-linkedin-in"></i>
                <i className="fab fa-youtube"></i>
              </div>
            </footer>
          </Col>
        </Row>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(index);
