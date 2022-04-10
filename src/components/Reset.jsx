import React, { useContext } from "react";

import { GameContext } from "../contexts/GameContext";

const Board = () => {
  const { setSquares, setIsXNext, setWhoIsWinner, setHistory } = useContext(GameContext);

  const handleClick = () => {
    setSquares(Array(9).fill(null));
    setIsXNext(true);
    setWhoIsWinner("");
    setHistory([]);
  };

  return (
    <p className="reset">
      <button type="button" onClick={handleClick}>
        Reset
      </button>
    </p>
  );
};

export default Board;
