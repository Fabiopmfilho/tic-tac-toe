import React, { useContext } from 'react';

import { GameContext } from '../contexts/GameContext';

const Square = ({ value, index }) => {
  const context = useContext(GameContext);
  
  return <button>0</button>;
};

export default Square;
