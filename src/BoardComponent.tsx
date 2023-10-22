

interface BoardProps {
  board: Board;
  setBoard: (board: Board) => void;

}

const BoardComponent: FC<BoardProps> = (props) => {
  return (
    <div>
      <div className="board">
        
      </div>
    </div>
  );
};

export default BoardComponent;