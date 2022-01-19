import React from "react";
import "./NotFound.css";
import { Link } from "react-router-dom"

import NotFound from "../../assets/NotFound.jpg";

function index() {
  return (
    <main className="page-notFound">
      <section className="backToHome">
        <img src={NotFound} alt="notFound" className="notFound"></img>
        {/* <button className="buttonBack">Back to Home</button> */}
        <Link to="/">Back to Home</Link>
      </section>
    </main>
  );
}

export default index;
