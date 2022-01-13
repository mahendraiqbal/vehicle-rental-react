import React from "react";
import "./Login.css";
import imageVan from "../../assets/image-van.jpeg";
import icon from "../../assets/icon.png";
import { Col, Row } from "react-bootstrap";
// import { loginAction } from "../../redux/actions/auth"
import axios from "axios";

function index(props) {
  const submitHandler = (e) => {
    e.preventDefault();
    const body = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    const URL = process.env.REACT_APP_HOST + "/auth";
    console.log(process.env.REACT_APP_HOST)
    axios
      .post(URL, body)
      .then((response) => {
        const token = response.data.result.token;
        const Userid = response;
        console.log(token);
        console.log(Userid);
        localStorage.setItem("vehicle-rental-token", JSON.stringify(token));
        props.history.push("/home");
      })
      .catch((err) => console.error(err));
  };
  return (
    <main>
      <Row>
        <Col md={6} className="image">
          <img src={imageVan} className="image-van" alt="image_van"></img>
        </Col>
        <Col md={6} className="form">
          <form className="submitLogin" onSubmit={submitHandler}>
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
          <div className="forgot-password">Forgot password?</div>
          <span className="text-span">try another way</span>
          <div className="button-login-google">
            <button className="login-google">Login With Google</button>
          </div>
          <div className="button-sign-up">
            <button className="sign-up">Sign Up</button>
          </div>
          <footer>
              <div className="icon-signUp"><img src={icon} className="icon-rental-signup" alt="icon_rental"></img></div>
            <p className="text-footer-signup">
              Plan and book your perfect trip with <br/> expert advice, travel tips
              for vehicle <br/> information from us <br/> <br/> ©2020 Vehicle Rental Center. All
              rights reserved
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

export default index;