import React, { useState, useEffect } from 'react';
import './App.css';
import BoardComponent  from './BoardComponent';
import { Board } from './models/Board';

const App = () => {

  const [board, setBoard] = useState(new Board())

  const restart = () => {
    const newBoard = new Board();
    newBoard.initCells();
    newBoard.addFigures()
    setBoard(newBoard)
  }

  useEffect(() => {
    restart()
  }, [])


  return (
    <div className="app">
      <BoardComponent board={board} setBoard={setBoard} />
    </div>
  );
}

export default App;
