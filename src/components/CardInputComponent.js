import React, { Component } from 'react';
import axios from 'axios';

class CardInput extends Component {
  state = {
    userName: ''
  };

  handleSubmit = (event) => {
    event.preventDefault();
    axios.get(`https://api.github.com/users/${this.state.userName}`)
      .then(resp => {
        const cardInfo = {
          key: resp.data.id,
          name: resp.data.login,
          avatar: resp.data.avatar_url,
          company: resp.data.company
        };
        this.props.onSubmit(cardInfo);
        
        this.setState({
          userName: ""
        });
      },
      rej => {
        console.log("User not found");
      });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" 
        value={this.state.userName}
        onChange={event => {
          this.setState({
            userName: event.target.value
          })
        }}
        placeholder="Github username" required />
        <button type="submit">Add card</button>
      </form>
    )
  }
}

export default CardInput;