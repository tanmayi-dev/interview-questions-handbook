### Tag : CoderByte

## Question

The game should work the following way: The first player to go places an X anywhere on the board by clicking on a square, and then the next player will be able to place an 0, and it continues alternating like this every turn

Implement a function to determine if any player won by getting 3 X's or O's in a diagonal, horizontal, or vertical row. If there is a wineer, display a message at the top. If nobody winds, then do not display any message. Finally, you should also implement the reset function that resets the entire borad. You should also not be able to override the other players move during the game.

You are free to add classes adn styles, but make sure you leave the elements IDS as they are.

```jsx
import React, { useState } from "react";
import { createRoot } from "react-dom/client";

const rowStyle = {
  display: "flex",
};

const squareStyle = {
  width: "60px",
  height: "60px",
  backgroundColor: "#ddd",
  margin: "4px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "20px",
  color: "black",
};

const boardStyle = {
  backgroundColor: "#eee",
  width: "208px",
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
  flexDirection: "column",
  border: "3px #eee solid",
};

const containerStyle = {
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
};

const instructionStyle = {
  marginTop: "5px",
  marginBottom: "5px",
  fontWeight: "bold",
  fontSize: "16px",
};

const buttonStyle = {
  marginTop: "15px",
  marginBottom: "16px",
  width: "80px",
  height: "40px",
  backgroundColor: "#8acaca",
  color: "white",
  fontSize: "16px",
};

function Square() {
  return <div className="square" style={squareStyle}></div>;
}

function Board() {
  return (
    <div style={containerStyle} className="gameBoard">
      <div id="statusArea" className="status" style={instructionsStyle}>
        Next player: <span>X</span>
      </div>
      <div id="winnerArea" className="winner" style={instructionsStyle}>
        Winner: <span>None</span>
      </div>

      <button style={buttonStyle}>Reset</button>
      <div style={boardStyle}>
        <div className="board-row" style={rowStyle}>
          <Square />
          <Square />
          <Square />
        </div>
        <div className="board-row" style={rowStyle}>
          <Square />
          <Square />
          <Square />
        </div>
        <div className="board-row" style={rowStyle}>
          <Square />
          <Square />
          <Square />
        </div>
      </div>
    </div>
  );
}

function Game() {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
    </div>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Game />);
```

## Solution

```jsx
import React, { useState } from "react";
import { createRoot } from "react-dom/client";

const containerStyle = {
  // Add your styles here for the container if needed
};

const boardStyle = {
  // Add your styles here for the game board if needed
};

const rowStyle = {
  // Add your styles here for the rows if needed
};

const squareStyle = {
  // Add your styles here for the square if needed
};

const instructionsStyle = {
  // Add your styles here for the instruction area if needed
};

const buttonStyle = {
  // Add your styles here for the reset button if needed
};

function Square({ value, onClick }) {
  return (
    <div className="square" style={squareStyle} onClick={onClick}>
      {value}
    </div>
  );
}

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isPlayerX, setIsPlayerX] = useState(true);

  const checkWinner = () => {
    // Define all possible winning combinations
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const combination of winningCombinations) {
      const [a, b, c] = combination;
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a]; // Return the player who won
      }
    }

    return null; // No winner
  };

  const handleClick = (index) => {
    if (squares[index] || checkWinner()) {
      // If the square is already filled or there's a winner, do nothing
      return;
    }

    // Update the square with the current player's symbol
    const updatedSquares = [...squares];
    updatedSquares[index] = isPlayerX ? "X" : "O";
    setSquares(updatedSquares);

    // Toggle the player's turn
    setIsPlayerX(!isPlayerX);
  };

  const handleReset = () => {
    setSquares(Array(9).fill(null));
    setIsPlayerX(true);
  };

  const winner = checkWinner();

  return (
    <div style={containerStyle} className="gameBoard">
      <div id="statusArea" className="status" style={instructionsStyle}>
        Next player: <span>{isPlayerX ? "X" : "O"}</span>
      </div>
      {winner ? (
        <div id="winnerArea" className="winner" style={instructionsStyle}>
          `Winner: ${winner}`
        </div>
      ) : null}

      <button style={buttonStyle} onClick={handleReset}>
        Reset
      </button>
      <div style={boardStyle}>
        <div className="board-row" style={rowStyle}>
          <Square value={squares[0]} onClick={() => handleClick(0)} />
          <Square value={squares[1]} onClick={() => handleClick(1)} />
          <Square value={squares[2]} onClick={() => handleClick(2)} />
        </div>
        <div className="board-row" style={rowStyle}>
          <Square value={squares[3]} onClick={() => handleClick(3)} />
          <Square value={squares[4]} onClick={() => handleClick(4)} />
          <Square value={squares[5]} onClick={() => handleClick(5)} />
        </div>
        <div className="board-row" style={rowStyle}>
          <Square value={squares[6]} onClick={() => handleClick(6)} />
          <Square value={squares[7]} onClick={() => handleClick(7)} />
          <Square value={squares[8]} onClick={() => handleClick(8)} />
        </div>
      </div>
    </div>
  );
}

function Game() {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
    </div>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Game />);
```
