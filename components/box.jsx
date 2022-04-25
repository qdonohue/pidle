import { CORRECT, EMPTY, MISPLACED } from "../misc/constants";

const colorString = (status) => {
  switch (status) {
    case EMPTY:
      return "bg-slate-700";
    case CORRECT:
      return "bg-green-700";
    case MISPLACED:
      return "bg-yellow-700";
    default:
      return "bg-slate-700";
  }
};

const Box = ({ val, status }) => {
  return (
    <div
      className={
        "h-12 w-12 border border-black p-2 mx-2 bg-slate-700 text-slate-200 grid place-items-center p-0 m-0 font-bold text-2xl rounded-sm " +
        colorString(status)
      }
    >
      {val}
    </div>
  );
};

export default Box;
