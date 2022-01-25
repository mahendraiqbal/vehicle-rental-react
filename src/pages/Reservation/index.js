import React from "react";
import Header from "../../components/layouts/Navbar/Navbar";
import Footer from "../../components/layouts/Footer/Footer";
import iconBack from "../../assets/back.png";
import imageBike from "../../assets/image-bike-pixie.jpeg";
import Counter from "../../components/layouts/Counter";
import { Link } from "react-router-dom";
import "./reservation.css";

class index extends React.Component {
  state = {
    counter: 0,
  };
  onClickPrevious = () => {
    const total = this.state.counter;
    this.setState({
      counter: total - 1,
    });
  };
  onClickNextCounter = () => {
    const total = this.state.counter;
    this.setState({
      counter: total + 1,
    });
  };
  render() {
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
            <h2 className="brand-reservation-title">Fixie - Gray Only</h2>
            <h3 className="city-reservation-title">Yogyakarta</h3>
            <p className="prepayment-reservation">No Prepayment</p>
            <Counter
              onClickPrev={this.onClickPrevious}
              onClickNext={this.onClickNextCounter}
              counterTotal={this.state.counter}
            />
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
          <Link to="/payment">
            <button className="button-reservation-pay">
              Pay now : Rp. 178.000
            </button>
          </Link>
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
}

export default index;
