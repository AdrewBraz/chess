import React, { useState, useEffect } from 'react';
import './App.css';
import BoardComponent  from './BoardComponent';
import { Board } from './models/Board';

const App = () => {
  const [board, setBoard] = useState(new Board())
  
  const restart = () => {
    const newBoard = new Board();
    newBoard.initializeCells()
    newBoard.addFigures()
    setBoard(newBoard )
  }

  useEffect(() => {
    restart()
  }, [])

  return (
    <div className="app">
      <BoardComponent setBoard={setBoard} board={board}/>
    </div>
  );
}

export default App;
