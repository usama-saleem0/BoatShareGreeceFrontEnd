import React, { useEffect, useRef, useState } from "react";
import Heading from "../SidebarHeading/Heading";
import controlimg from "../../assets/control/controlimg.png";
import shipImage from "../../assets/location/shipimg.png";
import destinationimg from "../../assets/location/destination.png";
import durationimg from "../../assets/location/duration.png";
import seatsimg from "../../assets/location/seats.png";
import priceimg from "../../assets/location/price.png";
import threedots from "../../assets/cards/threedots.png";
import AddTour from "../Form/AddTour";
import { useDispatch, useSelector } from "react-redux";
import { getSingleTour, getTours } from "../../Redux/Features/ToursSlice";
import Carousel from "../Carousel/Carousel";
import TourDescription from "../Memorable/TourDescription";

const Tour = () => {
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef(null);
  const dispatch = useDispatch();
  const [selectedTourindex, setselectedTourindex] = useState(0);

  const togglePopup = () => {
    setShowPopup((prevState) => !prevState);
  };
  const handleTourClick = (tour) => {
    setselectedTourindex(tour); // Set the selected tour when clicked
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
    dispatch(getTours());
  }, []);
  const { AllTours, loading, error } = useSelector((state) => state.tours);
  // useEffect(() => {
  //   if (!selectedTour && AllTours && AllTours.length > 0) {
  //     setSelectedTour(AllTours[0]); // Set the first tour as the selected tour by default
  //   }
  // }, []);
  return (
    <section className="tour-section">
      <div className="main-tour">
        <div className="padding-top-ar-dash">
          <Heading
            heading={"Tours"}
            controlimg={controlimg}
            btn={"Upload Tour"}
            onBtnClick={togglePopup}
          />

          <div className="tour-card">
            <div className="tour-details">
              <h6>Tour Details</h6>
              <div className="ship-image">
                <Carousel images={AllTours[selectedTourindex]?.Tour_Pictures} />
                {/* <img src={s} alt="" /> */}
              </div>
              <div className="ship-description-div">
                <div className="ship-description">
                  <h5>{AllTours[selectedTourindex]?.TourName}</h5>
                  <div className="ship-details">
                    <div className="ship-destination">
                      <div className="parameters">
                        <div className="destination-img">
                          {" "}
                          <img src={destinationimg} alt="" />
                        </div>

                        <p>Destination</p>
                      </div>
                      <p>{AllTours[selectedTourindex]?.Region}</p>
                    </div>
                    <div className="ship-destination">
                      <div className="parameters">
                        <div className="destination-img">
                          <img src={durationimg} alt="" />
                        </div>

                        <p>Duration</p>
                      </div>
                      <p>{AllTours[selectedTourindex]?.TourDuration}</p>
                    </div>
                    <div className="ship-destination">
                      <div className="parameters">
                        <div className="destination-img">
                          <img src={seatsimg} alt="" />
                        </div>
                        <p>Seats Available</p>
                      </div>
                      <p>{AllTours[selectedTourindex]?.Max_Capacity}</p>
                    </div>
                    {/* <div className="ship-destination">
                    <div className="parameters">
                      <div className="destination-img">
                        <img src={priceimg} alt="" />
                      </div>

                      <p>Total Price</p>
                    </div>
                    <p>{AllTours[selectedTourindex]?.price}</p>
                  </div> */}
                  </div>
                </div>
                <div className="perhead">
                  <p>Per Person : {AllTours[selectedTourindex]?.price} €</p>
                </div>
              </div>
              <div style={{ display: "flex" }} className="description-of-tour">
                <h6>Description</h6>
                {/* <p>{AllTours[selectedTourindex]?.Tour_Description}</p> */}
                <TourDescription
                  description={AllTours[selectedTourindex]?.Tour_Description}
                />
              </div>
              <div style={{ display: "flex" }} className="description-of-tour">
                <h6>Location</h6>
                <div>
                  {AllTours[selectedTourindex]?.Locations.map((loc, i) => (
                    <p key={i}>{loc}</p>
                  ))}
                </div>
              </div>
            </div>

            <div className="total-tours">
              <div className="tour-header">
                <h6>Tours</h6>
                <div className="three-dots">
                  <img src={threedots} alt="" />
                </div>
              </div>
              <div className="all-tours">
                {AllTours?.map((tour, i) => (
                  <div
                    className="tour-1"
                    key={i}
                    onClick={() => handleTourClick(i)}
                  >
                    <div className="tour-location">
                      <div className="tour-location-img">
                        <img src={tour?.coverImage} alt="" />
                      </div>
                      <div className="tour-location-details">
                        <h6>{tour.Locations[0]}</h6>
                        <p>{tour.Region}</p>
                      </div>
                    </div>
                    <button className="tour-availibilty-btn">Available</button>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {showPopup && (
            <div ref={popupRef}>
              {" "}
              <AddTour />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Tour;
