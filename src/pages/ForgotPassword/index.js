import React from "react";
import "./index.css";
import Footer from "../../components/layouts/Footer/Footer";
import back from "../../assets/back-forgot.png";
import { Link } from "react-router-dom";

function ForgotPassword() {
  return (
    <main>
      <section className="jumbotron">
        <Link to="login">
          <div className="button-back-forgot">
            <img src={back} alt="backForgotPassword" className="back-forgot" />{" "}
            Back
          </div>
        </Link>
        <h1 className="titleForgotPassword">Don't Worry, we got your back!</h1>
        <input
          type="email"
          className="inputEmailForgot"
          id="email"
          placeholder="Input your email address"
          name="email"
        />
        <br />
        <button className="button-send">Send Link</button>
        <p className="text-forgot">
          You will receive a link to reset your password <br /> if you haven't
          receive any link, click <li>Resend Link</li>
        </p>
      </section>
      <Footer />
    </main>
  );
}

export default ForgotPassword;
