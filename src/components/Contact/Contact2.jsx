import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import whatsapp from "../../assets/Images/whatsapp.png";
import { useDispatch, useSelector } from "react-redux";
import { sendEmail } from "../../Redux/Features/ContactUsSlice";
import { toast } from "react-toastify";

const Contact2 = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const { loading, success, error } = useSelector((state) => state.contact);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    dispatch(sendEmail(formData)).then(() => {
      if (success) {
        // toast.success("Email sent successfully!");
      }
      if (error) {
        toast.error("Error sending email. Please try again.");
      }
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    });
  };
  useEffect(() => {
    if (success) {
      // toast.success("Email sent successfully!");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }
    if (error) {
      toast.error(`Error: ${error}`);
    }
  }, [success, error]);

  return (
    <>
      <section className="Contact-Message">
        <div className="container">
          <div className="main-Contact-Message">
            <div className="Contact-Message-form">
              <h2>Send Your Message</h2>
              <p>
                {/* Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. */}
              </p>
              <form onSubmit={handleSubmit}>
                <div className="Contact-Message-input-box">
                  <label htmlFor="name">Name*</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="Contact-Message-input-box">
                  <label htmlFor="email">Email*</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="Contact-Message-input-box more-drop-dwom">
                  <label htmlFor="subject">Subject*</label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Enter your Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="Contact-Message-input-box more-drop-dwom">
                  <label htmlFor="message">Message*</label>
                  <textarea
                    name="message"
                    placeholder="Enter your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <div className="Contact-Submit-box">
                  <button
                    type="submit"
                    className="hover-btn"
                    disabled={loading}
                  >
                    <span>{loading ? "Sending..." : "Submit"}</span>
                  </button>
                </div>

                {/* {success && <p>Email sent successfully!</p>}
                {error && <p>Error: {error}</p>} */}
              </form>
            </div>

            <div className="container-Message-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31213.487715417907!2d20.830826019989304!3d37.78703369475802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135b38cc9c3e1535%3A0xb6060f96e807c399!2sZakynthos%2C%20Greece!5e0!3m2!1sen!2s!4v1725977281701!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: "none" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact2;
