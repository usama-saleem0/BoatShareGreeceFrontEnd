import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import dashboardimg from "../../assets/sidebar/dashboardimg.png";
import customerimg from "../../assets/sidebar/customerimg.png";
import bookingimg from "../../assets/sidebar/bookingimg.png";
import destinationimg from "../../assets/sidebar/destinationimg.png";
import tourimg from "../../assets/sidebar/tourimg.png";
// import iconavatar from "../../assets/Images/Avatar.png"
// import iconphone from "../../assets/Images/Smartphone.png"
// import iconHeart from "../../assets/Images/Heart.png"
// import iconCart from "../../assets/Images/iconcart.png"
// import iconBox from "../../assets/Images/icon (1).png"

const SidebarContainer = styled.div`
  width: 250px;

  background-color: #333;
  color: #fff;
  padding: 20px;
`;

const SidebarItem = styled.div`
  padding: 10px;
  margin-bottom: 10px;
  background-color: #444;
  cursor: pointer;

  &:hover {
    background-color: #555;
  }
`;

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setShowButton(window.innerWidth <= 768);

      if (window.innerWidth <= 768) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const [index, setindex] = useState(0);

  const handleChangeIndex = (p) => {
    if (window.innerWidth <= 768) {
      setindex(p);
      setIsOpen(!isOpen);
    } else {
      setindex(p);
    }
  };

  return (
    <>
      {showButton && (
        <div className="ahti" style={{ position: "fixed", top: "0" }}>
          {/* <input class="label-check" id="label-check" type="checkbox"  onClick={()=>{toggleSidebar()}}/>
    <label for="label-check" class="hamburger-label">
      <div class="line1"></div>
      <div class="line2"></div>
      <div class="line3"></div>
    <label></label></label> */}
        <input type="checkbox" id="checkbox" onClick={() => {
              toggleSidebar();
            }}/>
    <label for="checkbox" class="toggle">
        <div class="bars" id="bar1"></div>
        <div class="bars" id="bar2"></div>
        <div class="bars" id="bar3"></div>
    </label>
        </div>
      )}

      <div
        className="side-bar-container-thiviyo"
        style={{ display: isOpen ? "block" : "none" }}
      >
        <div className="fix-side-box">
          <Link
            to=""
            className="none-list"
            onClick={() => handleChangeIndex(0)}
          >
            <div className="side-bar-item-child">
              <div className="side-nav-pic">
                <img className="img-icon-bar" src={dashboardimg} alt="" />
              </div>{" "}
              Dashboard
            </div>
          </Link>

          <Link
            className="none-list"
            to="customerdetails"
            onClick={() => handleChangeIndex(2)}
          >
            <div className="side-bar-item-child">
              <div className="side-nav-pic">
                <img className="img-icon-bar" src={customerimg} alt="" />
              </div>
              Our Customer
            </div>
          </Link>

          <Link
            className="none-list"
            to="booking"
            onClick={() => handleChangeIndex(3)}
          >
            <div className="side-bar-item-child">
              <div className="side-nav-pic">
                <img className="img-icon-bar" src={bookingimg} alt="" />
              </div>
              Bookings
            </div>
          </Link>
          <Link
            className="none-list"
            to="destination"
            onClick={() => handleChangeIndex(4)}
          >
            <div className="side-bar-item-child">
              <div className="side-nav-pic">
                <img className="img-icon-bar" src={destinationimg} alt="" />
              </div>
              Destination
            </div>
          </Link>

          <Link
            className="none-list"
            to="tour"
            onClick={() => handleChangeIndex(5)}
          >
            <div className="side-bar-item-child">
              <div className="side-nav-pic">
                <img className="img-icon-bar" src={tourimg} alt="" />
              </div>
              Tour
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;


