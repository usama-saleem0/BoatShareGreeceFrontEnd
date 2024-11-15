import React from "react";
import threedots from "../../assets/dashboard/dash-threedots.png";
import { useSelector } from "react-redux";
const RecentActivity = () => {
  const activityArray = [
    {
      id: 1,
      time: "3hrs",
      detail:
        "Lorem Ipsum is simply dummy text of the printing and typesetting",
    },
    {
      id: 2,
      time: "3hrd",
      detail:
        "Lorem Ipsum is simply dummy text of the printing and typesetting",
    },
    {
      id: 3,
      time: "33min",
      detail:
        "Lorem Ipsum is simply dummy text of the printing and typesetting",
    },
    {
      id: 4,
      time: "5hrs",
      detail:
        "Lorem Ipsum is simply dummy text of the printing and typesetting",
    },
    {
      id: 5,
      time: "33min",
      detail:
        "Lorem Ipsum is simply dummy text of the printing and typesetting",
    },
    {
      id: 5,
      time: "33min",
      detail:
        "Lorem Ipsum is simply dummy text of the printing and typesetting",
    },
    {
      id: 5,
      time: "33min",
      detail:
        "Lorem Ipsum is simply dummy text of the printing and typesetting",
    },
  ];


  function calculateTimeDifference(inputDate) {
    const currentDate = new Date(); // Get the current date and time
    const givenDate = new Date(inputDate); // Convert the input date string to a Date object
  
    const diffInMilliseconds = currentDate - givenDate; // Calculate the difference in milliseconds
  
    // Convert the time difference into hours, minutes, and seconds
    const diffInSeconds = Math.floor(diffInMilliseconds / 1000);
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    const diffInHours = Math.floor(diffInMinutes / 60);
    const diffInDays = Math.floor(diffInHours / 24);
  
    if (diffInDays > 0) {
      return `${diffInDays} day${diffInDays > 1 ? 's' : ''}`;
    } else if (diffInHours > 0) {
      return `${diffInHours} hr${diffInHours > 1 ? 's' : ''}`;
    } else if (diffInMinutes > 0) {
      return `${diffInMinutes} minute${diffInMinutes > 1 ? 's' : ''}`;
    } else {
      return `${diffInSeconds} second${diffInSeconds > 1 ? 's' : ''}`;
    }
  }

  const Bookings = useSelector((state)=>state.order.allOrders)

  return (
    <div className="recent-activities">
      <div className="underline">
        <h5>Recent Activities</h5>
      </div>
      <div className="activities">
        {Bookings?.map((activity, i) => (
          <div key={i} className="activity">
            <div className="time-div">
              <p>{activity && calculateTimeDifference(activity?.createdAt)}</p>
            </div>
            <div
              className="activity-detail-div"
              style={{
                borderLeft:
                  i === activityArray.length - 1 ? "none" : "1px solid #000",
              }}
            >
              <div className="activity-cicle"></div>
              <p>{activity&&(`${activity?.Name} has book ${activity?.bookingDetails?.NumberofGuests} tickets for the ${activity?.bookingDetails?.TourName?.TourName} Tour `)}</p>
              {i === 0 && (
                <div className="threedots">
                  <img src={threedots} alt="Three Dots" />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;
