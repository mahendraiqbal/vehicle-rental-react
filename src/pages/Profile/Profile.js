import React from "react";
// import { Button } from "react-bootstrap";
import axios from "axios";
import Navbar from "../../components/layouts/Navbar/Navbar";
import Footer from "../../components/layouts/Footer/Footer";
import ProfileImage from "../../assets/img-profile.png";
import "./Profile.css";

class Profile extends React.Component {
  componentDidMount() {
    const URL = "http://localhost:8080/profile"
    axios
      .get(URL)
      .then((response) => {
        console.log("RESPONSE", response);
      })
      .catch((error) => {
        console.log("ERROR", error);
      });
  }
  render() {
    return (
      <main className="container">
        <Navbar />
        <section className="info-profile">
          <img
            src={ProfileImage}
            className="image-profile"
            alt="ProfileImage"
          ></img>
          <p className="name-profile">Samantha Doe</p>
          <p className="text-profile">samanthadoe@mail.com</p>
          <p className="text-profile">+62833467823</p>
          <p className="text-profile">Has been active since 2013</p>
        </section>
        <section className="radio-button">
          <input type="radio" name="gender-select" id="male"></input>
          <label>Male</label>
          <input type="radio" name="gender-select" id="female"></input>
          <label>Female</label>
        </section>
        <section className="edit-profile">
          Contacts
          <div className="edit-email">
            <h5 className="title-edit">Email address :</h5>
            <input
              type="text"
              name="email"
              id="email"
              className="email-profile"              
            ></input>
          </div>
          <div className="edit-address">
            <h5 className="title-edit">Address :</h5>
            <input
              type="text"
              name="address"
              id="address"
              className="address"              
            ></input>
          </div>
          <div className="edit-number">
            <h5 className="title-edit">Mobile number:</h5>
            <input
              type="text"
              name="number"
              id="number"
              className="number"
            ></input>
          </div>
          <div className="header-text">
            Identity
            <div className="identity">
              <div className="display-name">
                <h5 className="title-edit">Display name:</h5>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="name-profile"
                ></input>
              </div>
              <div className="DoB">
                <div className="display-date">
                  <h5 className="title-edit">MM/DD/YY:</h5>
                  <input
                    type="date"
                    name="DoB"
                    id="DoB"
                    className="date-profile"
                  ></input>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="button-edit-profile">
          <button className="button-save">Save Change</button>
          <button className="edit-password">Edit Password</button>
          <button className="button-cancel">Cancel</button>
        </section>
        <Footer />
      </main>
    );
  }
}

export default Profile;
