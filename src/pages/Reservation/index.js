import React from "react";
import Header from "../../components/layouts/Navbar/Navbar";
import Footer from "../../components/layouts/Footer/Footer";
import iconBack from "../../assets/back.png";
import imageBike from "../../assets/image-bike-pixie.jpeg";
import Counter from "../../components/layouts/Counter";
import "./reservation.css";

function index() {
  return (
    <main>
      <Header />
      <section className="title-reservation">
          <img src={iconBack} alt="iconBack" className="back-reservation"></img>
          <h1 className="title-reservation">Reservation</h1>
      </section>
      <section className="detail-reservation">
        <section className="image-reservation">
          <img
            src={imageBike}
            alt="imageBike"
            className="image-reservation"
          ></img>
        </section>
        <section className="detail-reservation-info">
          <h2 className="brand-reservation">Fixie - Gray Only</h2>
          <h3 className="city-reservation">Yogyakarta</h3>
          <p className="prepayment-reservation">No Prepayment</p>
          <Counter />
          <p className="reservation-date">Reservasion Date</p>
          <input className="selectDate" type="date" /> <br />
          <select id="day" name="day" className="day-reservation">
            <option value="1">1 Day</option>
            <option value="2">2 Day</option>
            <option value="3">3 Day</option>
            <option value="4">4 Day</option>
          </select>
        </section>
      </section>
      <section className="button-pay-reservation">
        <button className="button-reservation-pay">Pay now : Rp. 178.000</button>
      </section>
      <Footer />
      <hr />
      <div className="icon-footer">
        <i className="fab fa-twitter"></i>
        <i className="fab fa-facebook-f"></i>
        <i className="fab fa-instagram"></i>
        <i className="fab fa-linkedin-in"></i>
        <i className="fab fa-youtube"></i>
      </div>
    </main>
  );
}

export default index;
