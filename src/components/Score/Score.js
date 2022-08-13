import React from 'react'

import "./Score.css";

const Score = ({score, xPlayer}) => {
    
    const {xPlayerScore, oPlayerScore}= score;

    return (
        <div>
            <div className='scoreTable'>
                <div className={`score x-score ${!xPlayer && "inactive"}`} >X - {xPlayerScore} </div>
                <div className={`score y-score ${xPlayer && "inactive"}`} >O - {oPlayerScore} </div>
            </div>
        </div>
  )
}

export default Score;
