import React from "react";
import axios from "axios";

class Card extends React.Component {
    state = {
        data: {},
        isSuccess: false,
    };
    componentDidMount() {
        const { match } = this.props;
        const URL = "http://localhost:8080/vehicles";
        axios
        .get(URL)
        .then((response) => {
            this.setState({ data: response.data, isSuccess: true});
        })
        .catch((error) => {
            console.error("ERROR", error);
        })
    }
  render() {
      const { match } = this.props;
      const { data: vehicle, isSuccess } = this.state
    return (
      <main>
          {isSuccess ? (
          <section>
            <img src={vehicle.image}  alt="image_vehicle" />
            <h3>{vehicle.name}</h3>
          </section>
          ): (
              <p>Fetching</p>
          )}
          Detail
      </main>
      // <div class="vehicles-list">
      //     <div>
      //         <img src="assets/img/image-van.jpeg" class="img-van-1" alt="image van 1"/>
      //         <figcaption>
      //             <span class="figcaption-tour">Merapi</span> <br/>
      //             <span class="figcaption-location">Yogyakarta</span>
      //         </figcaption>
      //     </div>
      //     <div>
      //         <img src="assets/img/motorbike.jpeg" class="img-motorbike-1" alt="image motorbike 1"/>
      //         <figcaption>
      //             <span class="figcaption-tour">Teluk Bogam</span> <br/>
      //             <span class="figcaption-location">Kalimantan</span>
      //         </figcaption>
      //     </div>
      //     <div>
      //         <img src="assets/img/car-van2.jpeg" class="img-van-2" alt="image van 2"/>
      //         <figcaption>
      //             <span class="figcaption-tour">Bromo</span> <br/>
      //             <span class="figcaption-location">Malang</span>
      //         </figcaption>
      //     </div>
      //     <div>
      //         <img src="assets/img/motorbike2.jpeg" class="img-motorbike-2" alt="image motorbike 2"/>
      //         <figcaption>
      //             <span class="figcaption-tour">Malioboro</span> <br/>
      //             <span class="figcaption-location">Yogyakarta</span>
      //         </figcaption>
      //     </div>
      // </div>
    );
  }
}

export default Card;
