import React from 'react';

const Numbers = (props) => {
  const selectedClass = (number) => {
    if(props.usedNumbers.includes(number)) {
      return "used";
    }
    if(props.selectedNumbers.includes(number)) {
      return "selected";
    }
  };

  return (
    <div className="card text-center">
      <div>
        {Numbers.list.map((number, i) =>
          <span key={i} className={selectedClass(number)}
                onClick={() => props.selectNumber(number)}>
            {number}
          </span>
        )}
      </div>
    </div>
  );
}

Numbers.list = [...Array(10).keys()];
Numbers.list.shift();

export default Numbers;