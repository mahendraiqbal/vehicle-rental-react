import React, { Component } from "react";
import Card from "../../components/layouts/Card/Card";
import { popular } from "../../utils/https/vehicle";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class getProfile extends Component {
  state = {
    dataVehicle: [],
  };

  componentDidMount() {
    popular()
      .then((res) => {
        console.log(res.data.result);
        this.setState({
          dataVehicle: res.data.result,
        });
      })
      .catch((err) => console.error(err));
  }
  render() {
    const notify = () => toast("Wow so easy!");

    return (
      // <div>
      //   <Card />
      // </div>

    <div>
      <button onClick={notify}>Notify!</button>
      <ToastContainer />
    </div>
    );
    
  }
}

export default getProfile;
