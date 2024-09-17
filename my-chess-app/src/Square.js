// Square.js
import React from 'react';
import './Square.css';

const Square = ({ isBlack, children }) => {
  const backgroundColor = isBlack ? 'black' : 'white';
  const color = isBlack ? 'white' : 'black';

  return (
    <div className="square" style={{ backgroundColor, color }}>
      {children}
    </div>
  );
};

export default Square;
