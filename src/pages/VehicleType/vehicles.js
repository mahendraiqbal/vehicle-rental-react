import React, { Component } from 'react';
import { allVehicle } from "../../utils/https/vehicle";
import CardMotorbike from "../../components/layouts/Card/cardMotorbike";


class vehicles extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataVehicle: [],
            title: "",
        }
    };

    viewVehicles() {
      console.log('hmm props', this.props)
      const {match} = this.props;
      let URL = "?type="+match.params.type;
      let type = match.params.type;
      console.log('match', match)
      console.log('url', URL)

      if (type === "cars") {
        this.setState({
          title: "Cars",
        });
      } else if (type === "motorbikes") {
        this.setState({
          title: "Motorbikes",
        });
      } else if (type === "bike") {
        this.setState({
          title: "Bike",
        });
      }

      allVehicle(URL)
      .then((res) => {
        console.log('resnya dong', res)
        const dataVehicle = res.data.result.data;

        this.setState({
          dataVehicle: dataVehicle,
        })
      })
      .catch((err) => console.log(err));
    }
    
    
  render() {
    return (
      <>
        <div className="row">
          <CardMotorbike dataVehicle={this.state.dataVehicle}/>
          <p>ahahaha</p>
        </div>
      </>
    );
  }
}

export default vehicles
