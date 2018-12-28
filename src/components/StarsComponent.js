import React from 'react';

const Stars = (props) => {
  const numberOfStars = Math.floor((Math.random()*9)) + 1;

  let stars = [];
  for(let i = 0; i < numberOfStars; i++) {
    stars.push(<i key={i} className="fa fa-star"></i>);
  }
  return (
    <div className="col-5">
      {stars}
    </div>
  );
}

export default Stars;