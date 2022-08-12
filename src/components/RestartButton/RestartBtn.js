import React from 'react'

import "./RestartBtn.css";

const RestartButton = ({restartGame}) => {
  return (
     <button className='restart-btn' onClick={restartGame}>Restart</button>
  )
}

export default RestartButton;
