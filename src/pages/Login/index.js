/* eslint-disable react-hooks/rules-of-hooks */
import React, {useEffect, useState} from "react";
import "./Login.css";
import imageVan from "../../assets/image-van.jpeg";
import icon from "../../assets/icon.png";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
// import {login} from '../../utils/https/auth';
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../../redux/actions/auth";
import Loading from '../../components/LoadingComponent/LoadingComp';
import {validateLogin} from '../../helpers/validation'


function index(props) {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    email: "",
    password: "",
  })
  const [error, setError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false)
  const [isLoading, setIsloading] = useState(false);

  const handleChange = (e) => {
    setValues({
      ...values,[e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setError(validateLogin(values));
    const validateBody = validateLogin(values);

    const body = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    if (Object.keys(validateBody).length === 0) {
      setIsSubmit(true);
      dispatch(loginAction(body));
    }
  };

  useEffect(() => {
    if (Object.keys(error).length === 0 && isSubmit) {
      console.log("submit", isSubmit);
      console.log("useEf", error);
    }
    if (auth.isPending === true ) {
      setIsloading(true);
    }
    if (auth.isFulfilled === true) {
      toast.success("Login success", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
      });
      setTimeout(() => props.history.push("/"), 3000);
    }
  }, [auth, error, isSubmit, props])

  useEffect(() => {
    if (auth.isRejected === true) {
      setIsloading(false);
      let errors = {};
      error.form = "Wrong Email/Password";
      setError(errors);
    }
  }, [auth, error])

  return (
    <main>
      <Row>
        <Col md={6} className="image">
          <img src={imageVan} className="image-van" alt="image_van"></img>
        </Col>
        <Col md={6} className="form">
          <form className="submitSignUp" onSubmit={submitHandler}>
            <ToastContainer />
            <div className="titleSignUp">Login</div>
          <div className="input-name">
          </div>
          <div className="input-email">
            <input
              type="email"
              className="email"
              id="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
            />
          </div>
          {error.email && (
            <div className="text-danger fw-bold error">{error.email}</div>
          )}
          <div className="input-password">
            <input
              type="password"
              className="password"
              id="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
          </div>
          {error.password && (
            <div className="text-danger fw-bold error">{error.password}</div>
          )}
          <Link to="forgotPassword">
            <p className="forgot-password">Forgot Password?</p>
          </Link>
          {error.form && (
            <div className="text-danger fw-bold error text-center">{error.form}</div>
          )}
          <div className="button-sign-up">
            <button className="sign-up" >{/*Login*/} {isLoading ? <Loading /> : "Login"}</button>
          </div>
          </form>
          <span>try another way</span>
          <div className="button-sign-up-google">
            <button className="sign-up-google">Login With Google</button>
          </div>
          <div className="button-LoginSignUp">
            <Link to="/signUp">
              <button className="signUpLogin">Sign Up</button>
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