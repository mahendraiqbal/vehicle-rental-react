import React from "react";
// import { popular } from "../../utils/https/vehicle"
import { vehicle } from "../../utils/https/vehicle"

import Header from "../../components/layouts/Navbar/Navbar";
import Footer from "../../components/layouts/Footer/Footer";
// import Card from "../../components/layouts/Card/Card";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import "./index.css";

class VehicleType extends React.Component {
  state = {
    vehicleData: [],
  }

  componentDidMount() {
    vehicle()
    .then((res) => {
      console.log("RESPONSE", res.data.result.data)
      this.setState({
        vehicleData: res.data.result.data[27],
      })
    })
    .catch((err) => console.error(err))
  }
  render() {
    const { image } = this.state.vehicleData;
    return (
      <main>
        <Header />
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
        <section className="main-title">
          <div className="title-vehicle-type">Popular in town</div>
          <div className="button-vehicle-type">
            <button className="viewAll">View All ></button>
          </div>
          <section className="card-vehicletype">
           <div className="gambarCoba">{image}</div>
          </section>
        </section>
        <section className="main-title">
          <div className="title-vehicle-type">Cars</div>
          <div className="button-vehicle-type">
            <button className="viewAll">View All ></button>
          </div>
          <section className="card-vehicletype">
          
          </section>
        </section>
        <section className="main-title">
          <div className="title-vehicle-type">Motorbike</div>
          <div className="button-vehicle-type">
            <button className="viewAll">View All ></button>
          </div>
          <section className="card-vehicletype">
            
          </section>
        </section>
        <section className="main-title">
          <div className="title-vehicle-type">Bike</div>
          <div className="button-vehicle-type">
            <button className="viewAll">View All ></button>
          </div>
          <section className="card-vehicletype">
            
          </section>
        </section>
        <Footer />
      </main>
    );
  }
}

export default VehicleType;
