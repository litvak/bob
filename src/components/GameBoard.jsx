import "./GameBoard.css";

const GameBoard = () => {
  const boardSize = 5;

  const arr = Array.from({ length: boardSize });
  return (
    <div className="gameBoard">
      {arr.map(() => {
        return (
          <div className="line">
            {arr.map(() => (
              <Cube />
            ))}
          </div>
        );
      })}
      {/* <Cube /> */}
      {/* game board */}
    </div>
  );
};

export default GameBoard;

const Cube = () => {
  return <div className="cube"></div>;
};
