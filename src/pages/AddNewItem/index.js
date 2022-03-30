import React, { Component } from "react";
import { addVehicle } from "../../utils/https/vehicle";
import { connect } from "react-redux";

import Header from "../../components/layouts/Navbar/Navbar";
import Footer from "../../components/layouts/Footer/Footer";
import iconBack from "../../assets/back.png";
// import Counter from "../../components/layouts/Counter";
import "./AddNew.css";
import { toast } from "react-toastify";
import axios from "axios";

class NewItem extends Component {
  constructor(props) {
    // console.log('ini apa', props.token)
    super(props);
    this.state = {
      counter: 1,
      name: "",
      price: "",
      image: "",
      location: "",
      type: "",
      description: "",
      result: [],
    };
    this.inputFile = React.createRef();
  }

  addCounter = () => {
    const newCounter = this.state.counter;
    this.setState({
      counter: newCounter + 1,
    });
  };

  subCounter = () => {
    const newCounter = this.state.counter;
    this.setState({
      counter: newCounter - 1 < 1 ? 1 : newCounter - 1,
    });
  };

  handleFile = (event) => {
    this.inputFile.current.click();
    event.preventDefault();
  };

  formChange = (e) => {
    const data = { ...this.state };
    data[e.target.name] = e.target.value;
    this.setState(data);
  };

  fileChange = (event) => {
    const file = event.target.files[0];
    const data = { ...this.state };
    if (file) {
      data.image = file;
      this.setState(data);
    }
    event.preventDefault();
  }

  submitHandler = () => {
    const body = new FormData();
    body.append("brand", this.state.name);
    body.append("price", this.state.price);
    body.append("type", this.state.type);
    body.append("city", this.state.location);
    body.append("qty", this.state.counter);
    body.append("images", this.state.image);
    body.append("description", this.state.description);
    return body;
  };

  postVehicle = (e) => {
    console.log("apa isinye", this.state);
    const body = this.submitHandler();
    const url = process.env.REACT_APP_HOST + "/vehicles";
    // console.log('url benar?', url)
    const token = this.props.token;
    // console.log('masuk token', token)
    axios({
      url: url,
      method: "POST",
      data: body,
      headers: { "content-type": "multipart/form-data", "x-access-token": token},
    })
      .then((res) => {
        console.log("cek res", res);
        this.setState({ res: res.data.result.id });
        this.props.history.push(`/detail/${this.state.res}`);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  render() {
    return (
      <main className="container">
        <Header />
        <section className="title-item">
          <img src={iconBack} alt="iconBack" className="back-add-item"></img>
          <h1 className="title-additem">Add new item</h1>
        </section>
        <section className="detail-add-itemVehicle">
          <section className="image-add-item">
            <input
              type="file"
              name="image"
              hidden
              onChange={this.fileChange}
              ref={this.inputFile}
            />
            <button className="add" onClick={this.handleFile} />
          </section>
          <section className="input-add-item">
            <input
              placeholder="Name (max up to 50 words)"
              type="text"
              name="name"
              id="name"
              className="nameVehicle"
              onChange={this.formChange}
            ></input>
            <input
              placeholder="Location"
              type="text"
              name="location"
              id="name"
              className="locationVehicle"
              onChange={this.formChange}
            ></input>{" "}
            <br />
            <input
              placeholder="Description (max up to 150 words)"
              type="text"
              name="description"
              id="name"
              className="descriptionVehicle"
              onChange={this.formChange}
            ></input>
            <p className="price-addItem">Price : </p>
            <input
              placeholder="Type the price"
              type="text"
              name="price"
              id="name"
              className="priceVehicle"
              onChange={this.formChange}
            ></input>
            <p className="status-item">Status : </p>
            <select id="status" name="status" className="status-addItem">
              <option value="statusCek">Select Status</option>
              <option value="Available">Available</option>
              <option value="Full Booked">Full Booked</option>
            </select>
            <div className="stock-vehicle mt-5 d-flex">
              <p>Stock :</p>
              <div className="counter-container mx-auto d-flex align-items-center">
                <div
                  className="btn sub-stock d-flex align-items-center"
                  onClick={this.subCounter}
                >
                  -
                </div>
                <div className="number-stock mx-5">{this.state.counter}</div>
                <div
                  className="btn add-stock d-flex align-items-center"
                  onClick={this.addCounter}
                >
                  +
                </div>
              </div>
            </div>
          </section>
        </section>
        <section className="button-addItemVehicle">
          <section className="dropdownVehicle">
            <select id="status" name="type" className="dropdown-addItem" onChange={this.formChange}>
              <option value="" disable="true" hidden>
                Add Item to
              </option>
              <option value="" className="choose-category" disabled>
                Choose Category
              </option>
              <option value="Car">Car</option>
              <option value="Motorbike">Motorbike</option>
              <option value="Bike">Bike</option>
            </select>
          </section>
          <section className="button-save-addItem">
            <button className="saveAddItem" onClick={this.postVehicle}>
              Save Item
            </button>
          </section>
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
  // console.log(state.auth.userData.token)
  return {
    token: state.auth.userData.token,
  };
};

export default connect(mapStateToProps)(NewItem);
