import React, { createContext, useState } from 'react';

export const GameContext = createContext('');

export default function GameContextProvider({ children }) {
  const [squares, setSquares] = useState(Array(9).fill(null));

  const state = {
    squares,
    setSquares
  }

  return (
    <GameContext.Provider value={state}>{children}</GameContext.Provider>
  );
}
