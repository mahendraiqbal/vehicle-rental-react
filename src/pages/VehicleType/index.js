import React from "react";
import axios from "axios";

// import { popular } from "../../utils/https/vehicle"
import { allVehicle, popular } from "../../utils/https/vehicle"

// import { Link } from "react-router-dom";
// import imageDefault from "../../assets/205.jpg";

import Header from "../../components/layouts/Navbar/Navbar";
import Footer from "../../components/layouts/Footer/Footer";
import CardPopular from "../../components/layouts/Card/Card";
import CardCars from "../../components/layouts/Card/cardCars";
import CardBike from "../../components/layouts/Card/cardBike";
import CardMotorbike from "../../components/layouts/Card/cardMotorbike";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import "./index.css";

// const array = [1, 4, 9, 16]

class VehicleType extends React.Component {
  state = {
    dataVehicle: [],
    vehiclePopular: [],
    dataCars: [],
    dataMotorbikes: [],
    dataBikes: [],
  }

  componentDidMount() {
    allVehicle()
    .then(
      axios.spread((...res) => {
        console.log()
        this.setState({
          vehiclePopular: res[0].data.result,
          dataCars: res[1].data.result.data[0],
          dataMotorbikes: res[2].data.result.data,
          dataBikes: res[3].data.result.data,
        })
      })
    )
    .catch((err) => console.error(err))

    popular()
      .then((res) => {
        // console.log("RESPONSE", res.data.result);
        this.setState({
          dataVehicle: res.data.result[3],
        });
      })
      .catch((err) => console.error(err));
  }
  render() {
    // const { image } = this.state.vehicleData;
    // const { brand, city } = this.state.dataVehicle;
    // const { brandCar, cityCar } = this.state.dataCars;
    return (
      <main>
        <Header />
        {/* <Card /> */}
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
        <section className="main-title-popular">
          <div className="title-vehicle-type">Popular in town</div>
          <div className="button-vehicle-type">
            <button className="viewAll">View All ></button>
          </div>
          <section className="card-vehicletype">
           <CardPopular />
          </section>
        </section>
        <section className="main-title-car">
          <div className="title-vehicle-type">Cars</div>
          <div className="button-vehicle-type">
            <button className="viewAll">View All ></button>
          </div>
          <section className="card-vehicletype">
          <CardCars />
          </section>
        </section>
        <section className="main-title-motorbike">
          <div className="title-vehicle-type">Motorbike</div>
          <div className="button-vehicle-type">
            <button className="viewAll">View All ></button>
          </div>
          <section className="card-vehicletype">
            <CardMotorbike />
          </section>
        </section>
        <section className="main-title-bike">
          <div className="title-vehicle-type">Bike</div>
          <div className="button-vehicle-type">
            <button className="viewAll">View All ></button>
          </div>
          <section className="card-vehicletype">
            <CardBike />
          </section>
        </section>
        <Footer />
      </main>
    );
  }
}

export default VehicleType;
