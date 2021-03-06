import React, { Component } from 'react';
import { popular } from "../../../utils/https/vehicle";
import { Link } from "react-router-dom";
import imageDefault from "../../../assets/205.jpg";
import "./Card.css"


class cardPopular extends Component {
  state = {
    dataVehicle: []
  }
  componentDidMount() {
    popular()
    .then((res) => {
      // console.log(res.data.result)
      const dataVehicle = res.data.result
      this.setState({
        dataVehicle: dataVehicle
      })
      // console.log(dataVehicle)
    }).catch((err) => console.error(err))
  }
  render() {
    const { dataVehicle } = this.state
    return (
      <>
        {dataVehicle.map((dataVehicle) => (
          <>
             <Link to="/detail">
              <img
                src={imageDefault}
                alt="imageCard"
                className="image-popularCard"
              ></img>
              <figcaption className="caption">
                <span className="figcaption-brand">{dataVehicle.brand}</span>
                <span className="figcaption-city">{dataVehicle.city}</span>
              </figcaption>
              </Link>
          </>
        ))}
      </>
    )
  }
}

export default cardPopular;