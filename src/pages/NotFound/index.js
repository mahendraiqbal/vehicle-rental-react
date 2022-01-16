import React from "react";
import "./NotFound.css";

import NotFound from "../../assets/NotFound.jpg";

function index() {
  return (
    <main className="page-notFound">
      <section className="backToHome">
        <img src={NotFound} alt="notFound" className="notFound"></img>
        <button className="buttonBack">Back to Home</button>
      </section>
    </main>
  );
}

export default index;
