import React, { useContext } from "react";

import { GameContext } from "../contexts/GameContext";

const Winner = () => {
  const { whoIsWinner } = useContext(GameContext);
  
  if (!whoIsWinner) return <></>;
  return <p className="winner-name">{ whoIsWinner } win!!!</p>;
};

export default Winner;
