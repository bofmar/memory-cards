import React, { useState } from 'react';
import characters from './data/characters';
import Card from './components/Card';
import './App.css';

const INITIAL_AMOUNT = 5;

function App() {
  const [currentCards, setCurrentCards] = useState(getInitialCharacters(shuffle(characters), INITIAL_AMOUNT));
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  function getInitialCharacters(arr, amount) {
    const newArr = []
    for (let i = 0; i < amount; i++) {
      newArr.push(arr[i]);
    }
    return newArr;
  }

  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function handleClick(clicked, name) {
    if (clicked === false) {
      setScore(prevScore => prevScore + 1);
      setCurrentCards(cards => shuffle(cards.map(card => card.name === name ? { ...card, clicked: true } : card)));
    }
    else {
      gameOver();
    }
  }

  function gameOver() {
    setHighScore(prevHigh => score > prevHigh ? score : prevHigh);
    setScore(0);
    setCurrentCards(getInitialCharacters(shuffle(characters), INITIAL_AMOUNT));
  }

  return (
    <div className="App">
      <h1>Score: {score}</h1>
      <h1>High Score: {highScore}</h1>
      <div className='cards'>
        {currentCards.map(c => <Card key={c.name} {...c} handleClick={handleClick} />)}
      </div>
    </div>
  );
}

export default App;
