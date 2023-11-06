import './App.css'
import { useState } from 'react'
const TURNS = {
  X: 'X',
  O: 'O',
}

const Square = ({children, isSelected, updateBoard, index}) => {

  const className = isSelected ? 'square is-selected' : 'square';
  const handleClick = () => {updateBoard(index);}

  return (
    <span onClick={handleClick} className={className}>{children}</span>
  )
}

function App() {

  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(TURNS.X);

  const updateBoard = (index) => {

   if (board[index]) return;


    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);
    
  }

  return (
    <main className="board">
      <section className="game">
        {
          board.map((cell, index) => {
            return (
              <Square key={index} index={index} updateBoard={updateBoard}>{board[index]}</Square>
            )
          })
        }
      </section>
    </main>
  )
}

export default App
