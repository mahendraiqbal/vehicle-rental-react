import React from "react";
import Header from "../../components/layouts/Navbar/Navbar";
import Footer from "../../components/layouts/Footer/Footer";
import { InputGroup, FormControl, Button, NavDropdown } from "react-bootstrap";
import "./history.css";

import image from "../../assets/image-van.jpeg";

function History() {
  return (
    <main>
      <Header />
      <section className="main-section-history">
        <section className="detail-history">
          <section className="button-searchHistory">
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Search vehicle (ex. cars, cars name)"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <Button variant="outline-secondary" id="button-addon2">
                <i className="fas fa-search"></i>
              </Button>
            </InputGroup>
            <NavDropdown title="Filter">
              <NavDropdown.Item href="#action/3.1">Type</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Data Added</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Name</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Favorite Product
              </NavDropdown.Item>
            </NavDropdown>
          </section>
          <section></section>
        </section>
        <section className="new-arrivalHistory">
          <p className="title-ImageHistory">New Arrival</p>
          <section className="imageHistoryFirstCard">
            <img
              src={image}
              alt="imageHistory"
              className="imageHistoryFirst"
            ></img>
            <figcaption className="nameVehicle">
              <span className="figcaption-brand">Lamborghini</span> <br />
              <span className="figcaption-city">South Jakarta</span>
            </figcaption>
          </section>
        </section>
      </section>
      <Footer />
    </main>
  );
}

export default History;
