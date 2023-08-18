import './App.css'
import Square from "./components/square.jsx";
import {useState} from "react";
import calculateWinner from "./utils/calculateWinner.jsx";
import Board from "./components/Board.jsx";

function App() {
    const [xIsNext, setXIsNext] = useState(true);
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const currentSquares = history[history.length - 1];
console.log(history)
    function handlePLay(nextSquares) {
        setHistory([...history, nextSquares]);
        setXIsNext(!xIsNext);
    }

    return (
        <div className="game">
            <div className="game-board">
                <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePLay}/>
            </div>
            <div className="game-info">
                <ol>{/*TODO*/}</ol>
            </div>
        </div>
    );
}

export default App
