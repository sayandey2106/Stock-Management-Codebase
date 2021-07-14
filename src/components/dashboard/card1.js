import React from "react";
import "./card1.css";

function Card1(props) {
  return (
    <div className="card-one" id={props.color}>
      <p id="p-1">{props.number}</p>
      <p id="p-2">{props.cardName}</p>
    </div>
  );
}

export default Card1;
