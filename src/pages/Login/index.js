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


function index(props) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const auth = useSelector((state) => state.auth);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dispatch = useDispatch();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [values, setValues] = useState({
    email: "",
    password: "",
  })
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isLoading, setIsloading] = useState(false);

  const handleChange = (e) => {
    setValues({
      ...values,[e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const body = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    dispatch(loginAction(body));
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
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
  }, [auth, props])

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (auth.isRejected === true) {
      setIsloading(false);
      toast.error("Wrong Email/Password", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
      });
    }
  }, [auth])

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
            ></input>
          </div>
          <div className="input-password">
            <input
              type="password"
              className="password"
              id="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            ></input>
          </div>
          <div className="button-sign-up">
            <button className="sign-up" >{/*Login*/} {isLoading ? <Loading /> : "Login"}</button>
          </div>
          </form>
          <Link to="forgotPassword">
            <p className="forgot-password">Forgot Password?</p>
          </Link>
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