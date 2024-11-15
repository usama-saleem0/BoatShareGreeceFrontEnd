import React from "react";

const HeaderButton = ({ text, onBtnClick }) => {
  return (
    <button onClick={onBtnClick} className="header-button">
      {text}
    </button>
  );
};

export default HeaderButton;
