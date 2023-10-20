import React from 'react';
import './App.css';
import BoardComponent  from './BoardComponent';
import { Board } from './models/Board';

const App = () => {
  return (
    <div className="app">
      <BoardComponent setBoard={console.log('smth')} board={Board}/>
    </div>
  );
}

export default App;
