import { WINNER_COMBINATIONS } from '../constants.js';

// Check if there is a winner
export const checkWinnerFrom = (newBoard) => {
    for (const combination of WINNER_COMBINATIONS) {
        const [a, b, c] = combination;
        if (newBoard[a] && newBoard[a] === newBoard[b] && newBoard[a] === newBoard[c]) {
            return newBoard[a];
        }
    }
    return null;
}

// Check if there is a tie
export const checkTie = (newBoard) => {
    return newBoard.every(cell => cell !== null);
}