import { useState, useEffect } from "react";
import { CodePeg } from "../models/CodePeg";

export interface useActionBufferType {
  position: number | null;
  peg: CodePeg | null;
  updatePosition: (newPosition: number) => void;
  updatePeg: (newPeg: CodePeg) => void;
  resetActionBuffer: () => void;
}

export const useActionBuffer = (updateGuess: Function): useActionBufferType => {
  const [position, setPosition] = useState<number | null>(null);
  const [peg, setPeg] = useState<CodePeg | null>(null);

  useEffect(() => {
    if (position !== null && peg !== null) {
      updateGuess(position, peg);
    }
  }, [position, peg, updateGuess]);

  const updatePeg = (newPeg: CodePeg) => {
    if (newPeg === peg) {
      setPeg(null);
    } else {
      setPeg(newPeg);
    }
  };

  const updatePosition = (newPosition: number) => {
    if (newPosition === position) {
      setPosition(null);
    } else {
      setPosition(newPosition);
    }
  };

  const resetActionBuffer = () => {
    setPosition(null);
    setPosition(null);
  };

  return {
    position,
    peg,
    updatePosition,
    updatePeg,
    resetActionBuffer,
  };
};
