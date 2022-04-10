import React, { useContext } from 'react';

import { GameContext } from '../contexts/GameContext';

const Board = () => {
  const context = useContext(GameContext);
  return <h1>Board</h1>;
};

export default Board;
