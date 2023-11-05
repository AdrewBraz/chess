import React, { FC, useEffect, useState } from 'react'
import { Board } from './models/Board'
import CellComponent from './CellComponent';
import { Cell } from './models/Cell';
import { Player } from './models/Player';
import { Figures, Figure } from './models/Figure';

interface BoardProps {
  board: Board;
  setBoard: (board: Board) => void;
  prevBoard: Board;
  setPrevBoard: (board: Board) => void;
  currentPlayer: Player | null,
  swapPlayers: () => void
}

const BoardComponent: FC<BoardProps> = ({board, setBoard, prevBoard, setPrevBoard, currentPlayer, swapPlayers}) => {
  const [selected, setSelected] = useState<Cell | null>(null)
  const [check, setCheck] = useState(false)

  const click = (target: Cell) => {
    const previousBoard = board.getPrevBoard()
    setPrevBoard(previousBoard)
    if(selected && selected !== target && selected.figure?.canMove(target) && target.figure?.name !== Figures.KING){
      console.log(check)
      if(!check){
        selected?.moveFigure(target)
        setSelected(null)
        swapPlayers()
      }

    }  else {
      if (target.figure?.color === currentPlayer?.color) {
        setSelected(target);
      }
    }

  }

  const highlightCells = () =>{
    board.highlightCells(selected)
    updateBoard()
  }

  const updateBoard = () => {
    const newBoard = board.getCopyBoard();
    setBoard(newBoard)
    checkFigures(board)

    
  }

  const checkFigures = (board: Board) => {
    const arr = []
    for(let x = 0; x < board.cells.length; x ++){
      const row = board.cells[x]
      for(let y = 0; y < row.length; y++){
        if(!!board.getCell(y, x).figure && board.getCell(y, x).figure && board.getCell(y, x).figure?.color === currentPlayer?.color){
          arr.push(board.getCell(y, x))
        }
    }
    if(arr.length > 0){
    arr.forEach(( cell: Cell): void => {
      if(!!board.watchForCheck(cell)) {
        setCheck(true)
      }
    })
  }
  }
}

  useEffect(() => {
    highlightCells()
  }, [selected])


  return (
    <div>
      <div className='state'>
        <h3>Текущий игрок {currentPlayer?.color}</h3>
        {check ? <h3>Текущий игрок {currentPlayer?.color} под шахом</h3>: ''}
        <h3></h3>
      </div>
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

