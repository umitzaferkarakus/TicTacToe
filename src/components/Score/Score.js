import React from 'react'

import "./Score.css";

const Score = ({score, xPlayer}) => {
    
    const {xPlayerScore, oPlayerScore}= score;

    return (
        <div className='scoreTable'>
            <span className={`score x-score ${!xPlayer && "inactive"}`} >X - {xPlayerScore} </span>
            <span className={`score y-score ${xPlayer && "inactive"}`} >O - {oPlayerScore} </span>
        </div>
  )
}

export default Score;
