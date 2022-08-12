//Import CSS
import "./app.css";

//Import components
import Game from "../Game/Game";
import Score from "../Score/Score";
import ResetButton from "../RestartButton/RestartBtn";

//Import useState
import React, {useState} from "react";




function App() {

  const conditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]

  const [game, setGame] = useState(Array(9).fill(null));
  const [xPlayer, setXPlayer] = useState(true);
  const [score, setScore] = useState({xPlayerScore:0, oPlayerScore:0});
  const [gameFinish, setGameFinish] = useState(false);



  const handleClick = (boxIndex) => {
    const gameUpdate = game.map((value,index) => {
      if(index === boxIndex){
        return xPlayer === true ? "X" : "O";
      }else{
        return value;
      }
    })

    const winner = isWinner(gameUpdate);

    if(winner){
      if(winner === "X"){
        let {xPlayerScore} = score;
        xPlayerScore += 1
        setScore({...score, xPlayerScore}); 
      }else{
        let {oPlayerScore} = score;
        oPlayerScore += 1
        setScore({...score, oPlayerScore});
      }
    }



    setGame(gameUpdate);


    setXPlayer(!xPlayer);
  }

  const isWinner = (game) => {
    for(let i = 0; i < conditions.length; i++){
      const [a,b,c] = conditions[i];

      if(game[a] && game[a] === game[b] && game[b] === game[c]){
        setGameFinish(true);
        return game[a];
      }
    }
  }

  const restartGame = () => {
    setGameFinish(false);
    setGame(Array(9).fill(null));
  }

  

  return (
    <div className="App">
      <Score score = {score} xPlayer={xPlayer} />
      <Game game={game} onClick={gameFinish ? restartGame : handleClick} />
      <ResetButton restartGame = {restartGame} />
    </div>
  );
}

export default App;
