import Box from "./box";
import { EMPTY } from "../misc/constants";

export const ActiveRow = ({ input }) => {
  return (
    <div className="grid grid-flow-col auto-cols-max justify-center">
      {input.map((v, i) => (
        <Box val={v} key={i} status={EMPTY} />
      ))}
      {[...Array(6 - input.length)].map((v, i) => (
        <Box val="" status={EMPTY} key={i} />
      ))}
    </div>
  );
};

export const CompletedRow = ({ input }) => {
  return (
    <div className="grid grid-flow-col auto-cols-max justify-center">
      {input.map((v, i) => (
        <Box val={v.value} key={i} status={v.status} />
      ))}
    </div>
  );
};

export const UntouchedRow = () => {
  return (
    <div className="grid grid-flow-col auto-cols-max justify-center">
      {Array(6).fill(<Box val="" status={EMPTY} />)}
    </div>
  );
};
