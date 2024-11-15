import React, { useState, useRef, useEffect } from "react";
import Heading from "../SidebarHeading/Heading";
import controlimg from "../../assets/control/controlimg.png";
import threedots from "../../assets/cards/threedots.png";
import locationImage from "../../assets/location/locationimg.png";
import boatImage from "../../assets/location/boat.png";
import AddDestination from "../Form/AddDestination";
import { useDispatch, useSelector } from "react-redux";
import { getDestinations } from "../../Redux/Features/DestinationSlice";
import { useNavigate, useParams } from "react-router-dom";
import { getToursbyName, getToursbyNameAdmin } from "../../Redux/Features/ToursSlice";

const AllToursCards = () => {
  const dispatch = useDispatch();
  
  const navigate= useNavigate()

  const {name} = useParams()

  console.log(name,"TS")


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
    dispatch(getToursbyNameAdmin(name));
  }, []);

  const handleRefreshDestinations = () => {
   
    setShowPopup(false);
  };
  
  const Destinations= useSelector((state)=>state.tours.AllDestinationToursNameAdmin)

  console.log(Destinations,"ALLDES")


  const ViewSingleTour=(id)=>{

    navigate(`/tour/${id}`)



  }





  return (
    <section className="destination-section">
      <div className="main-destination">
        <Heading
          heading={"Location"}
          controlimg={controlimg}
        //   btn={"Add Destination"}
          onBtnClick={togglePopup}
        />
        <div className="locationCards">
          {Destinations?.map((item, i) => (
            <div key={i} className="locationCard" onClick={()=>ViewSingleTour(item._id)}>
              <div className="location-image">
                <img src={item?.Tour_Pictures[0]} alt="" />
              </div>
              <div className="location-details">
                <div className="location-name">
                  <h6>{item?.TourName}</h6>
                  {/* <div className="boats-count">
                    <div className="boat-count-img-div">
                      <img src={boatImage} alt="" />
                    </div>
                    <span>{item.total_boats} Boats</span>
                  </div> */}
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

export default AllToursCards;
