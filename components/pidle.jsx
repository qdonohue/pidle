import { useState, useEffect } from "react";
import { EMPTY, CORRECT, MISPLACED } from "../misc/constants";
import { ActiveRow, CompletedRow, UntouchedRow } from "./row";

const Pidle = ({ solution }) => {
  const [guesses, setGuesses] = useState([]);
  const [row, setRow] = useState(0);
  const [curGuess, setCurGuess] = useState([]);
  const [win, setWin] = useState(false);

  const processGuess = (l, i) => {
    if (l === solution[i]) {
      return { value: l, status: CORRECT };
    } else if (solution.includes(l)) {
      return { value: l, status: MISPLACED };
    } else {
      return { value: l, status: EMPTY };
    }
  };

  const onClickDown = async (event) => {
    // TODO: Check if end of game / finished
    if (row < 6 && event.key == "Enter") {
      const processedGuess = curGuess.map((l, i) => processGuess(l, i));
      setGuesses((guesses) => [...guesses, processedGuess]);
      setCurGuess([]);
      setRow(row + 1);
    } else if (curGuess.length > 0 && event.key == "Backspace") {
      setCurGuess(curGuess.slice(0, -1));
    } else if (
      curGuess.length < 6 &&
      "0123456789".includes(event.key.toLowerCase())
    ) {
      setCurGuess([...curGuess, event.key.toUpperCase()]);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", onClickDown);

    return () => window.removeEventListener("keydown", onClickDown);
  });

  return (
    <div className="flex flex-col space-y-4">
      {guesses.map((v, i) => (
        <CompletedRow input={v} key={i} />
      ))}
      {row < 6 && <ActiveRow input={curGuess} />}
      {row < 5 &&
        [...Array(6 - row - 1)].map((v, i) => <UntouchedRow key={i} />)}
    </div>
  );
};

export default Pidle;
