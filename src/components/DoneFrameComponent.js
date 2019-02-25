import React from 'react';

const DoneFrame = (props) => {
  return (
    <div className="text-center">
      <h3>{props.doneStatus}</h3>
      <button className="btn btn-secondary" onClick={props.restartGame}>
        Play Again
      </button>
    </div>
  );
}

export default DoneFrame;