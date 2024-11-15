import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import YourCart from "../../assets/Images/YourCart.png";
import Paypal from "../../Paypal/Paypal";
import { addOrder } from "../../Redux/Features/addOrderSlice";
import { toast, ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";

const Checkout2 = () => {


    const dispatch = useDispatch()
    const navigate = useNavigate()

    const Arr = JSON.parse(localStorage.getItem('CartArray')) || []

    const [formData, setFormData] = useState({
        // productDetails:'',
        Name: '',

        phoneno: '',



        email: '',
        // password: '',
        payment_details: '',




        agreeToTerms: false,
        paymentStatus: 'false'
    });
    const [isFormComplete, setIsFormComplete] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value,
        }));
        validateForm();
    };



    const validateForm = () => {
        // List of required fields
        const requiredFields = [
            'Name',

            'phoneno',



            'email',
            // 'password', 

        ];
        // Check if all required fields are filled
        const allFieldsFilled = requiredFields.every(field => formData[field].trim() !== '');
        // Check if terms are agreed
        const agreeToTerms = formData.agreeToTerms;
        // Form is complete if all fields are filled and terms are agreed
        const isComplete = allFieldsFilled && agreeToTerms;

        if (allFieldsFilled) {
            return allFieldsFilled
        }

        // Debugging logs
        console.log('Form Data:', formData);
        console.log('All Fields Filled:', allFieldsFilled);
        console.log('Agree to Terms:', agreeToTerms);
        console.log('Form Complete:', isComplete);
    };


    useEffect(() => {
        console.log(isFormComplete, "TS")
    }, [isFormComplete])


    const handleSubmit = (e) => {
        e.preventDefault();
        // Process formData or send it to the server
        console.log(e, 'Form data submitted: TS', formData);
    };


    const submitForm = (data) => {
        console.log('Submitting form with data:', data);

        dispatch(addOrder(data))

    };


    const handlepaymentcallback = (p) => {

        // alert(p)
        toast.success("Payment Successful")

        localStorage.removeItem('CartArray')
        localStorage.removeItem('FinalAmount')

        setFormData((prevdata) => {

            const updated_data = {
                ...prevdata,
                payment_details: p,
                bookingDetails: Arr,
                paymentStatus: true
            }
            submitForm(updated_data)
            setTimeout(() => {

                navigate('/thankyou')
                window.location.reload()
            }, 2000);
            return updated_data




        })


        // formRef.current.click()

        console.log("payment callback success", formData)

    }

    const Price = localStorage.getItem('FinalAmount')

    console.log(Price, "PRICE CHEK")







    return (
        <>

            <ToastContainer />
            <section className="Booking-card">
                <div className="container">

                    <div className="checkoutContainer">

                        <div className="Booking-card-part-2">

                            <div className="border-bottom-h2">
                                <h4>Booking Summary</h4>
                            </div>


                            <div className="one-main-box">

                                <div className="Your-Cart-main-box">
                                    {Arr.map((item) => (
                                        <div key={item._id} className="Your-Cart-box">
                                            <div className="Your-Cart-img">
                                                <img src={item.TourImage} alt={item.title} />
                                            </div>
                                            <div className="Your-Cart-tital">
                                                <div className="Your-Cart-tital-heading">
                                                    <h2 className="with-id">{item?.TourName?.TourName}</h2>
                                                    <h2> {item.TotalPrice}  €</h2>
                                                </div>

                                                <div className="icon-list-box">
                                                    <span>
                                                        {/* Duration icon */}
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                                            {/* SVG code */}
                                                        </svg>
                                                        <p>Duration: {item?.TourName?.TourDuration}</p>
                                                    </span>

                                                    <span>
                                                        {/* Seats icon */}
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                                                            {/* SVG code */}
                                                        </svg>
                                                        <p>Seats:{item?.NumberofGuests}</p>
                                                    </span>
                                                </div>


                                            </div>
                                        </div>
                                    ))}
                                </div>



                                <div className="Discount-box  box-top-border">

                                    <h3>Total Payment:</h3>
                                    <h2>{Price?Price:'0'} Euro</h2>

                                </div>


                            </div>
                        </div>



                        {/* form */}
                        <div className="form-checkout-container">

                            <form onSubmit={handleSubmit} >

                                <div className="Payment-Method-box">
                                    <h2>Payment Method</h2>
                                </div>

                                <div className="name--ar">

                                    <label htmlFor="firstName">Name</label>
                                    <input
                                        className="input--ar"
                                        type="text"
                                        name="Name"
                                        value={formData.Name}
                                        onChange={handleChange}
                                    />


                                </div>


                                <div className="name--ar">
                                    <label htmlFor="addressLine1">PhoneNo</label>
                                    <input
                                        className="input--ar"
                                        type="tel"
                                        name="phoneno"

                                        value={formData.phoneno}
                                        onChange={handleChange}
                                    />




                                </div>

                                {/* <div className="name--ar">
                                    <label htmlFor="addressLine1">Payment</label>
                                    <input
                                        className="input--ar"
                                        type="text"
                                        name="phoneno"

                                        value={formData.phoneno}
                                        onChange={handleChange}
                                    />




                                </div> */}


                                {/* <div className="name--ar">
                                    <label>Debit/Credit Card</label>
                                    <input
                                        className="input--ar"
                                        type="text"
                                        name="phoneno"

                                        value={formData.phoneno}
                                        onChange={handleChange}
                                    />




                                </div> */}


                                <div className="name--ar">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        className="input--ar"
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                             
                                <div className="name--ahti-new">
                                

                             
<div className="my-Paypal-box-btn">


                                <Paypal productname='TourBooking' price={Price} handlepaymentcallback={handlepaymentcallback} isFormComplete={validateForm()} />
                               
                                </div>
                                </div>


                              


                            </form>

                        </div>



                    </div>





                </div>
            </section>
        </>
    )



}


export default Checkout2