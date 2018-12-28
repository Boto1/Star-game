import React from 'react';

const Numbers = (props) => {
  const numbers = [...Array(9).keys()];
  return (
    <div className="card text-center">
      <div>
        {numbers.map(number =>
          <span>{number+1}</span>
        )}
      </div>
    </div>
  );
}

export default Numbers;