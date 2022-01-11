import React from "react";
import axios from "axios";

class getProfile extends React.Component {
  state = {
    users: [],
  };
  componentDidMount() {
    const URL = "http://localhost:8080/users";
    axios
      .get(URL)
      .then((response) => {
        console.log("RESPONSE", response.data);
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
      const element = <li key={idx}>{users[idx].name}</li>;
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
