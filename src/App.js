import React, {useState} from 'react';
import './App.css';

const Game =()=>{
  const [board,setBoard]=useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer]=useState('X');
  const [winner, setWinner]=useState(null);

  const handleClick=(index)=>{
    if(board[index]===null && !winner){
      const newBoard=[...board];
      newBoard[index]=currentPlayer;
      setBoard(newBoard);
      checkWinner(newBoard);
      setCurrentPlayer(currentPlayer==='X'? '0':'X');
    }
  };
  const checkWinner=(board)=>{
    const lines=[
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6],
    ];
    for (let line of lines){
      const [a,b,c]=line;
      if(board[a] && board[a]===board[b] && board[a] ===board[c] ){
        setWinner(board[a]);
        return ;
      }
    }
    if(!board.includes(null)){
      setWinner('tie');
    }
  };
  const resetGame=()=>{
    setBoard(Array(9).fill(null));
    setCurrentPlayer('X');
    setWinner(null);
  };
  const renderSquare=(index)=>{
    return (
      <button className='square' onClick={()=>handleClick(index)}>
        {board[index]}
      </button>
    );
  };
  const status=winner?
  (winner==='tie'?'It\'s a Tie' : `Player ${winner} Won!`):
  `Current player: ${currentPlayer} `;

  return (
    <div className="game">
      <h1 className='title'>Tic Tac Toe</h1>
      <div className='board'>
        <div className='board-row'>
          {renderSquare(0)}
          {renderSquare(1)}
          (renderSquare(2))
        </div>
        <div className='board-row'>
        {renderSquare(3)}
          {renderSquare(4)}
          (renderSquare(5))
        </div>
        <div className='board-row'>
        {renderSquare(6)}
          {renderSquare(7)}
          (renderSquare(8))
        </div>
      </div>
      <div className='status'>{status}</div>
      <button className='reset-button' onClick={resetGame}>Reset</button>
      </div>

  );
};

function App(){
  return(
    <div className='App'>
      <header className='App-header'>
        <Game/>
        </header>
   
    </div>
  );
};

export default App;