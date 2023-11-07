import './App.css'
import confetti from 'canvas-confetti'
import { useState } from 'react'
import {Square} from './components/Square'
import { TURNS } from './constants.js'
import { checkWinnerFrom, checkTie } from './logic/board.js'
import { WinnerModal } from './components/WinnerModal'

function App() {

  // States
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(TURNS.X);
  const [winner, setWinner] = useState(null);

  const updateBoard = (index) => {
    // Check if the cell is already filled or there is a winner
    if (board[index] || winner) return;

    // Update board
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    // Change turn
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    // Check if there is a winner
    const newWinner = checkWinnerFrom(newBoard);
    if (newWinner) {
      setWinner(newWinner);
      confetti();
      confetti();
      confetti();
      confetti();
      confetti();
      confetti();
    } else if (checkTie(newBoard)) {
      setWinner(false);
    }
  }

  // Reset the game 
  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
  }

  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>Reset game</button>
      <section className="game">
        {
          board.map((cell, index) => {
            return (
              <Square key={index} index={index} updateBoard={updateBoard}>{board[index]}</Square>
            )
          })
        }
      </section>
      {
        <WinnerModal resetGame={resetGame} winner={winner} />
      }
    </main>
  )
}

export default App
