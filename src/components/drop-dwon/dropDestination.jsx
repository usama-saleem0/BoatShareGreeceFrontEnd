import React, { useState } from "react";


const DropDestination = ({TourData,TourNameCallback}) => {

    const [selectedOption, setSelectedOption] = useState('Depature Location');
    const [isOpen, setIsOpen] = useState(false);
    const handleOptionClick = (name) => {
        setSelectedOption(name);
        setIsOpen(false);

        TourNameCallback(name)
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

                                            {
                                                TourData?.map((e,i)=>(


                                            <li onClick={() => handleOptionClick(e)} className="select-option" key={i}>
                                             {e}
                                            </li>


                                                ))

                                            }

                                            
                                        </ul>
                                    )}
                                </div>
        </>
    )



}


export default DropDestination