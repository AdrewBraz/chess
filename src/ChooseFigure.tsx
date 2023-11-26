import { FC } from 'react'
import WhiteKnight from './assets/white-knight.png'
import BlackKnight from './assets/black-knight.png'
import WhiteBishop from './assets/white-bishop.png'
import BlackBishop from './assets/black-bishop.png'
import WhiteRook from './assets/white-rook.png'
import BlackRook from './assets/black-rook.png'
import WhiteQueen from './assets/white-queen.png'
import BlackQueen from './assets/black-queen.png'
import { Player } from './models/Player'
import { Cell } from './models/Cell'
import { library } from 'webpack'


interface ChooseProps {
    currentPlayer: Player | null,
    setSwitch: (cell: Cell) => void

}

const ChooseFigure: FC<ChooseProps> = ({currentPlayer, setSwitch}) => {
    const figuresByColor = {
        white: [WhiteBishop, WhiteKnight, WhiteQueen, WhiteRook],
        black: [BlackBishop, BlackKnight, BlackQueen, BlackRook]
    }

    const logos = !!currentPlayer?.color ? figuresByColor[currentPlayer.color] : []

    return (
        <div>
            <ul style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>{logos.map((item) => <li style={{width: '64px', height: '64px', listStyleType: 'none'}}><img src={item} /></li>)}</ul>
        </div>
    )
}

export default ChooseFigure