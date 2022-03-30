import React, { Component } from "react";
import Header from "../../components/layouts/Navbar/Navbar";
import Footer from "../../components/layouts/Footer/Footer";
import iconBack from "../../assets/back.png";
// import imageBike from "../../assets/image-bike-pixie.jpeg";
import "./Payment.css";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import {usersProfile} from '../../utils/https/users'
import {reservation} from '../../utils/https/reservation'

class Payment extends Component {
  transactionData = this.props.location.state

  state = {
    userData: {},
  }

  copyBooking = (bookingCode) => {
    navigator.clipboard.writeText(bookingCode);
    toast.success("Bookinf code copied", {
      position: "top-right",
      autoClose: 2000,
    });
  };

  copyPayment = (paymentCode) => {
    navigator.clipboard.writeText(paymentCode);
    toast.success("Payment code copied" , {
      position: "top-right",
      autoClose: 2000,
    });
  };

  getDataUser = () => {
    const token = this.props.user.token;
    
    usersProfile(token)
      .then((res) => {
        console.log('apapaw', res)
        const data = res.data.result[0];
        this.setState({
          userData: data,
        });
      })
      .catch((err) => console.log(err.response))
  };

  componentDidMount() {
    this.getDataUser();
  }

  finishTransaction = () => {
    const token = this.props.user.token;

    const { counter, payment  } = this.transactionData;
    // const moment = require("moment");
    // let date = moment(dateReservation).format("YYYY-MM-DD");

    // let dateSome = new Date(date);
    // dateSome.setDate(
    //   dateSome.getDate() + parseInt(this.transactionData.durationRental)
    // );
    // let formatDate = dateSome.toISOString().slice(0, 10);

    const body = {
      user_id: this.state.userData.id,
      vehicle_id: this.transactionData.dataTransaction.id,
      quantity: counter,
      price: payment,
      // start_date: date,
      // return_date: formatDate,
    };
    reservation(body, token)
    .then((res) => {
      console.log(res)
      toast.success("Payment Success", {
        position: "top-right",
        autoClose: 3000,
      });
      this.props.history.push("/history");
    })
    .catch((err) => {
      console.log(err.response)
    })
  }
  render() {
    console.log(this.props.location.state)
    console.log('ini mnas',this.props.user)
    console.log('cekcek', this.transactionData.dataTransaction)
    console.log('cekcabistuek', this.transactionData)
    console.log('userData', this.state.userData)

    //  const moment = require("moment");
    // console.log('transaction', this.transactionData)
    const { name, city, type } = this.transactionData.dataTransaction;
    const { counter } = this.transactionData;
    // const bookingCode = "#FG12009878YZS";
    // const paymentCode = "#FG22009879YZS";
    return (
      <main>
        <Header />
        <section className="title-payment">
          <img src={iconBack} alt="iconBack" className="back-payment"></img>
          <h1 className="title-payment">Payment</h1>
        </section>
        <section className="jumbotron-payment">
          <section className="info-payment">
            <h1 className="brand-payment-title">{name}</h1>
            <h2 className="city-payment">{city}</h2>
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
                <p>
                  Quantity: {counter} {type}
                </p>
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
                <p>Identity:</p>
                <p>
                  {this.state.userData.name} (
                    {this.state.userData.contact !== null ? this.state.userData.contact : ""}
                  )
                  </p>
                  <p>{this.state.userData.email}</p>
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
          <button className="finish-payment" onClick={this.finishTransaction}>Finish Payment</button>
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

const mapStateToProps = (state) => {
  console.log(state.auth.userData)
  return {
    user: state.auth.userData,
  };
};

export default connect(mapStateToProps)(Payment);
