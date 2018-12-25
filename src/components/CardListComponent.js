import React from 'react';
import Card from './CardComponent';

const CardList = (props) => {
  return (
    <div>
      { props.cards.map(card => <Card {...card} />) }
    </div>
  )
}

export default CardList;