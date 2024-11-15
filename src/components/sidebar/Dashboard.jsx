import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Heading from "../SidebarHeading/Heading";
import controlimg from "../../assets/control/controlimg.png";
import Card from "../Card/Card";
import bookingChartImage from "../../assets/dashboard/bookingchart.png";
import incomechartImage from "../../assets/dashboard/incomechart.png";
import locationImage from "../../assets/dashboard/locationimg.png";
import threedots from "../../assets/dashboard/dash-threedots.png";
import location from "../../assets/dashboard/location.png";
import RecentActivity from "../RecentActivity/RecentActivity";
import BookingChart from "../Charts/BookingChart";
import { useDispatch, useSelector } from "react-redux";
import { allOrders } from "../../Redux/Features/addOrderSlice";
import { getCustomers } from "../../Redux/Features/CustomerSlice";
import { getTours } from "../../Redux/Features/ToursSlice";
const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allOrders());
    dispatch(getCustomers());
    dispatch(getTours());
  }, []);

  const Bookings = useSelector((state) => state.order.allOrders);

  const CustomerData = useSelector((state) => state.customer.Customers);

  const { AllTours, loading, error } = useSelector((state) => state.tours);

  const TotalRevenue = Bookings.reduce(
    (accu, currentvalue) => accu + currentvalue?.bookingDetails?.TotalPrice,
    0
  );

  console.log(TotalRevenue, "TOT", Bookings);

  return (
    <>
      <section className="dashboard-section">
        <div className="main-dashboard">
          <div className="padding-top-ar-dash">
            <Heading heading={"Dashboard"} controlimg={controlimg} />
            <div className="dashboard-details">
              <div className="cards-chart">
                <div className="dashboard-cards">
                  <Card
                    cardtitle={"Bookings"}
                    cardvalue={Bookings ? Bookings.length : "0"}
                    classStyle={"dashboard-card"}
                    // date={"Today"}
                    increment={"12"}
                  />
                  <Card
                    cardtitle={"Revenue"}
                    cardvalue={`${TotalRevenue} €`}
                    classStyle={"dashboard-card"}
                    // date={"This Month"}
                    increment={"10"}
                  />
                  <Card
                    cardtitle={"Customer"}
                    cardvalue={CustomerData ? CustomerData.length : "0"}
                    classStyle={"dashboard-card"}
                    // date={"This Month"}
                    increment={"3"}
                  />
                </div>
                <div className="chart-dashboard">
                  <BookingChart Bookings={Bookings} />
                </div>
              </div>
              <RecentActivity />
            </div>
            <div className="dashboard-table-chart">
              <div className="dashboard-table">
                <h6>Tour Details</h6>
                <div className="dash-table">
                  <div className="table-wrapper">
                    <table>
                      <thead>
                        <tr>
                          <th>Location</th>
                          <th>Duration</th>
                          <th>Available Seats</th>
                          <th>Price</th>
                        </tr>
                      </thead>
                      <tbody>
                        {AllTours?.map((item, index) => (
                          <tr key={index}>
                            <td>
                              <div className="customer-profile">
                                <div className="location-img">
                                  <img
                                    src={item?.Tour_Pictures[0]}
                                    alt={`Location ${index + 1}`}
                                  />
                                </div>
                                <span>{item?.Region}</span>
                              </div>
                            </td>
                            <td>{item?.TourDuration}</td>
                            <td>{item?.Max_Capacity}</td>
                            <td>{item?.price} Euro/Person</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="income-location">
                <div className="income-chart">
                  {/* <img src={incomechartImage} alt="" /> */}
                </div>
                <div className="dashboard-location">
                  <div className="underline">
                    <h5>Location</h5>
                  </div>
                  <div className="dashboard-locations">
                    {AllTours?.map((loc, i) => (
                      <div key={i} className="location">
                        <div className="location-div">
                          <div className="location-img-div">
                            <img src={loc?.Tour_Pictures[0]} alt="" />
                          </div>
                          <p>{loc?.TourName}</p>
                        </div>
                        <div className="threedots">
                          <img src={threedots} alt="" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
