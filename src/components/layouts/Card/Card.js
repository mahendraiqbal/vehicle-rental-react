import React from "react";
import axios from "axios";
// import imageVan from "../../../assets/image-van.jpeg"

class Card extends React.Component {
    state = {
        data: {},
        isSuccess: false,
    };
    componentDidMount() {
        // const { match } = this.props;
        const URL = "http://localhost:8080/vehicles";
        axios
        .get(URL)
        .then((response) => {
            this.setState({ data: response.data, isSuccess: true});
            console.log(response.data.result.data)
        })
        .catch((error) => {
            console.error("ERROR", error);
        })
    }
  render() {
      // const { match } = this.props;
      const { data: vehicle } = this.state
    return (
      <main>
          <section>
            <img src={vehicle.image}  alt="image_vehicle" />
            <h3>{vehicle.name}</h3>
          </section>
          Detail
      </main>
      
    );
  }
}

export default Card;
