import React from "react";
import HeaderButton from "./HeaderButton";

const Heading = ({ heading, controlimg, btn, onBtnClick }) => {
  return (
    <div className="main-heading">
      <h5>{heading}</h5>
      <div className="heading-button-div">
        {btn && <HeaderButton text={btn} onBtnClick={onBtnClick} />}

        <div className="control-img">
          <img src={controlimg} />
        </div>
      </div>
    </div>
  );
};

export default Heading;
