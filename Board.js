import React, { useState } from "react";
import Cell from "./Cell";

function Board() {
  const [cells, setCells] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState(true);

  let status = "";
  let endGame = false;

  function calculateWinner(cells) {
    const winningPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winningPatterns.length; i++) {
      const [a, b, c] = winningPatterns[i];

      if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
        return cells[a];
      }
    }

    return null;
  }

  const handleClick = (i) => {
    if (calculateWinner(cells) || cells[i]) {
      return;
    }

    if (cells[i] == null) {
      cells[i] = isX ? "X" : "0";
      setCells(cells);
      setIsX(!isX);
    }

    const winner = calculateWinner(cells);

    if (winner) {
      status = `Winner: ${winner}`;
      alert(status);
    }
  };

  return (
    <div className="board">
      <div className="board-row">
        <Cell value={cells[0]} onClick={() => handleClick(0)} />
        <Cell value={cells[1]} onClick={() => handleClick(1)} />
        <Cell value={cells[2]} onClick={() => handleClick(2)} />
      </div>

      <div className="board-row">
        <Cell value={cells[3]} onClick={() => handleClick(3)} />
        <Cell value={cells[4]} onClick={() => handleClick(4)} />
        <Cell value={cells[5]} onClick={() => handleClick(5)} />
      </div>

      <div className="board-row">
        <Cell value={cells[6]} onClick={() => handleClick(6)} />
        <Cell value={cells[7]} onClick={() => handleClick(7)} />
        <Cell value={cells[8]} onClick={() => handleClick(8)} />
      </div>
    </div>
  );
}

export default Board;
