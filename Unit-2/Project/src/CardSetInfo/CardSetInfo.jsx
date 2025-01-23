import React from "react";

function CardSetInfo({ title, description, totalCards }) {
    return (
      <div className="card-set-info">
        <h2 style={{color: "blanchedalmond"}}>{title}</h2>
        <h4 style={{color: "blanchedalmond"}}>{description}</h4>
        <h4 style={{color: "blanchedalmond"}}>Total Cards: {totalCards}</h4>
      </div>
    );
  }
  
  export default CardSetInfo;