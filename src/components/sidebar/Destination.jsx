import React, { useState, useRef, useEffect } from "react";
import Heading from "../SidebarHeading/Heading";
import controlimg from "../../assets/control/controlimg.png";
import threedots from "../../assets/cards/threedots.png";
import locationImage from "../../assets/location/locationimg.png";
import boatImage from "../../assets/location/boat.png";
import AddDestination from "../Form/AddDestination";
import { useDispatch, useSelector } from "react-redux";
import { getDestinations } from "../../Redux/Features/DestinationSlice";
import { useNavigate } from "react-router-dom";

const Destination = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef(null);

  const togglePopup = () => {
    setShowPopup((prevState) => !prevState);
  };

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setShowPopup(false);
    }
  };

  useEffect(() => {
    if (showPopup) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showPopup]);

  useEffect(() => {
    dispatch(getDestinations());
  }, []);

  const handleRefreshDestinations = () => {
    dispatch(getDestinations());
    setShowPopup(false);
  };
  const { AllDestinations, loading, error } = useSelector(
    (state) => state.destinations
  );

  const handleViewAllTours=(name)=>{

    navigate(`alltours/${name}`)


  }




  return (
    <section className="destination-section">
      <div className="main-destination">
        <Heading
          heading={"Location"}
          controlimg={controlimg}
          btn={"Add Destination"}
          onBtnClick={togglePopup}
        />
        <div className="locationCards">
          {AllDestinations?.map((item, i) => (
            <div key={i} className="locationCard" onClick={()=>handleViewAllTours(item.Destination_Name)}>
              <div className="location-image">
                <img src={item.image} alt="" />
              </div>
              <div className="location-details">
                <div className="location-name">
                  <h6>{item.Destination_Name}</h6>
                  <div className="boats-count">
                    <div className="boat-count-img-div">
                      <img src={boatImage} alt="" />
                    </div>
                    <span>{item?.tourCount} Tours</span>
                  </div>
                </div>
                <div className="three-dots">
                  <img src={threedots} alt="" />
                </div>
              </div>
            </div>
          ))}
        </div>
        {showPopup && (
          <div ref={popupRef}>
            <AddDestination onsuccess={handleRefreshDestinations} />
          </div>
        )}
      </div>
    </section>
  );
};

export default Destination;
