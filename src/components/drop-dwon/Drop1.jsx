import React, { useState } from "react";


const Drop1 = ({TourData,TourNameCallback}) => {

    const [selectedOption, setSelectedOption] = useState('Depature Location');
    const [isOpen, setIsOpen] = useState(false);
    const handleOptionClick = (option,name) => {
        setSelectedOption(name);
        setIsOpen(false);

        TourNameCallback(option)
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


                                            <li onClick={() => handleOptionClick(e?._id,e?.TourName)} className="select-option" key={i}>
                                             {e?.TourName}
                                            </li>


                                                ))

                                            }

                                            
                                        </ul>
                                    )}
                                </div>
        </>
    )



}


export default Drop1