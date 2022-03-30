import React from "react";
import "./Home.css";
import { connect } from "react-redux";
import { popular } from "../../utils/https/vehicle";
import { Link } from "react-router-dom";

import stars from "../../assets/star.png";
// import circle from "../../assets/circle.png";
// import plus from "../../assets/plus.png";
import person from "../../assets/image-person.png";
// import imageDefault from "../../assets/205.jpg";
import Card from "../../components/layouts/Card/Card";
import Footer from "../../components/layouts/Footer/Footer";
// import { Redirect } from "react-router-dom";
import Header from "../../components/layouts/Navbar/Navbar";
// import index from "../Detail";

class Home extends React.Component {
  state = {
    dataVehicle: [],
  };
  componentDidMount() {
    popular()
      .then((res) => {
        console.log("RESPONSE", res.data.result);
        this.setState({
          dataVehicle: res.data.result[3],
        });
      })
      .catch((err) => console.error(err));
  }
  render() {
    // const { brand, city } = this.state;
    const roles = this.props.auth.userData.roles_id;
    return (
      <main>
        <Header />
        <section className="container-1">
          <div className="form">
            <div>
              <h1 className="title-home">
                Explore <br />
                and Travel
              </h1>
            </div>
            <div>
              <h2>
                Vehicle Finder
                <br />
                <hr className="vehicle-jumbotron" />
              </h2>
            </div>
            <div className="option-form">
              <select id="cars" name="cars" className="location">
                <option value="location">Location</option>
                <option value="jakarta">Jakarta</option>
                <option value="kalimantan">Kalimantan</option>
                <option value="bali">Bali</option>
              </select>
              <select id="type" name="type" className="type">
                <option value="type">Type</option>
                <option value="car">Car</option>
                <option value="motorbike">Motorbike</option>
                <option value="bike">Bike</option>
              </select>
            </div>
            <div className="option-form">
              <select id="payment" name="payment" className="payment">
                <option value="volvo">Payment</option>
                <option value="transfer">Transfer</option>
                <option value="cash">Cash</option>
              </select>
              <input type="date" name="DoB" id="DoB" className="date"></input>
            </div>
            <div className="button-titleHome">
              <button type="button" className="button-explore">
                Explore
              </button>
            </div>
          </div>
        </section>
        <section className="popular">
          <h3>Popular in town</h3>
          <div className="card-popular">
            <Card />
          </div>
        </section>
        {roles === 3 && (
          <Link to="/vehicle/add">
            <button className="btn btn-dark text-warning add-vehicle w-100 mt-4 mb-4">
              Add vehicle
            </button>
          </Link>
        )}
        <section>
          <div className="testimonials">
            <div>
              <h3>Testimonials</h3>
            </div>
          </div>
          <div className="testimoni">
            <div>
              <br />
              <br />
              <br />
              <div>
                <img src={stars} className="icon-stars" alt="icon stars" />
                <img src={stars} className="icon-stars" alt="icon stars" />
                <img src={stars} className="icon-stars" alt="icon stars" />
                <img src={stars} className="icon-stars" alt="icon stars" />
                <img src={stars} className="icon-stars" alt="icon stars" />
              </div>
              <p>
                ""It was the right decision to rent vehicle <br /> here, I spent
                less money and enjoy the <br /> trip. It was an amazing
                experience to <br /> have a ride for wildlife trip!”{" "}
              </p>{" "}
              <br />
              <h4 className="founder">Edward Newgate</h4>
              <h5 className="founder-2">Founder Circle</h5>
            </div>
            <div>
              {/* <img src={plus} className="plus" alt="plus"></img> */}
              <img src={person} className="img-person" alt="imagePerson"></img>
              {/* <img src={circle} className="circle" alt="circle"></img> */}
            </div>
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

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};
const HomeRedux = connect(mapStateToProps)(Home);

// export default Home;

export default HomeRedux;
