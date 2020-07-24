import { useState, useEffect, useCallback } from "react";
import { LOCALSTORAGE_SCOREBOARD_KEY } from "../config/config";

const scoreboardInit = () => {
  const init = {
    wins: 0,
    loses: 0,
  };
  localStorage.setItem(LOCALSTORAGE_SCOREBOARD_KEY, JSON.stringify(init));
};

const updateLocalstorage = (wins: number, loses: number) => {
  const newScore = { wins, loses };
  localStorage.setItem(LOCALSTORAGE_SCOREBOARD_KEY, JSON.stringify(newScore));
};

interface useScoreboardType {
  wins: number;
  loses: number;
  addWin: () => void;
  addLose: () => void;
}

export const useScoreboard = (): useScoreboardType => {
  const [wins, setWins] = useState(0);
  const [loses, setLoses] = useState(0);

  useEffect(() => {
    const scoreboardRaw = localStorage.getItem(LOCALSTORAGE_SCOREBOARD_KEY);
    if (scoreboardRaw) {
      const scoreboard = JSON.parse(scoreboardRaw);
      setWins(scoreboard?.wins || 0);
      setLoses(scoreboard?.loses || 0);
    } else {
      scoreboardInit();
    }
  }, []);

  const addWin = useCallback(() => {
    setWins(wins + 1);
    updateLocalstorage(wins + 1, loses);
  }, [wins, loses]);

  const addLose = useCallback(() => {
    setLoses(loses + 1);
    updateLocalstorage(wins, loses + 1);
  }, [wins, loses]);

  return {
    wins,
    loses,
    addWin,
    addLose,
  };
};
