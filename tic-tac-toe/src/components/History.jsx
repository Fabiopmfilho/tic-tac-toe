import React, { useContext } from "react";

import { GameContext } from "../contexts/GameContext";

const History = () => {
  const { history, setHistory, setSquares, setIsXNext, setWhoIsWinner } =
    useContext(GameContext);

  const handleClick = (index) => {
    const newHistory = [...history];
    newHistory.splice(index, Number.MAX_SAFE_INTEGER);
    setHistory(newHistory);

    setSquares(history[index].squares);
    setIsXNext(history[index].isNext);
    setWhoIsWinner(history[index].whoIsWinner);
  };

  return (
    <div>
      {history.map((data, index) => (
        <div>
          <button
            className="history"
            type="button"
            onClick={() => handleClick(index)}
          >
            Back turn: {index}
          </button>
        </div>
      ))}
    </div>
  );
};

export default History;
