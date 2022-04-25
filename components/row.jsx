import Box from "./box";
import { EMPTY, CORRECT, MISPLACED } from "../misc/constants";

const Row = () => {
  const test = [1, 2, 3, 4, 5, 6];
  return (
    <div className="grid grid-flow-col auto-cols-max justify-center">
      {test.map((v, i) => (
        <Box val={v} key={i} status={i % 2 ? EMPTY : CORRECT} />
      ))}
    </div>
  );
};

export default Row;
