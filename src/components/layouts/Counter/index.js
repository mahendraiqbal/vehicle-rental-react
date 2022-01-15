import React, { Component } from "react";

class Counter extends Component {
  state = {
    counter: 0,
  };
  render() {
    return (
      <div className="button-counter">
        <button
          onClick={() => {
            const total = this.state.counter;
            this.setState({
              counter: total - 1,
            });
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            const total = this.state.counter;
            this.setState({
              counter: total + 1,
            });
          }}
        >
          +
        </button>
      </div>
    );
  }
}

export default Counter;
