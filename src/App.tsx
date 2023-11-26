import React, { useState, useEffect } from 'react';
import './App.css';
import BoardComponent  from './BoardComponent';
import { Board } from './models/Board';
import LostFigures from './LostFigures';
import { Colors } from './models/Colors';
import { Player } from './models/Player';
import { Cell } from './models/Cell';
import ChooseFigure from './ChooseFigure';

const App = () => {

  const [board, setBoard] = useState(new Board())
  const [prevBoard, setPrevBoard] = useState(new Board())
  const [whitePlayer, setWhitePlayer] = useState(new Player(Colors.WHITE))
  const [blackPlayer, setBlackPlayer] = useState(new Player(Colors.BLACK))
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);
  const [switchPawn, setSwitch] = useState<Cell | null>(null)
  

  const restart = () => {
    const newBoard = new Board();
    newBoard.initCells();
    newBoard.addFigures()
    setBoard(newBoard)
    setCurrentPlayer(whitePlayer)
  }

  const swapPlayers = () => {
    setCurrentPlayer(currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer)
  }

  const setPlayer = (player: Player): void => {
    setCurrentPlayer(player)
  }

  useEffect(() => {
    restart()
  }, [])


  return (
    <div className="app">
      <div>
        <BoardComponent
          board={board}
          prevBoard={prevBoard}
          setPrevBoard={setPrevBoard}
          currentPlayer={currentPlayer}
          setBoard={setBoard}
          swapPlayers={swapPlayers}
          setPlayer={setPlayer}
          switchPawn={switchPawn}
          setSwitch={setSwitch}
        />
        { switchPawn ? 
          <div>
            <ChooseFigure currentPlayer={currentPlayer} setSwitch={setSwitch}/>
          </div> :
          null
        }
      </div>
      <div>
        <LostFigures
          title="Черные фигуры"
          figures={board.blackFigures}
        />
        <LostFigures
          title="Белые фигуры"
          figures={board.whiteFigures}
        />
      </div>
    </div>
  );
}

export default App;
