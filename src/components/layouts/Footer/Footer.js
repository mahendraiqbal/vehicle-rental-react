import React from "react";
import icon from "../../../assets/icon.png";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-rental">
      <div className="item1">
        <img src={icon} alt="icon" className="icon-rental-footer"></img> <br />
        Plan and book your perfect trip with <br />
        expert advice, travel tips for vehicle <br />
        information from us <br /> <br /> ©2020 Vehicle Rental Center. All
        rights reserved
      </div>
      <div className="destination">
        Destination
        <ul>
          <li>Bali</li>
          <li>Yogyakarta</li>
          <li>Jakarta</li>
          <li>Kalimantan</li>
          <li>Malang</li>
        </ul>
      </div>
      <div className="vehicle">
        Vehicle
        <ul>
          <li>Bike</li>
          <li>Cars</li>
          <li>Motorbike</li>
          <li>Return Times</li>
          <li>FAQs</li>
        </ul>
      </div>
      <div className="interest">
        Interest
        <ul>
          <li>Adventure Travel</li>
          <li>Art And Culture</li>
          <li>Wildlife And Nature</li>
          <li>Family Holidays</li>
          <li>Culinary Trip</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
