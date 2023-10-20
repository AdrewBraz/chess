import React, { FC, useState } from 'react';
import { Board } from './models/Board'

interface BoardProps {
    board: Board,
    setBoard: void
}

const BoardComponent: FC<BoardProps> = () => {
    const [board, setBoard] = useState(new Board)

    return (
        <div className='board'>

        </div>
    )

}

export default BoardComponent;