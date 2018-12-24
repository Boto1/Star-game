import React, { Component } from 'react';
import Button from './components/ButtonComponent';
import Text from './components/TextComponent';

class App extends Component {
  state = {
    counter: 0
  };

  incrementCounter = (incrementValue) => {
    this.setState((prev) => ({
      counter: prev.counter + incrementValue
    }));    
  };

  render() {
    return (
      <div>
        <Button onClickFunc={this.incrementCounter.bind(this, 1)} value="1" />
        <Button onClickFunc={this.incrementCounter.bind(this, 5)} value="5" />
        <Button onClickFunc={this.incrementCounter.bind(this, 10)} value="10" />
        <Button onClickFunc={this.incrementCounter.bind(this, 100)} value="100" />
        <Text value={this.state.counter}/>
      </div>
    );
  }
}

export default App;
