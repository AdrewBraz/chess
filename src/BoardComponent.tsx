import React, { FC } from 'react';
import { Board } from './models/Board'
import CellComponent from './CellComponent';
import { Cell } from './models/Cell';

interface BoardProps {
    board: Board,
    setBoard: (board: Board) => void
}

const BoardComponent: FC<BoardProps> = (props) => {
    const { board } = props
    return (
        <div className='board'>
          {board.cells.map((row, index) => {
            return (<React.Fragment key={index}>
                {row.map((cell) => <CellComponent key={cell.id} cell={cell}/>)}
            </React.Fragment>)
          })}
        </div>
    )

}

export default BoardComponent;