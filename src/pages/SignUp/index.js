import React from "react";
import "./SignUp.css";
import imageVan from "../../assets/image-van.jpeg";
import icon from "../../assets/icon.png";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import {regitser} from '../../utils/https/auth';


function index(props) {
  const submitHandler = (e) => {
    e.preventDefault();
    const body = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };

    regitser(body)
      .then((res) => {
        toast.success("Registration Successfull", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 2000,
        });
        props.history.push("/login");
      })
      .catch((err) => console.log(err));
  };
  return (
    <main>
      <Row>
        <Col md={6} className="image">
          <img src={imageVan} className="image-van" alt="image_van"></img>
        </Col>
        <Col md={6} className="form">
          <form className="submitSignUp" onSubmit={submitHandler}>
            <div className="titleSignUp">Sign Up</div>
          <div className="input-name">
            <input
              type="name"
              className="name"
              id="name"
              placeholder="Name"
              name="name"
            ></input>
          </div>
          <div className="input-email">
            <input
              type="email"
              className="email"
              id="email"
              placeholder="Email"
              name="email"
            ></input>
          </div>
          <div className="input-password">
            <input
              type="password"
              className="password"
              id="password"
              placeholder="Password"
              name="password"
            ></input>
          </div>
          <div className="button-sign-up">
            <button className="sign-up" >Sign Up</button>
            {/* <ToastContainer /> */}
          </div>
          </form>
          <span>try another way</span>
          <div className="button-sign-up-google">
            <button className="sign-up-google">Sign Up With Google</button>
          </div>
          <div className="button-LoginSignUp">
            <Link to="/login">
              <button className="signUpLogin">Login</button>
            </Link>
          </div> <br/> <br/>
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