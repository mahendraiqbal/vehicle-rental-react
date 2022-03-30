import React, { Component } from 'react';
import { Link } from "react-router-dom";
import imageDefault from "../../../assets/205.jpg";

function cardCars(props) {
  console.log('data props', props)
  const dataVehicle = props.dataVehicle;
  const card = [];

  for (let idx = 0; idx < dataVehicle.length; idx++) {
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

export default cardCars;