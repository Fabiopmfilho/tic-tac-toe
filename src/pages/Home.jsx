import React from 'react';
import './Home.css';

import GameContextProvider from '../contexts/GameContext';
import Board from '../components/Board';

export default function Home() {
  fetch(process.env.REACT_APP_API_URL || 'http://localhost:8080/api/v1')
  .then(() => console.log('Successful'))
  .catch(() => console.log('HTTP WRONG: '))
  return (
    <GameContextProvider >
      <Board />    
    </GameContextProvider>
  );
}