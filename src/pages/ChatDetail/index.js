import React from "react";
import "./chatDetail.css";
import Header from "../../components/layouts/Navbar/Navbar";
import Footer from "../../components/layouts/Footer/Footer";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import iconBack from "../../assets/back.png";
import userImage from "../../assets/img-profile.png";
import bike from "../../assets/image-bike-pixie.jpeg";

function index() {
  return (
    <main>
      <Header />
      <section className="title-ChatDetail">
        <img src={iconBack} alt="iconBack" className="back-chatDetail"></img>
        <img src={userImage} alt="userImage" className="userImageChat"></img>
        <h1 className="title-chatDetailUser">Rental 1</h1>
      </section>
      <section className="chat-image">
        <img src={bike} alt="chatImage" className="chatImage"></img>
        <section className="detail-chat">
          <p className="brand-rental">Fixie - Gray Only</p>
          <p>Yogyakarta</p>
          <p>Available</p>
        </section>
        <p className="total">Rp. 78.000/day</p>
      </section>
      <section className="firstChat">
        <p></p>
        <section className="chatUserFirst">
          <p className="chatFirst">How Many bike left</p>
          <p className="timeChat"> Read [12.30 PM]</p>
        </section>
      </section>
      <section className="customerChat">
        <section className="chatUserCustomer">
          <p className="chatCustomer">We only have 2 bikes left</p>
          <p className="timeChatCustomer"> Read [12.30 PM]</p>
        </section>
      </section>
      <section className="inputChat">
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Type a message"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <Button variant="outline-secondary" id="button-addon2">
            Button
          </Button>
        </InputGroup>
      </section>
      <Footer />
    </main>
  );
}

export default index;
