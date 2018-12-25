import React, { Component } from 'react';
import CardList from './components/CardListComponent';
import CardInput from './components/CardInputComponent';

class App extends Component {
  state = {
    cards: []
  };

  addNewCard = (card) => {
    this.setState(prevState => ({
      cards: prevState.cards.concat(card)
    }))
  };

  render() {
    return (
      <div>
        <CardInput onSubmit={this.addNewCard} />
        <CardList cards={this.state.cards} />
      </div>
    );
  }
}

export default App;
