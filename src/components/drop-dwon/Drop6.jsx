import React, { useState } from "react";


const Drop6 = () => {

    const [selectedOption, setSelectedOption] = useState('Location');
    const [isOpen, setIsOpen] = useState(false);
    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };



    return (
        <>
    <div className="select-station-drop">
                                    <div className="select-container" onClick={() => setIsOpen(!isOpen)}>

                                        <span className="selected-option">{selectedOption}</span>
                                        <div className="select-tv-icon">

                                        </div>
                                    </div>
                                    {isOpen && (
                                         <ul className="options-list" >
                                         <li onClick={() => handleOptionClick('Option1')} className="select-option">
                                          Option1
                                         </li>
                                         <li onClick={() => handleOptionClick('Option2')} className="select-option">
                                         Option2
                                         </li>
                                         <li onClick={() => handleOptionClick('Option3')} className="select-option">
                                         Option3
                                         </li>
                                         <li onClick={() => handleOptionClick('Option4')} className="select-option">
                                         Option4
                                         </li>
                                         <li onClick={() => handleOptionClick('Option5')} className="select-option">
                                         Option5
                                         </li>
                                     </ul>
                                    )}
                                </div>
        </>
    )



}


export default Drop6