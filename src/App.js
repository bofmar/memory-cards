import React, { useEffect, useState } from 'react';
import characters from './data/characters';
import Card from './components/Card';
import './App.css';

const INITIAL_AMOUNT = 5;
const allCards = shuffle(characters);

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function App() {
  const [currentCards, setCurrentCards] = useState(getInitialCharacters(allCards, INITIAL_AMOUNT));
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  function getInitialCharacters(arr, amount) {
    const newArr = []
    for (let i = 0; i < amount; i++) {
      newArr.push(arr[i]);
    }
    return newArr;
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

  // check if the level is over
  useEffect(() => {
    if (currentCards.every(card => card.clicked === true) && currentCards.length > 0) {
      setCurrentCards(cards => {
        const newCards = [allCards[cards.length]];
        cards.map(card => newCards.push({ ...card, clicked: false }));
        return newCards;
      });
    }
  }, [currentCards]);


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
