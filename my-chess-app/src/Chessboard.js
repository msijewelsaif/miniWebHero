// Chessboard.js
import React from 'react';
import Square from './Square';
import './Chessboard.css';

const Chessboard = () => {
  const renderSquare = (i, j) => {
    const isBlack = (i + j) % 2 === 1;
    return <Square key={`${i},${j}`} isBlack={isBlack} />;
  };

  const createBoard = () => {
    const board = [];
    for (let i = 0; i < 8; i++) {
      const row = [];
      for (let j = 0; j < 8; j++) {
        row.push(renderSquare(i, j));
      }
      board.push(<div key={i} className="board-row">{row}</div>);
    }
    return board;
  };

  return <div className="chessboard">{createBoard()}</div>;
};

export default Chessboard;
