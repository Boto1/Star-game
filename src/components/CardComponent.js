import React from 'react';

const Card = (props) => {
  return (
    <div>
      <img width="100px" src={ props.avatar } alt="Avatar" />
      <div>{ props.name }</div>
      <div>{ props.company }</div>
    </div>
  );
};

export default Card;