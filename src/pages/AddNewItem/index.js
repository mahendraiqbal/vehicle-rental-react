import React, { Component } from "react";
import Header from "../../components/layouts/Navbar/Navbar";
import Footer from "../../components/layouts/Footer/Footer";
import iconBack from "../../assets/back.png";
// import Counter from "../../components/layouts/Counter";
import "./AddNew.css";

class NewItem extends Component {
  render() {
    return (
      <main className="container">
        <Header />
        <section className="title-item">
          <img src={iconBack} alt="iconBack" className="back-add-item"></img>
          <h1 className="title-additem">Add new item</h1>
        </section>
        <section className="detail-add-item">
          <section className="image-add-item">
          </section>
          <section className="input-add-item">
            <input type="text" value="Name (max up to 50 words)" /> <br />
            <input type="text" value="Location" /> <br />
            <input type="text" value="Description (max up to 150 words)" />
            <p className="price-addItem">Price : </p>
            <input type="text" value="Type of price" />
            <p className="status-item">Status : </p>
            <select id="status" name="status" className="status-addItem">
              <option value="statusCek">Select Status</option>
              <option value="Available">Available</option>
              <option value="Full Booked">Full Booked</option>
            </select>
          </section>
        </section>
        <section className="button-addItem">
          <section>
            <select id="status" name="status" className="dropdown-addItem">
              <option>Choose Category</option>
              <option value="statusCek">Add Item to</option>
              <option value="Available">Available</option>
              <option value="Full Booked">Full Booked</option>
            </select>
          </section>
          <section className="button-save-addItem">
            <button>Save Item</button>
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
