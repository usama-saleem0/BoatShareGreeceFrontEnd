import React, { useEffect } from "react";
import Heading from "../SidebarHeading/Heading";
import controlimg from "../../assets/control/controlimg.png";
import customerimg from "../../assets/customer/customerimg.png";
import edit from "../../assets/customer/edit.png";
import deleteimg from "../../assets/customer/delete.png";
import { useDispatch, useSelector } from "react-redux";
import { getCustomers } from "../../Redux/Features/CustomerSlice";

const CustomerDetails = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCustomers());
  }, []);

  const Data = useSelector((state) => state.customer.Customers);

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

  return (
    <section className="customer-details-section">
      <div className="main-customer">
        <div className="padding-top-ar-dash">
          <Heading heading={"Customer Details"} controlimg={controlimg} />
          <div className="customer-table">
            <div className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>Customer Profile</th>
                    <th>Customer Mail</th>
                    <th>Phone Number</th>
                    <th>Sign up Date</th>
                    {/* <th>Action</th> */}
                  </tr>
                </thead>
                <tbody>
                  {Data.map((customer, index) => (
                    <tr key={index}>
                      <td>
                        <div className="customer-profile">
                          <div className="customer-profile-img">
                            <img src={customerimg} alt="Profile" />
                          </div>
                          <span>{customer?.name}</span>
                        </div>
                      </td>
                      <td>{customer?.Email}</td>
                      <td>{customer?.phoneno}</td>
                      <td>
                        {customer &&
                          DateFormatCustom(customer?.createdAt.split("T")[0])}
                      </td>
                      {/* <td>
                      <div className="action-icons">
                        <div className="edit-img">
                          <img src={edit} alt="Edit" />
                        </div>
                        <div className="delete-img">
                          <img src={deleteimg} alt="Delete" />
                        </div>
                      </div>
                    </td> */}
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

export default CustomerDetails;
