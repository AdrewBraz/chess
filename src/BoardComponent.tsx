import React, { FC, useEffect, useState } from 'react'
import { Board } from './models/Board'
import CellComponent from './CellComponent';
import { Cell } from './models/Cell';


interface BoardProps {
  board: Board;
  setBoard: (board: Board) => void;

}

const BoardComponent: FC<BoardProps> = ({board, setBoard}) => {
  const [selected, setSelected] = useState<Cell | null>(null)

  const click = (target: Cell) => {
    if(selected && selected !== target && selected.figure?.canMove(target)){
      selected?.moveFigure(target)
      setSelected(null)
      updateBoard()
    } else if(target.figure) {
      setSelected(target)
    }

  }

  const highlightCells = () =>{
    board.highlightCells(selected)
    updateBoard()
  }

  const updateBoard = () => {
    const newBoard = board.getCopyBoard();
    console.log(newBoard)
    setBoard(newBoard)
  }

  useEffect(() => {
    console.log(selected)
    highlightCells()
  }, [selected])


  return (
    <div>
      <div className="board">
        {board.cells.map((row, index) => {
          return (
            <React.Fragment key={index} >
              {row.map((cell) => <CellComponent key={cell.id} click={click} selected={cell.x === selected?.x && cell.y === selected?.y}  cell={cell}/>)}
            </React.Fragment>
          )
        })}
      </div>
    </div>
  );
};

export default BoardComponent;