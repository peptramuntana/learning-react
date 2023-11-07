// Component Square, which is a cell in the board
export const Square = ({ children, isSelected, updateBoard, index }) => {
    const className = isSelected ? 'square is-selected' : 'square';
    const handleClick = () => { updateBoard(index); }
  
    return (
      <span onClick={handleClick} className={className}>{children}</span>
    )
  }