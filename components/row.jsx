const Row = () => {
  const digits = ["1", "1", "1", "1", "1", "1"];
  return (
    <div class="grid grid-cols-6 gap-4">
      {digits.map((v) => {
        return <div>{v}</div>;
      })}
    </div>
  );
};

export default Row;
