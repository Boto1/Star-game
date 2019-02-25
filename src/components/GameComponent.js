import React, { Component } from 'react';
import Stars from './StarsComponent';
import Button from './ButtonComponent';
import Answer from './AnswerComponent';
import Numbers from './NumbersComponent';
import DoneFrame from './DoneFrameComponent';

class Game extends Component {
  static numberOfStars = () => Math.floor((Math.random()*9)) + 1;
  static initialState = () => ({
    selectedNumbers: [],
    usedNumbers: [],
    numberOfStars: Game.numberOfStars(),
    answerIsCorrect: null,
    redraws: 5,
    doneStatus: ""
  })
  state = Game.initialState();

  selectNumber = (clickedNumber) => {
    if(this.state.selectedNumbers.includes(clickedNumber) ||
       this.state.usedNumbers.includes(clickedNumber)) {
      return;
    }
    this.setState(prevState => ({
      answerIsCorrect: null,
      selectedNumbers: prevState.selectedNumbers.concat(clickedNumber)
    }))
  };

  rollbackNumber = (number) => {
    this.setState(prevState => ({
      answerIsCorrect: null,
      selectedNumbers: prevState.selectedNumbers.filter(num => num !== number)
    }))
  };

  checkAnswer = () => {
    this.setState(prevState => ({
      answerIsCorrect: prevState.numberOfStars === 
                       prevState.selectedNumbers.reduce((prev, cur) => prev + cur, 0)
    }));
  };

  acceptAnswer = () => {
    this.setState(prevState => ({
      usedNumbers: prevState.usedNumbers.concat(prevState.selectedNumbers),
      selectedNumbers: [],
      answerIsCorrect: null,
      numberOfStars: Game.numberOfStars()
    }), this.updateDoneStatus)
  };

  redraw = () => {
    if(this.state.redraws === 0) {
      return;
    }
    this.setState(prevState => ({
      numberOfStars: Game.numberOfStars(),
      selectedNumbers: [],
      answerIsCorrect: null,
      redraws: prevState.redraws - 1
    }), this.updateDoneStatus)
  };

  possibleSolutions = ({numberOfStars, usedNumbers}) => {
    const possibleNumbers = [1,2,3,4,5,6,7,8,9].filter(num =>
      !usedNumbers.includes(num)
    ).sort((a, b) => a - b);

    let sum = 0;
    for(let i = 0, temp = 0; i < possibleNumbers.length; i++) {
      sum += possibleNumbers[i];
      if(sum > numberOfStars) {
        while(sum > numberOfStars) {
          sum -= possibleNumbers[temp];
          temp++;
        }
      }
      if(sum === numberOfStars) {
        return true;
      }
    }
    return false;
  }

  updateDoneStatus = () => {
    this.setState(prevState => {
      if(prevState.usedNumbers.length === 9) {
        return { doneStatus: 'Done. Congrats!' }
      }
      if(prevState.redraws === 0 && !this.possibleSolutions(prevState)) {
        console.log(this.possibleSolutions(prevState));
        return { doneStatus: 'Game over!' }
      }
    })
  };

  restartGame = () => this.setState(Game.initialState());

  render() {
    const { selectedNumbers, 
            numberOfStars, 
            answerIsCorrect,
            usedNumbers,
            redraws,
            doneStatus } = this.state;
    return (
      <div className="container">
      <h3>Play game</h3>
      <hr />
        <div className="row">
          <Stars numberOfStars={numberOfStars} />

          <Button selectedNumbers={selectedNumbers}
                  answerIsCorrect={answerIsCorrect}
                  checkAnswer={this.checkAnswer}
                  acceptAnswer={this.acceptAnswer}
                  redraw={this.redraw}
                  redraws={redraws} />

          <Answer selectedNumbers={selectedNumbers}
                  rollbackNumber={this.rollbackNumber} />
        </div>
        <br /> <br />
        <Numbers selectedNumbers={selectedNumbers}
                 selectNumber={this.selectNumber}
                 usedNumbers={usedNumbers} />
        {doneStatus ?
          <DoneFrame restartGame={this.restartGame} 
                     doneStatus={doneStatus} /> : null        
        }        
      </div>
    )
  }
}

export default Game;