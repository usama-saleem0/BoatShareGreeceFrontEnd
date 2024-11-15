import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Obssesionimg from "../../assets/Images/Obssesion-img.png";
import Drop10 from "../drop-dwon/Drop10";
import { useDispatch, useSelector } from "react-redux";
import { getSingleTour } from "../../Redux/Features/ToursSlice";
import TourDescription from "./TourDescription";
import Carousel from "../Carousel/Carousel";
import DatePicker from "react-datepicker";
import { toast, ToastContainer } from "react-toastify";

const Memorable2 = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleTour(id));
  }, []);

  const { SingleTour } = useSelector((state) => state.tours);

  console.log(SingleTour, "Single Tours");

  const navigate=useNavigate()


const [formData,setformData]=useState({
    Name:'',
    PhoneNo:'',
    NumberofGuests:'',
    TotalPrice:0,
    TourID:'',
    TourImage:'',
    TourName:'',
    Date:new Date()
})


  const handleChange=(name,value)=>{

    console.log(name,value,"TS")

   

  setformData((prevData)=>({

      ...prevData,
      [name]:value

  }))


  }

   


  const AddToLocal=(value)=>{


    let CartArr = JSON.parse(localStorage.getItem('CartArray')) || [];

      CartArr.push(value)
      
     
    
      localStorage.setItem('CartArray',JSON.stringify(CartArr))
    
    
      const Arr= localStorage.getItem('CartArray')
    
      console.log(Arr,"AR")

  }

const FormSubmit=(e)=>{

  e.preventDefault()

  console.log(e,"price")

  // localStorage.clear()

  console.log(formData)
  AddToLocal(formData)

  setformData({
    Name:'',
    PhoneNo:'',
    NumberofGuests:'',
    TotalPrice:0,
    TourID:'',
    TourImage:'',
    TourName:'',
    Date:new Date()
     
})

  toast.success('Added to Cart')


  setTimeout(() => {
    navigate('/Booking')
    
  }, 1000);



}



const handleTotalAmount=(name,value,singleprice,tourid,tourimage,TourName)=>{

    console.log(name,value,singleprice,"HANDLE TOTAL AMOUNT")

    const total= value*singleprice

    console.log(total,"PRICE")


    setformData((prevData)=>({

      ...prevData,
      ['TotalPrice']:total,
      [name]:value,
      ['TourImage']:tourimage,
      ['TourID']:tourid,
      ['TourName']:TourName

  }))




}


const [startDate, setStartDate] = useState(new Date());






const handleDate=(date)=>{

  

 

setformData((prevData)=>({

    ...prevData,
    ['Date']:date

}))


}




 
 



  return (
    <>

    <ToastContainer/>
      <section className="Obssesion ">
        <div className="container">
          <div className="main-Obssesion">
            <div className="obssesion-heading">
              <div className="Obssesion-tital">
                <h2>{SingleTour?.TourName}</h2>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_194_4092)">
                      <path
                        d="M8 0C3.58888 0 0 3.58888 0 8C0 12.4111 3.58888 16 8 16C12.4111 16 16 12.4111 16 8C16 3.58888 12.4111 0 8 0ZM8 15C4.14013 15 1 11.8599 1 8C1 4.14013 4.14013 1 8 1C11.8599 1 15 4.14013 15 8C15 11.8599 11.8599 15 8 15Z"
                        fill="#D5AE82"
                      />
                      <path
                        d="M8.5 3H7.5V8.20702L10.6465 11.3535L11.3535 10.6465L8.5 7.79295V3Z"
                        fill="#D5AE82"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_194_4092">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <p>{SingleTour?.TourDuration}</p>
                </span>
              </div>
            </div>
            <div className="Obssesion-box">
              <div className="Obssesion-part-1">
                <div className="Obssesion-img">
                  {/* <img src={SingleTour?.Tour_Pictures[1]} alt="" /> */}
                  <Carousel images={SingleTour?.Tour_Pictures} />
                </div>

                {
                  SingleTour?.boatName!='defaultValue'
                  &&


                <div className="Obssesion-tital">
                  <h2>Boat Name</h2>
                  
                    
                     <h3>
                      {SingleTour?.boatName}
                     </h3>
                     
                  
                </div>
                }


                <div className="Obssesion-tital">
                  <h2>Locations</h2>
                  <div className="Depature-box">
                    <div className="Depature-pt-1">
                      <ul>
                        {SingleTour?.Locations?.map((e, i) => (
                          <li key={i}>{e}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="Obssesion-tital">
                  <h2>Tour Overview</h2>
                  <TourDescription description={SingleTour?.Tour_Description} />
                </div>

               

                <div className="Obssesion-tital">
                  <h2>Depature & Arrival Details</h2>
                  <div className="Depature-box">
                    <div className="Depature-pt-1">
                      <ul>
                        <li>Depature From</li>
                        {/* <li>Depature Time</li>
                        <li>Arrival To</li>
                        <li>Arrival Time</li> */}
                      </ul>
                    </div>

                    <div className="Depature-pt-1 Depature-line">
                      <ul>
                        <li>{SingleTour?.Meeting_Point}</li>
                        {/* <li>22/22/2222</li>
                        <li>Arrival To</li>
                        <li>Arrival Time</li> */}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="Obssesion-part-2">
                <div className="Price-icon-box">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="41"
                    height="49"
                    viewBox="0 0 41 49"
                    fill="none"
                  >
                    <path
                      d="M21.563 34.8596C21.6813 35.8318 21.4203 36.719 20.808 37.4252C20.0837 38.2607 18.8768 38.8197 17.5041 38.9737V40.0222C17.5041 40.4587 17.1494 40.8126 16.7119 40.8126C16.2743 40.8126 15.9196 40.4587 15.9196 40.0222V38.9623C13.8903 38.6901 12.3119 37.4139 11.856 35.5897C11.7501 35.1662 12.0085 34.7372 12.433 34.6316C12.8579 34.5266 13.2876 34.7839 13.3934 35.2073C13.8012 36.8385 15.3988 37.4224 16.7077 37.4355C16.7146 37.4354 16.7217 37.4356 16.7286 37.4357C16.7726 37.4355 16.8161 37.4355 16.8593 37.4344C18.0042 37.4073 19.0837 36.9978 19.6095 36.3912C19.9304 36.0211 20.0548 35.5824 19.9901 35.0501C19.8372 33.7939 18.7901 33.0733 16.5951 32.7139C13.1312 32.1466 12.3248 30.3967 12.2583 29.0286C12.1661 27.1328 13.4972 25.5437 15.5708 25.0746C15.685 25.0487 15.8016 25.0267 15.9196 25.0085V23.9373C15.9196 23.5008 16.2743 23.147 16.7119 23.147C17.1494 23.147 17.5041 23.5008 17.5041 23.9373V25.0017C18.9911 25.2164 20.4605 26.0722 21.1931 27.813C21.3624 28.2154 21.1728 28.6787 20.7694 28.8477C20.3659 29.0167 19.9015 28.8274 19.7322 28.4249C19.1631 27.0729 17.9454 26.524 16.7704 26.522C16.7379 26.5245 16.7044 26.5247 16.6717 26.5232C16.4162 26.5294 16.1637 26.5613 15.9213 26.6161C14.8722 26.8534 13.7747 27.5917 13.841 28.9521C13.8617 29.3782 13.9247 30.6748 16.8518 31.1542C17.9269 31.3303 21.1987 31.866 21.563 34.8596ZM40.6816 39.823L33.2694 48.5316C33.0124 48.8336 32.6522 48.9999 32.2551 48.9999C31.8581 48.9999 31.4978 48.8335 31.2409 48.5317L28.2752 45.0473C25.2196 47.6074 21.281 49 17.0661 49C16.963 49 16.8601 48.9991 16.7567 48.9975C16.6559 48.9992 16.5542 48.9999 16.4536 48.9999C10.345 49.0002 4.79717 46.022 1.91875 41.1767C-0.69319 36.78 -0.63605 31.5344 2.07541 26.785C3.7726 23.8123 6.37186 20.4463 10.2064 16.2617C9.11729 15.7675 8.35773 14.6725 8.35773 13.4032C8.35773 11.6975 9.72891 10.3061 11.4294 10.266L8.92478 7.76759C7.67243 6.51828 7.67243 4.48557 8.92478 3.23637C9.9847 2.17892 11.6702 1.99833 12.9327 2.80663C13.0682 2.89337 13.2009 2.90523 13.3499 2.84378C13.4985 2.78233 13.584 2.68048 13.6183 2.5233C13.9382 1.0614 15.258 0.000197581 16.7566 0C18.2553 0 19.5752 1.06111 19.8953 2.5231C19.9297 2.68038 20.015 2.78233 20.164 2.84388C20.3126 2.90532 20.4452 2.89337 20.5809 2.80663C21.8432 1.99843 23.5286 2.17892 24.5887 3.23627C25.841 4.48567 25.841 6.51848 24.5888 7.76769L22.0843 10.2661C23.7846 10.3063 25.1558 11.6977 25.1558 13.4034C25.1558 14.6726 24.3963 15.7676 23.3071 16.2618C24.9226 18.025 26.3143 19.6387 27.512 21.1378C27.6009 20.1916 28.4009 19.4484 29.3721 19.4484H35.1383C36.1689 19.4485 37.0074 20.2849 37.0073 21.3129V37.6368H39.6673C40.192 37.6368 40.6547 37.9319 40.8749 38.4069C41.095 38.8813 41.021 39.4241 40.6816 39.823ZM10.0451 6.64987L13.6683 10.264H19.8455L23.4684 6.64987C24.1029 6.01683 24.1029 4.98694 23.4684 4.35399C22.9314 3.81825 22.077 3.72687 21.4368 4.13675C20.8673 4.50128 20.1823 4.56234 19.5575 4.304C18.9326 4.04576 18.4915 3.5195 18.3473 2.86018C18.1849 2.11885 17.516 1.58065 16.7567 1.58065C15.9975 1.58074 15.3286 2.11895 15.1664 2.86028C15.0221 3.5196 14.581 4.04586 13.956 4.3041C13.331 4.56214 12.6461 4.50118 12.0768 4.13684C11.4366 3.72687 10.5822 3.81825 10.045 4.35399C9.41052 4.98694 9.41052 6.01692 10.0451 6.64987ZM9.94222 13.4032C9.94222 14.2626 10.6431 14.9617 11.5045 14.9617H22.0089C22.8704 14.9617 23.5712 14.2626 23.5712 13.4033C23.5712 12.5439 22.8704 11.8448 22.0089 11.8448H11.5045C10.6431 11.8447 9.94222 12.5438 9.94222 13.4032ZM27.2498 43.8426L23.8288 39.8231C23.4892 39.4239 23.4154 38.8811 23.6356 38.4063C23.8557 37.9316 24.3184 37.6365 24.8431 37.6365H27.503V23.715C25.9298 21.6036 23.9326 19.252 21.4115 16.5424H12.1016C7.94675 21.0077 5.19379 24.5169 3.45214 27.5673C0.994591 31.8719 0.934084 36.4191 3.28171 40.371C5.92018 44.8124 11.0797 47.5115 16.7433 47.417C16.7522 47.4168 16.7611 47.4168 16.77 47.417C20.7199 47.4845 24.41 46.219 27.2498 43.8426ZM32.0621 47.508C32.0619 47.5083 32.0617 47.5085 32.0615 47.5087L32.0621 47.508ZM39.1187 39.2173H36.2151C35.7776 39.2173 35.4228 38.8634 35.4228 38.427V21.3126C35.4228 21.1587 35.2926 21.0288 35.1383 21.0288H29.3721C29.2179 21.0288 29.0875 21.1588 29.0875 21.3127V38.4269C29.0875 38.8633 28.7328 39.2172 28.2953 39.2172H25.3917L32.2552 47.2812L39.1187 39.2173Z"
                      fill="black"
                    />
                  </svg>

                  <span>
                    <p>Price</p>
                    <h3>{SingleTour?.price} Euro</h3>
                  </span>
                </div>
                <form onSubmit={FormSubmit}>

               
                <div className="Price-form-box">
                 

               
                  <h2>Book Your Tour</h2>

                  <input 
                  type="text" 
                   placeholder="Your Name" 
                    name='Name'
                    value={formData.Name}
                    onChange={(e)=>handleChange('Name',e.target.value)} 
                    required  
                  
                  
                  />
                  <input
                   type="tel"
                    placeholder="+123456789" 
                    name="PhoneNo"
                    value={formData.PhoneNo}
                     
                    onChange={(e)=>handleChange('PhoneNo',e.target.value)}
                    required
                    />
                  <input 
                  type="number" 
                  placeholder="No of Tickets"
                  name="NumberofGuests"
                  value={formData.NumberofGuests} 
                  onChange={(e)=>handleTotalAmount('NumberofGuests',e.target.value,SingleTour?.price,SingleTour?._id,SingleTour?.Tour_Pictures[0],SingleTour)}
                  required
                  
                  />


                                  
                <DatePicker selected={formData.Date} onChange={(date) => handleDate(date)}
                                                                />

                  {/* <div className="price-in">
                    <Drop10 />

                    <div className="drop-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="21"
                        height="12"
                        viewBox="0 0 21 12"
                        fill="none"
                      >
                        <path
                          d="M10.5 12C10.2559 12 10.0116 11.9023 9.82518 11.707L0.279741 1.70705C-0.093247 1.31631 -0.093247 0.683559 0.279741 0.293061C0.652729 -0.097437 1.25672 -0.097687 1.62947 0.293061L10.5 9.58601L19.3706 0.293061C19.7436 -0.097687 20.3476 -0.097687 20.7203 0.293061C21.0931 0.683809 21.0933 1.31656 20.7203 1.70705L11.1749 11.707C10.9885 11.9023 10.7442 12 10.5 12Z"
                          fill="#D5AE82"
                        />
                      </svg>
                    </div>
                  </div> */}
                </div>

                <div className="Price-Details-box">
                  <h2>Price Details</h2>
                </div>

                <div className="Total-Payment-box">
                  <h2>Total Payment:</h2>

                  <h3>{formData.TotalPrice} Euro</h3>
                </div>

                <div className="Price-Add-btn">
                  
                    <button className="hover-btn">
                      <span>Add To Cart</span>
                    </button>
                   
                </div>
                </form>

 
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Memorable2;
