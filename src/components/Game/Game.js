import "./Game.css"

import React from 'react'

import Box from "../Box/Box";

const Game = ({game, onClick}) => {
  return (
    <div className="game">
    {game.map((value, index) => {
       return <Box value={value} onClick={() => value === null && onClick(index)} />
    })}
    </div>
  )
}

export default Game;