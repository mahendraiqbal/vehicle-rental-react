import React, { Component } from "react";
import Header from "../../components/layouts/Navbar/Navbar";
import Footer from "../../components/layouts/Footer/Footer";
import iconBack from "../../assets/back.png";
// import Counter from "../../components/layouts/Counter";
import "./EditItem.css";

class EditItem extends Component {
  render() {
    return (
      <main className="container">
        <Header />
        <section className="title-item">
          <img src={iconBack} alt="iconBack" className="back-add-item"></img>
          <h1 className="title-additem">Edit item</h1>
        </section>
        <section className="detail-add-item">
          <section className="image-add-item"></section>
          <section className="input-add-item">
            <input
              value="Fixie - Gray Only"
              type="text"
              name="name"
              id="name"
              className="nameVehicle"
            ></input>
            <input
              value="Yogyakarta"
              type="text"
              name="name"
              id="name"
              className="locationVehicle"
            ></input> <br />
            <input
              value="Up to 1 person, return before 4 PM"
              type="text"
              name="name"
              id="name"
              className="descriptionVehicle"
            ></input>
            <p className="price-addItem">Price : </p>
            <input
              value="Rp. 78.000"
              type="text"
              name="name"
              id="name"
              className="priceVehicle"
            ></input>
            <p className="status-item">Status : </p>
            <select id="status" name="status" className="status-addItem">
              {/* <option value="statusCek">Select Status</option> */}
              <option value="Available">Available</option>
              <option value="Full Booked">Full Booked</option>
            </select>
          </section>
        </section>
        <section className="button-addItem">
          <section className="dropdownVehicle">
            <select id="status" name="status" className="dropdown-addItem">
              <option value="statusCek">Add Item to</option>
              <option value="Available">Available</option>
              <option value="Full Booked">Full Booked</option>
            </select>
          </section>
          <section className="button-save-addItem">
            <button className="saveAddItem">Save changes</button>
          </section>
          <section className="button-delete-addItem">
            <button className="deleteAddItem">Delete</button>
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

export default EditItem;