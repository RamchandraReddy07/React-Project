import React from "react";

function FlashCard({ question, answer, isFlipped, onFlip ,color}) {
    return (
      <div className="flashcard-container">
        <div
          className={`flashcard ${isFlipped ? 'is-flipped' : ''}`}
          onClick={onFlip} 
        >
          <div className="flashcard-front" style={{ backgroundColor: color }}>
            <p>{question}</p>
          </div>
          <div className="flashcard-back" style={{ backgroundColor: color }}>
            <p>{answer}</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default FlashCard;