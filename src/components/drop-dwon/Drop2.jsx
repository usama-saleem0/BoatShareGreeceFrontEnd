import React, { useState } from "react";
import DatePicker from "react-datepicker";


const Drop2 = () => {

    const [selectedOption, setSelectedOption] = useState('Date & Time');
    const [isOpen, setIsOpen] = useState(false);
    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    const [startDate, setStartDate] = useState(new Date());




    return (
        <>
    <div className="select-station-drop">
    <div className="select-container" onClick={() => setIsOpen(!isOpen)}>

    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}
                                                 />
</div>
                                    {isOpen && (
                                        <>
                                        
                                        </>
                                    )}
                                </div>
        </>
    )



}


export default Drop2