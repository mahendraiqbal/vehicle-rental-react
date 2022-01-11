import React from "react";
import "./index.css";
import Footer from "../../components/layouts/Footer/Footer";

function ForgotPassword2() {
  return (
    <main>
      <section className="jumbotron">
        Back
        <h1 className="title">Don't Worry, we got your back!</h1>
        <p className="text-forgot">
          You will receive a link to reset your password <br /> if you haven't
          receive any link, click resend link
        </p>
        <input
          type="email"
          className="email"
          id="email"
          placeholder="Input your email address"
          name="email"
        />
        <button>Send Link</button>
      </section>
      <Footer />
    </main>
  );
}

export default ForgotPassword2;
