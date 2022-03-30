import React, { Component } from "react";
import { Link } from "react-router-dom";
import imageDefault from "../../../assets/205.jpg";

function cardBike(props) {
  const dataVehicle = props.dataVehicle;
  const card = [];

  for (let idx = 0; idx < dataVehicle.length; idx++) {
    console.log('cek data', dataVehicle[idx].images)
    // const images =
    //   dataVehicle[idx].images !== null
    //     ? `${process.env.REACT_APP_HOST}/images/vehicle/${JSON.parse(dataVehicle[idx][0])}`
    //     : require("../../../assets/205.jpg");
    const id = dataVehicle[idx].id;
    const brand = dataVehicle[idx].brand;
    const city = dataVehicle[idx].city;
    const element = (
      <div className="wrapper-cardVehicle" key={"cardMotorbike" + idx}>
        <Link to={`/detail/${id}`}>
          <img
            src={imageDefault}
            alt="imageCard"
            className="image-popularCard"
          ></img>
          <figcaption className="caption">
            <span className="figcaption-brand">{brand}</span>
            <span className="figcaption-city">{city}</span>
          </figcaption>
        </Link>
      </div>
    );
    card.push(element);
  }
  return card;
}

export default cardBike;
