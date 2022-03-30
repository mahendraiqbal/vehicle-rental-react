// import React, { Component } from 'react';
// import { allVehicle } from "../../../utils/https/vehicle";
// import { Link } from "react-router-dom";
// import imageDefault from "../../../assets/205.jpg";

// class cardMotorbike extends Component {
//   state = {
//     dataVehicle: []
//   }
//   componentDidMount() {
//     allVehicle()
//     .then((res) => {
//       // console.log(res)
//       const dataVehicle = res[2].data.result.data
//       const image = process.env.REACT_APP_HOST + `/images/vehicle/${JSON.parse(dataVehicle[0].images)[0]}`
//       // console.log('apa image', image);
//       this.setState({
//         dataVehicle: dataVehicle,
//         images: image,
//       })
//       console.log(dataVehicle)
//     }).catch((err) => console.error(err));
//   };

//   render() {
//     const { dataVehicle, images } = this.state
//     return (
//       <>
//         {dataVehicle.map((dataVehicle) => (
//           <>
//              <Link to="/detail">
//               <img
//                 src={images}
//                 alt="imageCard"
//                 className="image-popularCard"
//               ></img>
//               <figcaption className="caption">
//                 <span className="figcaption-brand">{dataVehicle.brand}</span>
//                 <span className="figcaption-city">{dataVehicle.city}</span>
//               </figcaption>
//               </Link>
//           </>
//         ))}
//       </>
//     )
//   }
// }

// export default cardMotorbike;

import React, { Component } from "react";
import { Link } from "react-router-dom";
import imageDefault from "../../../assets/205.jpg";

function cardMotorbike(props) {
  console.log("data props", props);
  const dataVehicle = props.dataVehicle;
  const card = [];

  for (let idx = 0; idx < dataVehicle.length; idx++) {
    const images =
      dataVehicle[idx].images !== null
        ? process.env.REACT_APP_HOST +
          `/images/vehicle/${JSON.parse(dataVehicle[idx].images)[0]}`
        : require("../../../assets/205.jpg");
    console.log("ini dimana", images);
    const id = dataVehicle[idx].id;
    const brand = dataVehicle[idx].brand;
    const city = dataVehicle[idx].city;
    const element = (
      <div className="wrapper-cardVehicle" key={"cardMotorbike" + idx}>
        <Link to={`/detail/${id}`}>
          <img src={images} alt="imageCard" className="image-popularCard"></img>
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

export default cardMotorbike;
