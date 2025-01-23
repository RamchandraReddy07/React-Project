import React from "react";

function Controls({ onNext }) {
    return (
      <div className="controls">
        <button onClick={onNext}>Next Card</button>
      </div>
    );
  }
  
  export default Controls;