import React from "react";
import "./index.css";
import Footer from "../../components/layouts/Footer/Footer";
import back from "../../assets/back-forgot.png";
import { Link } from "react-router-dom";
import { verifyOTP } from "../../utils/https/auth";
import { toast, ToastContainer } from "react-toastify";

function ForgotPassword(props) {
  const submitHandler = (e) => {
    e.preventDefault();
    const body = {
      email: e.target.email.value,
      otp: e.target.otp.value,
    };

    verifyOTP(body)
      .then((res) => {
        toast.success("Your OTP is Valid go to Reset Password", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 2000,
        });
        props.history.push("/resetPassword");
      })
      .catch((err) => console.log(err.response));
  };

  return (
    <main>
      <section className="jumbotron">
        <Link to="login">
          <div className="button-back-forgot">
            <img src={back} alt="backForgotPassword" className="back-forgot" />{" "}
            Back
          </div>
        </Link>
        <form onSubmit={submitHandler}>
          <ToastContainer />
          <h1 className="titleForgotPassword">
            Don't Worry, we got your back!
          </h1>
          <input
            type="email"
            className="inputEmailForgot"
            id="email"
            placeholder="Input your email address"
            name="email"
          />
          <input
            type="text"
            className="inputEmailForgot"
            id="otp"
            placeholder="Input your OTP"
            name="otp"
          />
          <br />
          <button className="button-send">Send Link</button>
          <p className="text-forgot">
            You will receive a link to reset your password <br /> if you haven't
            receive any link, click <li>Resend Link</li>
          </p>
        </form>
      </section>
      <Footer />
    </main>
  );
}

export default ForgotPassword;
