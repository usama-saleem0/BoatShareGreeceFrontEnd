import React, { useState } from "react";
const Ar = () => {
  const [selectedOption, setSelectedOption] = useState("--Select an option--");
  const [isOpen, setIsOpen] = useState(false);
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };
  return (
    <>
      <div className="select-Rooms-drop-ar">
        <div onClick={() => setIsOpen(!isOpen)} className="01">
          {selectedOption}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.7073 15.7064C12.5198 15.8938 12.2655 15.9992 12.0003 15.9992C11.7352 15.9992 11.4809 15.8938 11.2933 15.7064L5.63634 10.0494C5.54083 9.95712 5.46465 9.84678 5.41224 9.72477C5.35983 9.60277 5.33225 9.47155 5.33109 9.33877C5.32994 9.20599 5.35524 9.07431 5.40552 8.95141C5.4558 8.82852 5.53006 8.71686 5.62395 8.62297C5.71784 8.52908 5.82949 8.45483 5.95239 8.40454C6.07529 8.35426 6.20696 8.32896 6.33974 8.33012C6.47252 8.33127 6.60374 8.35886 6.72575 8.41126C6.84775 8.46367 6.9581 8.53986 7.05034 8.63537L12.0003 13.5854L16.9503 8.63537C17.1389 8.45321 17.3915 8.35241 17.6537 8.35469C17.9159 8.35697 18.1668 8.46214 18.3522 8.64755C18.5376 8.83296 18.6427 9.08377 18.645 9.34597C18.6473 9.60816 18.5465 9.86076 18.3643 10.0494L12.7073 15.7064Z"
              fill="#273043"
              fill-opacity="0.8"
            />
          </svg>
        </div>
        {isOpen && (
          <ul className="options-list  Rooms-list">
            <li
              onClick={() => handleOptionClick("Option1")}
              className="select-option"
            >
              Option01
            </li>
            <li
              onClick={() => handleOptionClick("Option2")}
              className="select-option"
            >
              Option02
            </li>
            <li
              onClick={() => handleOptionClick("Option3")}
              className="select-option"
            >
              Option03
            </li>
          </ul>
        )}
      </div>
    </>
  );
};
export default Ar;
