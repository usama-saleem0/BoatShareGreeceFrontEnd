// import React, { useState, useRef } from "react";
// import { Line } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";

// // Register Chart.js modules
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const BookingChart = () => {
//   const chartRef = useRef(null);

//   console.log("CHARTTTTT")

//   const [timeframe, setTimeframe] = useState("monthly");

//   const getGradient = (ctx, chartArea) => {
//     const gradient = ctx.createLinearGradient(
//       0,
//       chartArea.top,
//       0,
//       chartArea.bottom
//     );
//     gradient.addColorStop(0, "#765DFF"); // Start color at the top
//     gradient.addColorStop(0.5, "#CFCAFF"); // Mid color
//     gradient.addColorStop(1, "#FFFFFF"); // End color at the bottom
//     return gradient;
//   };

//   const dataSets = {
//     daily: {
//       labels: Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`), // Example daily labels (Day 1, Day 2, etc.)
//       data: Array.from({ length: 30 }, () =>
//         Math.floor(Math.random() * 3000 + 1000)
//       ), // Random daily data
//     },
//     weekly: {
//       labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"], // Example weekly labels
//       data: [5000, 7000, 8000, 6000, 9000], // Weekly data
//     },
//     monthly: {
//       labels: [
//         "Jan",
//         "Feb",
//         "Mar",
//         "Apr",
//         "May",
//         "Jun",
//         "Jul",
//         "Aug",
//         "Sep",
//         "Oct",
//         "Nov",
//         "Dec",
//       ],
//       data: [
//         1200, 1000, 1500, 1300, 2200, 3000, 2800, 1348, 2000, 1800, 2100, 2400,
//       ], // Monthly data
//     },
//   };

//   const selectedData = dataSets[timeframe];

//   const data = {
//     labels: selectedData.labels,
//     datasets: [
//       {
//         label: "Sales",
//         data: selectedData.data,
//         borderColor: "rgba(6, 17, 56, 1)", // Dark blue curve
//         backgroundColor: (context) => {
//           const chart = context.chart;
//           const { ctx, chartArea } = chart;
//           if (!chartArea) {
//             return null;
//           }
//           return getGradient(ctx, chartArea);
//         },
//         fill: true, // Fill area under the curve
//         tension: 0.8, // Smooth curves
//         pointBackgroundColor: "rgba(255, 255, 255, 1)", // White dots for points
//         pointHoverRadius: 12,
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: "top",
//       },
//       tooltip: {
//         callbacks: {
//           label: function (context) {
//             return `Sales: ${context.raw} \n$${(context.raw * 2.5).toFixed(2)}`;
//           },
//         },
//       },
//     },
//     scales: {
//       y: {
//         position: "right", // Display Y-axis on the right
//         beginAtZero: true,
//         max: 10000,
//         ticks: {
//           stepSize: 2000, // Set the gap to 2k
//           callback: function (value) {
//             return value === 0 ? value : value / 1000 + "k"; // Convert numbers to k format
//           },
//         },
//         grid: {
//           drawBorder: true, // Draw horizontal lines only
//           display: true,
//         },
//       },
//       x: {
//         grid: {
//           drawOnChartArea: false, // Disable vertical grid lines
//         },
//       },
//     },
//   };

//   return (
//     <div>
//       {/* Add heading for chart */}
//       <div className="chart-heading">
//         <div className="card-details">
//           <p>
//             Booking <span>Today</span>
//           </p>
//         </div>
//         <div className="booking-chart-buttons">
//           <button onClick={() => setTimeframe("daily")}>Daily</button>
//           <button onClick={() => setTimeframe("weekly")}>Weekly</button>
//           <button onClick={() => setTimeframe("monthly")}>Monthly</button>
//         </div>
//       </div>

//       <Line ref={chartRef} data={data} options={options} />
//     </div>
//   );
// };

// export default BookingChart;

// import React, { useState, useEffect, useRef } from "react";
// import { Line } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import { useSelector } from "react-redux";

// // Register Chart.js modules
// ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// const BookingChart = ({Bookings}) => {  // Assume Bookings is passed as a prop or fetched from an API
//   const chartRef = useRef(null);
//   const [timeframe, setTimeframe] = useState("monthly");
//   const [incomeData, setIncomeData] = useState([]);

//   useEffect(() => {
//     // Extract the income data based on the timeframe
//     if (Bookings && Bookings.length) {
//       const incomeValues = Bookings.map(item => item.bookingDetails?.TotalPrice);
//       setIncomeData(incomeValues);
//       console.log(incomeValues,"POPLO")
//     }

//   }, [Bookings]);

//   const getGradient = (ctx, chartArea) => {
//     const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
//     gradient.addColorStop(0, "#765DFF"); // Start color at the top
//     gradient.addColorStop(0.5, "#CFCAFF"); // Mid color
//     gradient.addColorStop(1, "#FFFFFF"); // End color at the bottom
//     return gradient;
//   };

//   const data = {
//     labels: Bookings.map(item => item.label), // Assuming each item in Bookings has a label (e.g., day or month)
//     datasets: [
//       {
//         label: "Income",
//         data: incomeData,
//         borderColor: "rgba(6, 17, 56, 1)", // Dark blue curve
//         backgroundColor: (context) => {
//           const chart = context.chart;
//           const { ctx, chartArea } = chart;
//           if (!chartArea) {
//             return null;
//           }
//           return getGradient(ctx, chartArea);
//         },
//         fill: true, // Fill area under the curve
//         tension: 0.8, // Smooth curves
//         pointBackgroundColor: "rgba(255, 255, 255, 1)", // White dots for points
//         pointHoverRadius: 12,
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: "top",
//       },
//       tooltip: {
//         callbacks: {
//           label: function (context) {
//             return `Income: $${context.raw.toFixed(2)}`;
//           },
//         },
//       },
//     },
//     scales: {
//       y: {
//         position: "right",
//         beginAtZero: true,
//         max: 10000,
//         ticks: {
//           stepSize: 2000, // Set the gap to 2k
//           callback: function (value) {
//             return value === 0 ? value : value / 1000 + "k"; // Convert numbers to k format
//           },
//         },
//         grid: {
//           drawBorder: true, // Draw horizontal lines only
//           display: true,
//         },
//       },
//       x: {
//         grid: {
//           drawOnChartArea: false, // Disable vertical grid lines
//         },
//       },
//     },
//   };

//   return (
//     <div>
//       {/* Add heading for chart */}
//       <div className="chart-heading">
//         <div className="card-details">
//           <p>
//             Booking <span>Today</span>
//           </p>
//         </div>
//         <div className="booking-chart-buttons">
//           <button onClick={() => setTimeframe("daily")}>Daily</button>
//           <button onClick={() => setTimeframe("weekly")}>Weekly</button>
//           <button onClick={() => setTimeframe("monthly")}>Monthly</button>
//         </div>
//       </div>

//       <Line ref={chartRef} data={data} options={options} />
//     </div>
//   );
// };

// export default BookingChart;

import React, { useState, useEffect, useRef } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js modules
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const BookingChart = ({ Bookings }) => {
  const chartRef = useRef(null);
  const [timeframe, setTimeframe] = useState("monthly");
  const [incomeData, setIncomeData] = useState([]);
  const [labels, setLabels] = useState([]);

  useEffect(() => {
    if (Bookings && Bookings.length) {
      const incomeByDay = Array(31).fill(0); // Create an array for 31 days of the month
      const currentDate = new Date();
      const startOfMonth = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        1
      );
      const endOfMonth = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        0
      );
      const daysInMonth = endOfMonth.getDate();

      // Iterate over each booking and aggregate income
      Bookings.forEach((item) => {
        const bookingDate = new Date(item.createdAt);
        const day = bookingDate.getDate(); // Get day of the month (1-31)

        // Aggregate income based on the timeframe
        if (
          timeframe === "daily" &&
          bookingDate >= startOfMonth &&
          bookingDate <= endOfMonth
        ) {
          incomeByDay[day - 1] += item.bookingDetails?.TotalPrice || 0; // Add income to the respective day (0-indexed)
        } else if (timeframe === "weekly") {
          const weekStart = currentDate.getDate() - currentDate.getDay() + 1; // Monday as the first day of the week
          const weekStartDate = new Date(currentDate.setDate(weekStart));
          if (
            bookingDate >= weekStartDate &&
            bookingDate < weekStartDate.setDate(weekStartDate.getDate() + 7)
          ) {
            incomeByDay[bookingDate.getDay()] +=
              item.bookingDetails?.TotalPrice || 0; // Add income to the respective day of the week
          }
        } else if (timeframe === "monthly") {
          const month = bookingDate.getMonth();
          incomeByDay[month] += item.bookingDetails?.TotalPrice || 0; // Add income to the respective month
        }
      });

      // Set labels and data based on the selected timeframe
      if (timeframe === "daily") {
        setLabels(
          Array.from({ length: daysInMonth }, (_, i) =>
            (i + 1) % 2 === 0 ? (i + 1).toString() : ""
          )
        ); // Labels for even days only
        setIncomeData(incomeByDay);
      } else if (timeframe === "weekly") {
        setLabels(["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"]);
        setIncomeData(incomeByDay);
      } else if (timeframe === "monthly") {
        setLabels([
          "JAN",
          "FEB",
          "MAR",
          "APR",
          "MAY",
          "JUN",
          "JUL",
          "AUG",
          "SEP",
          "OCT",
          "NOV",
          "DEC",
        ]);
        setIncomeData(incomeByDay);
      }
    }
  }, [Bookings, timeframe]);

  const getGradient = (ctx, chartArea) => {
    const gradient = ctx.createLinearGradient(
      0,
      chartArea.top,
      0,
      chartArea.bottom
    );
    gradient.addColorStop(0, "#765DFF"); // Start color at the top
    gradient.addColorStop(0.5, "#CFCAFF"); // Mid color
    gradient.addColorStop(1, "#FFFFFF"); // End color at the bottom
    return gradient;
  };

  const data = {
    labels: labels, // Labels are now dynamic based on timeframe
    datasets: [
      {
        label: "Income",
        data: incomeData,
        borderColor: "rgba(6, 17, 56, 1)", // Dark blue curve
        backgroundColor: (context) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          if (!chartArea) {
            return null;
          }
          return getGradient(ctx, chartArea);
        },
        fill: true, // Fill area under the curve
        tension: 0.8, // Smooth curves
        pointBackgroundColor: "rgba(255, 255, 255, 1)", // White dots for points
        pointHoverRadius: 12,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Set to false to hide the legend
        // position: "top", // Remove this line as it's not needed anymore
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `Income: $${context.raw.toFixed(2)}`;
          },
        },
      },
    },
    scales: {
      y: {
        position: "right",
        beginAtZero: true,
        max: Math.max(...incomeData) > 10000 ? Math.max(...incomeData) : 10000,
        ticks: {
          stepSize: 2000, // Set the gap to 2k
          callback: function (value) {
            return value === 0 ? value : value / 1000 + "k"; // Convert numbers to k format
          },
        },
        grid: {
          drawBorder: true, // Draw horizontal lines only
          display: true,
        },
      },
      x: {
        grid: {
          drawOnChartArea: false, // Disable vertical grid lines
        },
      },
    },
  };

  return (
    <div>
      {/* Add heading for chart */}
      <div className="chart-heading">
        <div className="card-details">
          <p>
            Booking{" "}
            <span>
              {timeframe.charAt(0).toUpperCase() + timeframe.slice(1)}
            </span>
          </p>
        </div>
        <div className="booking-chart-buttons">
          <button
            onClick={() => setTimeframe("daily")}
            className={timeframe === "daily" ? "active-tab-dashboard" : ""}
          >
            Daily
          </button>
          <button
            onClick={() => setTimeframe("weekly")}
            className={timeframe === "weekly" ? "active-tab-dashboard" : ""}
          >
            Weekly
          </button>
          <button
            onClick={() => setTimeframe("monthly")}
            className={timeframe === "monthly" ? "active-tab-dashboard" : ""}
          >
            Monthly
          </button>
        </div>
      </div>

      <Line ref={chartRef} data={data} options={options} />
    </div>
  );
};

export default BookingChart;
