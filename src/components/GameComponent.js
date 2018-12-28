import React, { Component } from 'react';
import Stars from './StarsComponent';
import Button from './ButtonComponent';
import Answer from './AnswerComponent';
import Numbers from './NumbersComponent';

class Game extends Component {
  render() {
    return (
      <div className="container">
      <h3>Play game</h3>
      <hr />
        <div className="row">
          <Stars />
          <Button />
          <Answer />
        </div>
        <br /> <br />
        <Numbers />
      </div>
    )
  }
}

export default Game;