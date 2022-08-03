import './App.css';
import Board from './Board';
import Square from './square';
import {useState, useEffect} from 'react';

const defaultSquares = () => (new Array(9)).fill(null);
// function delay(seconds) {
//   return new Promise(res => setTimeout(res, seconds))
// }

const lines = [
  [0,1,2], [3,4,5], [6,7,8],
  [0,3,6], [1,4,7], [2,5,8],
  [0,4,8], [2,4,6]
]



function App() {
  const [squares, setSquares] = useState(defaultSquares());

  useEffect( () => {
    const isComputerTurn = squares.filter(square => square !==null).length %2 ===1;
    
    const PutComputerAt = index => {
      let newSquares = squares;
      newSquares[index] = 'O';
      setSquares([...newSquares]);
    }

    if (isComputerTurn) {
      //alert("It's Compurer's Turn!!");
      const emptyIndexes = squares
        .map((square, index) => square === null ? index : null)
        .filter(val => val !== null);

      const randomIndex = emptyIndexes[Math.ceil(Math.random()*emptyIndexes.length)];
      
      PutComputerAt(randomIndex);

      
    }
  },[squares]);

  function handleSquareClick(index) {
    const isPlayerTurn = squares.filter(square => square !== null).length % 2 ===0;
    if(isPlayerTurn) {

      let newSquares = squares;
      newSquares[index] = 'X';
      setSquares([...newSquares]);
    }      
  }

  return (
    <main>
      <Board>
        {squares.map((square,index)=> 
          <Square 
            X={square==='X'?1:0}
            O={square==='O'?1:0}
            onClick={() => handleSquareClick(index)} />
        )}
      </Board>
    </main>
  );
}

export default App;
