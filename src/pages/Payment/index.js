import React, { Component } from "react";
import Header from "../../components/layouts/Navbar/Navbar";
import Footer from "../../components/layouts/Footer/Footer";
import iconBack from "../../assets/back.png";
// import imageBike from "../../assets/image-bike-pixie.jpeg";
import "./Payment.css";

class Payment extends Component {
  render() {
    return (
      <main>
        <Header />
        <section className="title-payment">
          <img src={iconBack} alt="iconBack" className="back-payment"></img>
          <h1 className="title-payment">Payment</h1>
        </section>
        <section className="jumbotron-payment">
          <section className="info-payment">
            <h1 className="brand-payment-title">Fixie - Gray Only</h1>
            <h2 className="city-payment">Yogyakarta</h2>
            <p className="prepayment-payment">No Prepayment</p>
          </section>
          <section className="button-payment-title">
            <button className="button-title-payment">Pay before : 59:30</button>
          </section>
        </section>
        <section className="code-rental-payment">
          <section className="payment-code">
            <p className="code-name">Payment code :</p> <br />
            <input
              type="text"
              name="name"
              id="name"
              className="code-payment"
              value="OIHWEFOIWHF"
            ></input>
          </section>
          <section className="booking-code">
            <p className="code-name">Booking code :</p> <br />
            <input
              type="text"
              name="name"
              id="name"
              className="code-payment"
              value="OIHWEFOIWHF"
            ></input>
          </section>
        </section>
        <section className="order-payment">
          <h3 className="title-order">DETAIL ORDER</h3>
          <section className="order-payment-detail">
            <section className="detail-order-payment">
              <section className="qty-order">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="qty-orderPayment"
                  value="Quantity: 2 bikes"
                ></input>
              </section>
              <section className="date-order">
                <textarea id="identity" name="identity" rows="4" cols="20" className="priceDetails">
                  Price details:
                  1 bike : Rp. 78.000
                  1 bike : Rp. 78.000
                </textarea>
              </section>
            </section>
            <section className="detail-order-payment-identity">
              <section className="price-order">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="date-payment"
                  value="Reservation Date: Jan 18 - 20 - 2021"
                ></input>
              </section>
              <section className="identity-order">
                <textarea id="identity" name="identity" rows="4" cols="20" className="detailIdentity">
                  Identity : Samantha Doe (+6290987682) samanthadoe@mail.com
                </textarea>
              </section>
            </section>
          </section>
        </section>
        <section className="payment-methods">
          <h3 className="paymentMethods">PAYMENT METHODS</h3>
          <section className="button-payment-methods">
            <section className="buttonTransfer">
              <button className="transfer">Transfer</button>
            </section>
            <section className="buttonCash">
              <button className="cash">Cash</button>
            </section>
          </section>
        </section>
        <section className="button-finish-payment">
          <button className="finish-payment">Finish Payment</button>
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

export default Payment;
