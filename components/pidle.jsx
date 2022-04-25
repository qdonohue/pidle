import { useState, useEffect } from "react";
import { EMPTY, CORRECT, MISPLACED } from "../misc/constants";
import EndState from "./endstate";
import { ActiveRow, CompletedRow, UntouchedRow } from "./row";

const Pidle = ({ solution }) => {
  const [guesses, setGuesses] = useState([]);
  const [row, setRow] = useState(0);
  const [curGuess, setCurGuess] = useState([]);
  const [win, setWin] = useState(false);

  const handleGuess = () => {
    let won = true;
    let processed = [];
    for (var i = 0; i < curGuess.length; i++) {
      const l = curGuess[i];
      if (l === solution[i]) {
        processed.push({ value: l, status: CORRECT });
      } else if (solution.includes(l)) {
        won = false;
        processed.push({ value: l, status: MISPLACED });
      } else {
        won = false;
        processed.push({ value: l, status: EMPTY });
      }
    }
    setWin(won);
    setCurGuess([]);
    setGuesses([...guesses, processed]);
    setRow(row + 1);
  };

  const onClickDown = async (event) => {
    // TODO: Check if end of game / finished
    if (row < 6 && curGuess.length == 6 && event.key == "Enter") {
      handleGuess();
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
      {win || row > 5 ? (
        <EndState won={win} />
      ) : (
        <>
          {!win && row < 6 && <ActiveRow input={curGuess} />}
          {row < 5 &&
            [...Array(6 - row - 1)].map((v, i) => <UntouchedRow key={i} />)}
        </>
      )}
    </div>
  );
};

export default Pidle;
