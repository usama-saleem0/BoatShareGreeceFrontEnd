import React, { useState } from "react";


const Drop4 = () => {

    const [selectedOption, setSelectedOption] = useState('No. of Guest');
    const [isOpen, setIsOpen] = useState(false);
    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };



    return (
        <>
    <div className="select-station-drop">
                                    <div className="select-container" onClick={() => setIsOpen(!isOpen)}>

                                    <input
                                           placeholder="No of Guests"
                                           type="number"
                                           
                                           
                                           />
                                    </div>
                                     
                                </div>
        </>
    )



}


export default Drop4