import React, { useState } from 'react';
import characters from './data/characters';
import Card from './components/Card';
import './App.css';

function App() {
  const [currentCards, setCurrentCards] = useState(getInitialCharacters(shuffle(characters), 5));
  const [score, setScore] = useState(0);

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
    setScore(prevScore => prevScore + 1);
    setCurrentCards(cards => shuffle(cards.map(card => card.name === name ? { ...card, clicked: true } : card)));
    console.log(clicked);
  }

  return (
    <div className="App">
      <h1>Score: {score}</h1>
      <div className='cards'>
        {currentCards.map(c => <Card key={c.name} {...c} handleClick={handleClick} />)}
      </div>
    </div>
  );
}

export default App;
