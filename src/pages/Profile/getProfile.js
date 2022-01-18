import React from "react";
// import axios from "axios";
import { usersProfile } from "../../utils/https/users";

function Card(props) {
  return (
    <section className="card m-2">
      <p>{props.name}</p>
    </section>
  )
}

class getProfile extends React.Component {
  state = {
    users: [],
  };
  componentDidMount() {
    usersProfile()
      .then((response) => {
        console.log("RESPONSE", response.data.result[52].image);
        this.setState({
          users: response.data.result,
        });
      })
      .catch((error) => {
        console.log("ERROR", error);
      });
  }
  getUsers = () => {
    const { users } = this.state;
    const usersView = [];
    for (let idx = 0; idx < users.length; idx++) {
      const element = <Card name={users[idx].name} key={idx} />;
      usersView.push(element);
    }
    return usersView;
  };
  render() {
    return (
      <div>
        <ul>{this.getUsers()}</ul>
      </div>
    );
  }
}

export default getProfile;