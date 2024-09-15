import React, { useState, useEffect } from 'react';
import './App.css';

const canvasX = 600;
const canvasY = 400;
const snakeSize = 10;
const initialSnake = [
  { x: 40, y: 40 },
  { x: 30, y: 40 },
  { x: 20, y: 40 },
];

function App() {
  const [snake, setSnake] = useState(initialSnake);
  const [direction, setDirection] = useState('RIGHT');
  const [food, setFood] = useState(getRandomPosition());
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    const interval = setInterval(moveSnake, 200);

    document.onkeydown = onKeyDown;
    return () => clearInterval(interval);
  });

  useEffect(() => {
    if (isGameOver) {
      alert('Game Over');
      setSnake(initialSnake);
      setIsGameOver(false);
    }
  }, [isGameOver]);

  function moveSnake() {
    const newSnake = [...snake];
    const head = { ...newSnake[0] };

    switch (direction) {
      case 'RIGHT':
        head.x += snakeSize;
        break;
      case 'LEFT':
        head.x -= snakeSize;
        break;
      case 'UP':
        head.y -= snakeSize;
        break;
      case 'DOWN':
        head.y += snakeSize;
        break;
      default:
        break;
    }

    newSnake.unshift(head);

    // Check for collision with food
    if (head.x === food.x && head.y === food.y) {
      setFood(getRandomPosition());
    } else {
      newSnake.pop(); // Remove last part if no food eaten
    }

    // Check for collisions with walls or self
    if (
      head.x < 0 || head.x >= canvasX || 
      head.y < 0 || head.y >= canvasY ||
      checkCollision(head, newSnake)
    ) {
      setIsGameOver(true);
    } else {
      setSnake(newSnake);
    }
  }

  function onKeyDown(e) {
    switch (e.keyCode) {
      case 37:
        if (direction !== 'RIGHT') setDirection('LEFT');
        break;
      case 38:
        if (direction !== 'DOWN') setDirection('UP');
        break;
      case 39:
        if (direction !== 'LEFT') setDirection('RIGHT');
        break;
      case 40:
        if (direction !== 'UP') setDirection('DOWN');
        break;
      default:
        break;
    }
  }

  function getRandomPosition() {
    const x = Math.floor(Math.random() * (canvasX / snakeSize)) * snakeSize;
    const y = Math.floor(Math.random() * (canvasY / snakeSize)) * snakeSize;
    return { x, y };
  }

  function checkCollision(head, snakeArray) {
    for (let i = 1; i < snakeArray.length; i++) {
      if (head.x === snakeArray[i].x && head.y === snakeArray[i].y) {
        return true;
      }
    }
    return false;
  }

  return (
    <div className="App">
      <h1>Snake Game</h1>
      <div className="game-area">
        <canvas
          className="game-canvas"
          width={canvasX}
          height={canvasY}
        />
        {snake.map((part, index) => (
          <div
            key={index}
            className="snake-part"
            style={{ left: `${part.x}px`, top: `${part.y}px` }}
          />
        ))}
        <div
          className="food"
          style={{ left: `${food.x}px`, top: `${food.y}px` }}
        />
      </div>
    </div>
  );
}

export default App;
