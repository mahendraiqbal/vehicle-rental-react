import React, { Component } from "react";
// import { addVehicle } from "../../utils/https/vehicle";

import Header from "../../components/layouts/Navbar/Navbar";
import Footer from "../../components/layouts/Footer/Footer";
import iconBack from "../../assets/back.png";
// import Counter from "../../components/layouts/Counter";
import "./AddNew.css";

class NewItem extends Component {
  constructor(props) {
    super(props);
    this.inputFile1 = React.createRef();
    this.inputFile1 = React.createRef();
    this.inputFile1 = React.createRef();
  }

  render() {
    return (
      <main className="container">
        <Header />
        <section className="title-item">
          <img src={iconBack} alt="iconBack" className="back-add-item"></img>
          <h1 className="title-additem">Add new item</h1>
        </section>
        <section className="detail-add-item">
          <section className="image-add-item"></section>
          <section className="input-add-item">
            <input
              placeholder="Name (max up to 50 words)"
              type="text"
              name="name"
              id="name"
              className="nameVehicle"
            ></input>
            <input
              placeholder="Location"
              type="text"
              name="name"
              id="name"
              className="locationVehicle"
            ></input> <br />
            <input
              placeholder="Description (max up to 150 words)"
              type="text"
              name="name"
              id="name"
              className="descriptionVehicle"
            ></input>
            <p className="price-addItem">Price : </p>
            <input
              placeholder="Type the price"
              type="text"
              name="name"
              id="name"
              className="priceVehicle"
            ></input>
            <p className="status-item">Status : </p>
            <select id="status" name="status" className="status-addItem">
              <option value="statusCek">Select Status</option>
              <option value="Available">Available</option>
              <option value="Full Booked">Full Booked</option>
            </select>
          </section>
        </section>
        <section className="button-addItemVehicle">
          <section className="dropdownVehicle">
            <select id="status" name="status" className="dropdown-addItem">
              <option value="" disable="true" hidden>Add Item to</option>
              <option value="" className="choose-category" disabled>Choose Category</option>
              <option value="Car">Car</option>
              <option value="Motorbike">Motorbike</option>
              <option value="Bike">Bike</option>
            </select>
          </section>
          <section className="button-save-addItem">
            <button className="saveAddItem">Save Item</button>
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

export default NewItem;
