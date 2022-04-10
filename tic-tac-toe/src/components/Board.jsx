import { useContext, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import { GameContext } from "../contexts/GameContext";
import calculateWinner from "../utils/CalculateWinner";

import Square from "./Square";
import Player from "./Player";
import Reset from "./Reset";
import Winner from "./Winner";
import History from "./History";

const Board = () => {
  const { squares, setWhoIsWinner, history } = useContext(GameContext);

  useEffect(() => {
    const winner = calculateWinner(squares);

    if (winner) {
      setWhoIsWinner(winner);
    }
  }, [setWhoIsWinner, squares]);

  return (
    <div className="board-container">
      <Player />
      <Winner />
      <div className="board">
        {squares.map((value, index) => (
          <Square value={value} index={index} key={uuidv4()} />
        ))}
      </div>
      <Reset />
      <History />
    </div>
  );
};

export default Board;
