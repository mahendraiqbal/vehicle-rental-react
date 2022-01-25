import React from "react";
import Header from "../../components/layouts/Navbar/Navbar";
import Counter from "../../components/layouts/Counter";
import "./viewMoreDetail.css";
import Footer from "../../components/layouts/Footer/Footer";
import { Link } from "react-router-dom";

import buttonback from "../../assets/back.png";
import bike from "../../assets/image-bike-pixie.jpeg";
import back from "../../assets/back2.png";
import next from "../../assets/next.png";

class index extends React.Component {
  state = {
    counter: 0,
    dataVehicle: "",
    imgVehicle1: require("../../assets/205.jpg"),
    imgVehicle2: require("../../assets/205.jpg"),
    imgVehicle3: require("../../assets/205.jpg"),
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
  componentDidMount() {
    // const { match } = this.props;
    // const vehicleId = match.params.id;
  }
  render() {
    // console.log(this.state)
    return (
      <main className="container">
        <Header />
        <section className="info-detail">
          <section className="title-item">
            <img
              src={buttonback}
              alt="iconBack"
              className="back-add-item"
            ></img>
            <h1 className="title-additem">Detail</h1>
          </section>
          <div className="detail">
            <div className="image">
              <div className="primary-image">
                <img src={bike} alt="imagebike" className="img-bike"></img>
              </div>
              <div className="sub-image">
                <div className="button-back">
                  <button className="back-detail">
                    <img src={back} alt="back" className="back"></img>
                  </button>
                </div>
                <div className="sub-image-1">
                  <img
                    src={bike}
                    alt="imagesubbike1"
                    className="sub-image-1"
                  ></img>
                </div>
                <div className="sub-image-2">
                  <img
                    src={bike}
                    alt="imagesubbike2"
                    className="sub-image-2"
                  ></img>
                </div>
                <div className="button-next">
                  <button className="next-detail">
                    <img src={next} alt="next" className="next"></img>
                  </button>
                </div>
              </div>
            </div>
            <div className="detail-vehicle">
              <div className="main-detail">
                <h2>Fixie - Gray Only</h2>
                <h3>Yogyakarta</h3>
                <h4>Available</h4>
                <h5>No prepayment</h5>
                <p>Capacity: 1 person</p>
                <p>Type: Bike</p>
                <p>Reservation before 2 PM</p>
              </div>
              <div className="price">
                <div className="empty"></div>
                <div className="price-vehicle">Rp 78.000/day</div>
              </div>
              <div className="button-price">
                <Counter
                  onClickPrev={this.onClickPrevious}
                  onClickNext={this.onClickNextCounter}
                  counterTotal={this.state.counter}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="button">
          <div className="button-chat">
            <button type="button" className="button-chat">
              Chat Admin
            </button>
          </div>
          <div className="button-reservation">
            <Link to="/reservation">
              <button type="button" className="button-reservation">
                Reservation
              </button>
            </Link>
          </div>
          <div className="button-like">
            <button type="button" className="button-like">
              Like
            </button>
          </div>
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
