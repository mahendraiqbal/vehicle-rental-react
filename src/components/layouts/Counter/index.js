import React, { Component } from 'react'
import "./counter.css"

class index extends Component {
  render() {
    return (
      <div className="button-wrapper-counter">
          <button onClick={this.props.onClickPrev} className="button-minus-counter">-</button>
          <p className="counter-detail">{this.props.counterTotal}</p>
          <button onClick={this.props.onClickNext} className="button-plus-counter">+</button>
      </div>
    )
  }
}

export default index;