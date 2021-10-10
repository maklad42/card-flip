import React, { useState, useCallback } from 'react'
import './card.css';

const Card = () => {

  const [flipped, setFlipped] = useState(false);
  const toggleFlip = useCallback(
    () => setFlipped(!flipped),
    [flipped, setFlipped],
  );

  return (
    <>
    <div className={`flip-card${flipped ? " flip" : ""}`}>
      <div className="flip-card-inner">
        <div className="flip-card-front" onCLick={toggleFlip}>
          Why did the programmer quit his job?
          <p className="filtered-category"></p>
        </div>
        <div className="flip-card-back" onCLick={toggleFlip}>
          <p>Because he didn't get arrays.</p>
        </div>
      </div>
    </div>
      </>
  );
}

export default Card;

