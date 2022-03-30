import React, { useState } from "react";
import Header from "../../components/layouts/Navbar/Navbar";
import Footer from "../../components/layouts/Footer/Footer";
import iconBack from "../../assets/back.png";
import imageBike from "../../assets/image-bike-pixie.jpeg";
import Counter from "../../components/layouts/Counter";
import { Link } from "react-router-dom";
import "./reservation.css";

class index extends React.Component {
  dataVehicle = this.props.location.state;

  state = {
    counter: this.dataVehicle.counter,
    payment: null,
    day: null,
    durationRental: 1,
    dataTransaction: null,
    dateReservation: null,
  };
  onClickPrevious = () => {
    const total = this.dataVehicle.counter;
    const price = this.dataVehicle.price;
    const duration = this.state.durationRental;

    this.setState({
      counter: total - 1 < 1 ? 1 : total - 1,
      total: (total - 1 < 1 ? 1 : total - 1) * price * duration,
    });
  };
  onClickNextCounter = () => {
    const total = this.state.counter;
    const price = this.dataVehicle.price;
    const duration = this.state.durationRental;
    this.setState({
      counter: total + 1,
      total: (total + 1) * price * duration,
    });
  };

  durationChange = (e) => {
    const newCounter = this.state.counter;
    const price = this.state.dataTransaction.price;
    const duration = e.target.value;
    this.setState({
      durationRental: duration,
      payment: newCounter * price * duration,
    });
  };

  handleChange = (e) => {
    const date = e.target.value;
    this.setState({
      dateReservation: date,
    });
  };

  componentDidMount() {
    const data = this.dataVehicle.dataVehicle;
    const total = this.dataVehicle.counter;
    const payment = total * data.price;

    this.setState({
      payment: payment,
      dataTransaction: data,
      total,
    });
  }
  render() {
    console.log(this.props.location.state);
    console.log("ini apa", this.dataVehicle);
    const ref = React.createRef();
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
            <h3 className="brand-reservation-title">
              {this.dataVehicle.dataVehicle.name}
            </h3>
            <h3 className="city-reservation-title">
              {this.dataVehicle.dataVehicle.city}
            </h3>
            <p className="prepayment-reservation">No Prepayment</p>
            <section className="counter-Reservation">
              <button onClick={this.onClickPrevious} className="button-minus">
                -
              </button>
              <p className="counterReservation">{this.state.total}</p>
              <button onClick={this.onClickNextCounter} className="button-plus">
                +
              </button>
            </section>
            <p className="reservation-date">Reservasion Date</p>
            <input
              className="selectDate"
              type="date"
              onChange={this.handleChange}
              name="date"
              ref={ref}
            />{" "}
            <br />
            <select id="day" name="duration" onChange={this.durationChange} className="day-reservation">
              <option value="1">1 Day</option>
              <option value="2">2 Day</option>
              <option value="3">3 Day</option>
              <option value="4">4 Day</option>
            </select>
          </section>
        </section>
        <section className="button-pay-reservation">
          <Link to={{
            pathname: "/payment",
            state: {
              dataTransaction: this.state.dataTransaction,
              counter: this.state.counter,
              payment: this.state.payment,
              durationRental: this.state.durationRental,
              dateReservation: this.state.dateReservation,
            }
          }}>
            <button className="button-reservation-pay">
              Pay now : Rp. {this.state.payment}
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

// function Reservation(props) {
//   console.log('ini props', props)
//   const [counter, setCounter] = useState(1);

//   const brand = props.location.state.dataVehicle.brand;
//   const city = props.location.state.dataVehicle.city;

//   const addCounter = () => {
//     const newCounter = counter + 1;
//     setCounter(newCounter);
//   };
//   const subCounter = () => {
//     const newCounter = counter - 1 < 0 ? 0 : counter - 1;
//     setCounter(newCounter);
//   };

//   return (
//     <main>
//         <Header />
//         <section className="title-reservation">
//           <img src={iconBack} alt="iconBack" className="back-reservation"></img>
//           <h1 className="title-reservation">Reservation</h1>
//         </section>
//         <section className="detail-reservation">
//           <section className="image-reservation">
//             <img
//               src={imageBike}
//               alt="imageBike"
//               className="image-reservation"
//             ></img>
//           </section>
//           <section className="detail-reservation-info">
//             <h2 className="brandVehicle">{brand}</h2>
//             <h3 className="city-reservation-title">{city}</h3>
//             <p className="prepayment-reservation">No Prepayment</p>
//             <section className="counter-Reservation">
//               <button onClick={subCounter} className="button-minus">-</button>
//               <p className="counterReservation">{counter}</p>
//               <button onClick={addCounter} className="button-plus">+</button>
//             </section>
//             <p className="reservation-date">Reservasion Date</p>
//             <input className="selectDate" type="date" /> <br />
//             <select id="day" name="day" className="day-reservation">
//               <option value="1">1 Day</option>
//               <option value="2">2 Day</option>
//               <option value="3">3 Day</option>
//               <option value="4">4 Day</option>
//             </select>
//           </section>
//         </section>
//         <section className="button-pay-reservation">
//           <Link to="/payment">
//             <button className="button-reservation-pay">
//               Pay now : Rp. 178.000
//             </button>
//           </Link>
//         </section>
//         <Footer />
//         <hr />
//         <div className="icon-footer">
//           <i className="fab fa-twitter"></i>
//           <i className="fab fa-facebook-f"></i>
//           <i className="fab fa-instagram"></i>
//           <i className="fab fa-linkedin-in"></i>
//           <i className="fab fa-youtube"></i>
//         </div>
//       </main>
//   )
// }

// export default Reservation;
