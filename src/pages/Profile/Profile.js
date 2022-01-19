import React from "react";
// import { Button } from "react-bootstrap";
// import axios from "axios";

import { Link } from "react-router-dom";
import { usersProfile } from "../../utils/https/users";
import Navbar from "../../components/layouts/Navbar/Navbar";
import Footer from "../../components/layouts/Footer/Footer";
// import ProfileImage from "../../assets/img-profile.png";
import iconEdit from "../../assets/edit-profile.png";
import "./Profile.css";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.edit = React.createRef();
  }
  state = {
    userData: "",
    photoProfile: require("../../assets/man.png"),
  };

  getDataUser = () => {
    const image = localStorage.getItem("vehicle-rental-photo");

    usersProfile()
      .then((res) => {
        const moment = require("moment");
        let DoB = moment(res.data.result[0].DoB).format("YYYY-MM-DD");
        const result = { ...res.data.result[0], DoB };

        if (image === 'null') {
          this.setState({
            photoProfile: process.env.REACT_APP_HOST + `$/{image}`
          })
        }
        this.setState({
          userData: result,
        });
      })
      .catch((err) => console.error(err));
  };

  componentDidMount() {
    this.getDataUser();
  }
  render() {
    const { name, email, DoB, address, contact } = this.state.userData;
    const { photoProfile } = this.state
    return (
      <main className="container">
        <Navbar />
        <section className="container-fluid photoProfile">
          <img
            src={photoProfile}
            className="image-profile"
            alt="ProfileImage"
          />
          <img src={iconEdit} className="editProfile" alt="edit icon" />
        </section>
        <section className="info-profile">
          <p className="name-profile">{name}</p>
          <p className="text-profile">{email}</p>
          <p className="text-profile">{contact}</p>
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
              defaultValue={email}
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
              defaultValue={address}
            ></input>
          </div>
          <div className="edit-number">
            <h5 className="title-edit">Mobile number:</h5>
            <input
              type="text"
              name="number"
              id="number"
              className="number"
              defaultValue={contact}
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
                  className="name-profile-input"
                  defaultValue={name}
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
                    defaultValue={DoB}
                  ></input>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="button-edit-profile">
          <button className="button-save">Save Change</button>
          <Link to="/editPassword">
            <button className="edit-password">Edit Password</button>
          </Link>
          <button className="button-cancel">Cancel</button>
        </section>
        <Footer />
      </main>
    );
  }
}

export default Profile;
