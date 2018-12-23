import React, { Component } from 'react';

class Button extends Component {
  state = {
    counter: 0
  }

  incrementCounter = () => {
    this.setState((prev) => ({
      counter: prev.counter + 1
    }))
  }

  render() {
    return (
      <button onClick={this.incrementCounter}>{this.state.counter}</button>
    );
  }
}

export default Button;