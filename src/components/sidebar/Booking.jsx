import React, { useEffect } from "react";
import Heading from "../SidebarHeading/Heading";
import controlimg from "../../assets/control/controlimg.png";
import Card from "../Card/Card";
import customerimg from "../../assets/customer/customerimg.png";
import edit from "../../assets/customer/edit.png";
import deleteimg from "../../assets/customer/delete.png";
import { useDispatch, useSelector } from "react-redux";
import { allOrders } from "../../Redux/Features/addOrderSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Booking = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(allOrders());
  }, []);

  const Bookings = useSelector((state) => state.order.allOrders);

  console.log(Bookings, "BOOKINS");

  const DateFormatCustom = (date) => {
    let x = date;

    const month = [
      "ts",
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const mm = x.split("-")[1];

    const yy = x.split("-")[0];

    const dd = x.split("-")[2];

    const y = mm[0].includes("0") ? mm.split("0")[1] : mm;

    // console.log(y)

    const final_date = dd + " " + month[y] + " " + yy;

    return final_date;

    // console.log(dd,month[y],yy)
  };

  const TotalGuest = (bookingDetails) => {
    const Arr = bookingDetails.map((e) => parseInt(e.NumberofGuests));

    console.log(Arr);

    let total = 0;

    Arr.forEach((element) => {
      total = total + element;
    });

    return total;
  };

  const ViewTour = (id) => {
    navigate(`/tour/${id}`);
  };

  return (
    <section className="booking-section">
      <div className="main-booking">
        <div className="padding-top-ar-dash">
          <Heading heading={"Booking"} controlimg={controlimg} />
          <div className="cards" style={{ paddingBottom: "50px" }}>
            <Card
              cardtitle={"Total Bookings"}
              cardvalue={Bookings?.length ? Bookings?.length : "0"}
            />
            <Card cardtitle={"Pending Books"} cardvalue={"0"} />
            <Card cardtitle={"Confirm Booking"} cardvalue={"0"} />
            <Card cardtitle={"Cancelled Bookings"} cardvalue={"0"} />
          </div>
          <div className="booking-table">
            <div className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>Payment Date</th>
                    <th>Customer Name</th>
                    <th>email</th>
                    <th>Phone No</th>
                    <th>Seats</th>
                    <th>Duration</th>
                    <th>Total</th>
                    <th>Booking Date</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {Bookings?.map((booking, index) => (
                    <tr key={index}>
                      <td>
                        {booking &&
                          DateFormatCustom(booking?.createdAt.split("T")[0])}
                      </td>
                      <td>{booking?.Name}</td>
                      <td>{booking?.email}</td>
                      <td>{booking?.phoneno}</td>
                      <td>{booking?.bookingDetails?.NumberofGuests}</td>
                      <td>{booking?.bookingDetails?.TourName?.TourDuration}</td>
                      <td> €{booking?.bookingDetails?.TotalPrice}</td>
                      <td>
                        {booking &&
                          DateFormatCustom(
                            booking?.bookingDetails?.Date?.split("T")[0]
                          )}
                      </td>
                      <td className="viwe-box-btn">
                        <button
                          className={`status-btn ${booking?.paymentStatus}`}
                          onClick={() =>
                            ViewTour(booking?.bookingDetails?.TourID)
                          }
                        >
                          View Tour
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
