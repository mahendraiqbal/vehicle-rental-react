import React, { Component } from "react";
import Card from "../../components/layouts/Card/Card";
import { allVehicle } from "../../utils/https/vehicle";
// import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

class getProfile extends Component {
  state = {
    dataPopular: [],
    dataCar: [],
    dataMotorbike: [],
    dataBike: [],
  };

  componentDidMount() {
    // getVehicleCar()
    // .then((res) => console.log(res.data.result.data))

    allVehicle()
      .then((res) => {
        console.log(res[1].data.result.data[0].city);
        this.setState({
          dataPopular: res[0].data.result,
          dataCar: res[1].data.result.data,
          dataMotorbike: res[2].data.result.data,
          dataBike: res[3].data.result.data
        });
      })
      .catch((err) => console.error(err));
  }
  render() {
    // const notify = () => toast.success("Wow so easy!");
    const { popular, car, motorbike, bike } = this.state;
    // console.log(this.state)
    return (
      // <div>
      //   <Card />
      // </div>
    
          <div className="image-card">
              <Link to="/detail">
              {/* <img
                src={}
                alt="imageCard"
                className="image-popularCard"
              ></img> */}
              <figcaption className="caption">
                <p className="figcaption-brand">{}</p>
                <p className="figcaption-city">{}</p>
              </figcaption>
              </Link>
              <Card />
            </div>
    //   <div className="notify">
    //   <Card />
    //   <button onClick={notify}>Notify!</button>
    //   <ToastContainer />
    // </div>
    );
    
  }
}

export default getProfile;
