import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import YourCart from "../../assets/Images/YourCart.png";

const Booking2 = () => {

    const [cart,setcart]=useState([])

    const navigate= useNavigate()


    const cartItems = [
        {
          id: 1,
          title: 'ZAGREB TO ATHENS: ADRIATIC AND ANCIENT CAPITAL',
          price: 3000,
          duration: '4 Days',
          seats: 4,
          imageSrc: YourCart // Assuming this is the path to the image
        },
    
        {
            id: 2,
            title: 'ZAGREB TO ATHENS: ADRIATIC AND ANCIENT CAPITAL',
            price: 3000,
            duration: '4 Days',
            seats: 4,
            imageSrc: YourCart // Assuming this is the path to the image
          },


          {
            id: 3,
            title: 'ZAGREB TO ATHENS: ADRIATIC AND ANCIENT CAPITAL',
            price: 3000,
            duration: '4 Days',
            seats: 4,
            imageSrc: YourCart // Assuming this is the path to the image
          },



        // You can add more cart items here
      ];

      useEffect(()=>{

        const Arr= JSON.parse(localStorage.getItem('CartArray')) || []

        setcart(Arr)

      },[])


      console.log(cart,"ARR")

      const TotalAmount= cart.map((e)=>e.TotalPrice)

      console.log(TotalAmount)

      let TotalPrice=0


      TotalAmount.forEach(element => {
        TotalPrice=TotalPrice+element
      });





      const RemoveItem=(id)=>{

        console.log(id,"ID")

        const Arr = JSON.parse(localStorage.getItem('CartArray')) || [];

        const updatedArr = Arr.filter(item => item.TourID !== id);

        localStorage.setItem('CartArray', JSON.stringify(updatedArr));
        setcart(updatedArr)

        console.log(updatedArr, "Updated CartArray after removal");
      }



      const handleCheckout=(amount)=>{

          localStorage.setItem('FinalAmount',amount)

          console.log(amount)

          navigate('/checkout')



          

      }



    return (
        <>
          <section className="Booking-card">
            <div className="container">
                <div className="booking-card-heading">
                <h2>Your Cart ({cart.length})</h2>
                </div>
                <div className="main-Booking-card">

                 <div className="Booking-card-part-1">
                  

                    <div className="Your-Cart-main-box">
      {cart.map((item) => (
        <div key={item._id} className="Your-Cart-box">
          <div className="Your-Cart-img  hel-new-class">
            <img src={item.TourImage} alt={item.title} />
          </div>
          <div className="Your-Cart-tital">
            <div className="Your-Cart-tital-heading">
              <h2 className="with-id">{item?.TourName?.TourName}</h2>
              <h2>{item.TotalPrice}  €</h2>
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

            <div className="Remove-btn-box">
              <button className="Remove" onClick={()=>RemoveItem(item?.TourID)}>Remove</button>
              {/* <button className="Edit">Edit</button> */}
            </div>
          </div>
        </div>
      ))}
    </div>

                 </div>

                 <div className="Booking-card-part-2  more-part-2">

                <div className="border-bottom-h2">
                <h4>Booking Summary</h4>
                </div>
              

              <div className="one-main-box">

      

                    <div className="Discount-box">
                        <h2>Sub Total :</h2>
                        <h2>{TotalPrice} €</h2>
                    </div>

                    
                    {/* <div className="Discount-box">
                        <h2>Discount:</h2>
                        <h3>$0</h3>
                    </div> */}

                    <div className="Discount-box  box-top-border">

                    <h3>Total Payment:</h3>
                        <h2>{TotalPrice} €</h2>
                  
                    </div>

                    <div  className="checkoutbtn">
                         <button className="Remove" onClick={()=>handleCheckout(TotalPrice)}>
                           Checkout
                         </button>
                    </div>
                    </div>
                 </div>


                </div>
            </div>
          </section>
        </>
    )



}


export default Booking2