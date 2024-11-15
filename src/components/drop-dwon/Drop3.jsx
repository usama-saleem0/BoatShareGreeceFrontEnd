import React, { useState } from "react";


const Drop3 = ({TourData}) => {

    const [selectedOption, setSelectedOption] = useState('Duration');
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
                                    {isOpen && 
                                    <ul className="options-list" >

{
    TourData?.map((e,i)=>(


<li onClick={() => handleOptionClick(e)} className="select-option" key={i}>
 {e}
</li>


    ))

}


</ul>
}
                                </div>
        </>
    )



}


export default Drop3