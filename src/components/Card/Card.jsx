import React from "react";
import threedots from "../../assets/cards/threedots.png";
import tick from "../../assets/cards/tick.png";

const Card = ({ cardtitle, cardvalue, classStyle, date, increment }) => {
  return (
    <div className={`card ${classStyle}`}>
      <div className="card-details">
        <p>
          {cardtitle} {date && <span> {date}</span>}
        </p>
        <div className="three-dots">
          <img src={threedots} alt="" />
        </div>
      </div>
      <div className="card-value">
        <div className="yellow-img">
          <img src={tick} alt="" />
        </div>
        <div>
          <h6>{cardvalue}</h6>
          {increment && <p>{increment}% increase</p>}
        </div>
      </div>
    </div>
  );
};

export default Card;
