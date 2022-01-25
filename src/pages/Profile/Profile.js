import React, { createRef } from "react";
// import { Button } from "react-bootstrap";
// import axios from "axios";
// import { Modal } from "react-bootstrap";
import { toast } from "react-toastify";

import { Link } from "react-router-dom";
import { usersProfile, editUsers } from "../../utils/https/users";
import Navbar from "../../components/layouts/Navbar/Navbar";
import Footer from "../../components/layouts/Footer/Footer";
// import ProfileImage from "../../assets/img-profile.png";
import iconEdit from "../../assets/edit-profile.png";
import "./Profile.css";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.target = createRef(null);
    // console.log(this.target)
    // console.log(this.state)
  }
  state = {
    userData: "",
    photoProfile: require("../../assets/man.png"),
    chooseGender: "",
    chooseFile: null,
  };

  getDataUser = () => {
    const image = localStorage.getItem("vehicle-rental-photo");
    const token = localStorage.getItem("vehicle-rental-token");

    usersProfile(token)
      .then((res) => {
        const moment = require("moment");
        let DoB = moment(res.data.result[0].DoB).format("YYYY-MM-DD");
        const result = { ...res.data.result[0], DoB };

        // console.log(res.data.result[0]);

        if (image === "null") {
          this.setState({
            photoProfile: process.env.REACT_APP_HOST + `$/{image}`,
          });
        }
        this.setState({
          userData: result,
          chooseGender: res.data.result[0].gender,
        });
        // console.log(result)
      })
      .catch((err) => console.error(err));
  };

  componentDidMount() {
    this.getDataUser();
  }

  genderChange = (e) => {
    this.setState({
      chooseGender: e.target.value,
    });
  };

  fileHandler = (e) => {
    // console.log(e.target.files[0]);
    const uploaded = e.target.files[0];
    this.setState({
      chooseFile: e.target.files[0],
      photoProfile: URL.createObjectURL(uploaded),
    });
  };

  submitHandler = (e) => {
    e.preventDefault();
    const body = new FormData();
    const token = this.props.token
    // console.log(body)
    if (this.state.chooseFile !== null) {
      body.append(
        "image",
        this.state.chooseFile,
        this.state.chooseFile.name,
      );
    }
    body.append("name", e.target.name.value);
    body.append("email", e.target.email.value);
    body.append("gender", this.state.chooseGender);
    body.append("address", e.target.address.value);
    body.append("contact", e.target.contact.value);
    body.append("DoB", e.target.DoB.value);

    editUsers(body, token)
    .then((res) => {
      console.log(body)
      const image = res.data.result.image;
      if (image !== null && typeof image !== "undefined") {
        localStorage.setItem("vehicle-rental-photo", image)
      }
      toast.success("Profile has been updated", {
        position: toast.POSITION.TOP_RIGHT,
      })
      this.getDataUser();
    })
    .catch((err) => console.error(err))
  };

  cancelHandler = (e) => {
    const image = this.state.userData.image;
    if (image !== null && typeof image !== "undefined") {
      this.setState({
        photoProfile: process.env.REACT_APP_HOST + `$/{image}`,
      });
    }
    this.setState({
      chooseGender: this.state.userData.gender,
    })
  }
  render() {
    const { name, email, DoB, address, contact } = this.state.userData;
    const { photoProfile, chooseGender } = this.state;
    let isMale = false;
    if (chooseGender === 1 || chooseGender === '1') isMale = true;
    // console.log(isMale)
    return (
      <main className="container">
        <Navbar />
        <section className="photoProfile">
          <img
            src={photoProfile}
            className="image-profile"
            alt="ProfileImage"
          />
          <img 
            src={iconEdit} 
            className="editProfile" 
            alt="editIcon" 
            onClick={() => this.target.current.click()}
          />
        </section>
        <section className="info-profile">
          <p className="name-profile">{name}</p>
          <p className="text-profile">{email}</p>
          <p className="text-profile">{contact}</p>
          <p className="text-profile">Has been active since 2013</p>
        </section>
        <section className="radio-button">
          <form>
          <input 
          type="radio" 
          name="gender-select" 
          id="male"
          defaultValue={1}
          checked={isMale}
          onChange={this.genderChange.bind(this)}
          />
          <label>Male</label>
          <input 
          type="radio" 
          name="gender-select" 
          id="female"
          defaultValue={2}
          checked={!isMale}
          onChange={this.genderChange.bind(this)}
          />
          <label>Female</label>
          </form>
        </section>
        <form 
          className="edit-profile"
          onSubmit={this.submitHandler}
          onReset={this.cancelHandler}
        >
          <input 
            type="file"
            onChange={this.fileHandler}
            ref={this.target}
            className="inputUpload"
          />

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
              name="contact"
              id="contact"
              className="contact"
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
        
        <section className="button-edit-profile">
          <button type="submit" className="button-save">Save Change</button>
          <Link to="/edit/password">
            <button className="edit-password">Edit Password</button>
          </Link>
          <button type="reset" className="button-cancel">Cancel</button>
        </section>
        </form>
        <Footer />
      </main>
    );
  }
}

export default Profile;
