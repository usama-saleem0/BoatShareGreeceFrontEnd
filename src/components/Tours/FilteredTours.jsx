import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Drop8 from "../drop-dwon/Drop8";
import Drop7 from "../drop-dwon/Drop7";
import Drop6 from "../drop-dwon/Drop6";

import Tours4 from "../../assets/Images/Tours2.png";
import Tours1  from "../../assets/Images/Tours1.png";
import Tours3  from "../../assets/Images/Tours3.png";

import Tours5 from "../../assets/Images/heel1.png";
import Tours6  from "../../assets/Images/heel2.png";
import Tours7  from "../../assets/Images/heel3.png";
import { useDispatch, useSelector } from "react-redux";
import Drop3 from "../drop-dwon/Drop3";
import Drop5 from "../drop-dwon/Drop5";
import Drop1 from "../drop-dwon/Drop1";
import { getToursbyName } from "../../Redux/Features/ToursSlice";

const FilteredTours = () => {
    const tours = [
        {
          id: 1,
          title: "ZAGREB TO ATHENS: ADRIATIC AND ANCIENT CAPITAL",
          img: Tours1,
          duration: "4 Days",
          totalSeats: 12,
          remainingSeats: 6,
          price: "$2,490",
        },
        {
          id: 2,
          title: "ZAGREB TO ATHENS: ADRIATIC AND ANCIENT CAPITAL",
          img: Tours4,
          duration: "4 Days",
          totalSeats: 12,
          remainingSeats: 6,
          price: "$2,490",
        },


        {
            id: 3,
            title: "ZAGREB TO ATHENS: ADRIATIC AND ANCIENT CAPITAL",
            img: Tours3,
            duration: "4 Days",
            totalSeats: 12,
            remainingSeats: 6,
            price: "$2,490",
          },


          {
            id: 4,
            title: "ZAGREB TO ATHENS: ADRIATIC AND ANCIENT CAPITAL",
            img: Tours5,
            duration: "4 Days",
            totalSeats: 12,
            remainingSeats: 6,
            price: "$2,490",
          },


          {
            id: 5,
            title: "ZAGREB TO ATHENS: ADRIATIC AND ANCIENT CAPITAL",
            img: Tours6,
            duration: "4 Days",
            totalSeats: 12,
            remainingSeats: 6,
            price: "$2,490",
          },


          {
            id: 6,
            title: "ZAGREB TO ATHENS: ADRIATIC AND ANCIENT CAPITAL",
            img: Tours7,
            duration: "4 Days",
            totalSeats: 12,
            remainingSeats: 6,
            price: "$2,490",
          },
        // Add more tours here
      ];

      const dispatch = useDispatch()

      const navigate = useNavigate();
      const { AllTours, loading, error } = useSelector((state) => state.tours);
    
      console.log(AllTours, "TS");
    
      const HandleTourNavigation = (id) => {
        navigate(`/tour/${id}`);
      };

      const TourNames= AllTours.map((e)=>e.TourName)

      const ToursDuration= AllTours.map((e)=>e.TourDuration)

      TourNames.push('none')

      const [filterTourName,setfilterTourName]=useState(null)


      const TourNameCallback=(e)=>{

        console.log(e,"TOURNAME CALLBACK")

        setfilterTourName(e)

      }

const {name}= useParams()
console.log(name,"namets")


      useEffect(()=>{
        dispatch(getToursbyName(name))
      },[])

      const Data=useSelector((state)=>state.tours.AllDestinationTours)



    return (
        <>
            <section className="Tours2">
                <div className="container">
                    <div className="main-Tours2">

                        <div className="Tours-tital">

                             

                       <h2 style={{color:'#000'}}>
                        Search Results

                       </h2>


                          
 
                        </div>


                        <div className="Tours-box-Tours">

                          {
                              filterTourName===null || filterTourName==='none' ?(
                                <>
                                          {Data?.map((tour, i) => (
                <div className="Tours-card" key={i}>
                  <div className="Tours-card-img">
                    <img src={tour?.coverImage} />
                  </div>
                  <div className="Tours-card-tital">
                    <h2>{tour?.TourName}</h2>

                    <span className="Duration">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="21"
                        height="21"
                        viewBox="0 0 21 21"
                        fill="none"
                      >
                        <path
                          d="M10.5002 18.832C12.7103 18.832 14.8299 17.9541 16.3927 16.3913C17.9555 14.8285 18.8335 12.7088 18.8335 10.4987C18.8335 8.28856 17.9555 6.16895 16.3927 4.60614C14.8299 3.04334 12.7103 2.16536 10.5002 2.16536C8.29003 2.16536 6.17041 3.04334 4.60761 4.60614C3.0448 6.16895 2.16683 8.28856 2.16683 10.4987C2.16683 12.7088 3.0448 14.8285 4.60761 16.3913C6.17041 17.9541 8.29003 18.832 10.5002 18.832ZM10.5002 0.0820312C11.8681 0.0820313 13.2226 0.351466 14.4865 0.874953C15.7503 1.39844 16.8986 2.16573 17.8659 3.133C18.8331 4.10028 19.6004 5.2486 20.1239 6.51241C20.6474 7.77622 20.9168 9.13076 20.9168 10.4987C20.9168 13.2614 19.8194 15.9109 17.8659 17.8644C15.9124 19.8179 13.2628 20.9154 10.5002 20.9154C4.73975 20.9154 0.0834961 16.2279 0.0834961 10.4987C0.0834961 7.73603 1.18096 5.08651 3.13447 3.133C5.08797 1.1795 7.73749 0.0820313 10.5002 0.0820312ZM11.021 5.29037V10.7591L15.7085 13.5404L14.9272 14.8216L9.4585 11.5404V5.29037H11.021Z"
                          fill="#FFD700"
                        />
                      </svg>
                      <p>Duration: {tour?.TourDuration}</p>
                    </span>

                    <div className="Seats-box">
                      <span className="Duration">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="23"
                          height="23"
                          viewBox="0 0 23 23"
                          fill="none"
                        >
                          <g clip-path="url(#clip0_194_965)">
                            <path
                              d="M17.5379 16.3699C17.767 16.282 18.013 16.2353 18.2647 16.2353H19.2794C20.2303 16.2353 21.0011 17.0061 21.0011 17.957C21.0011 18.2242 20.9389 18.4879 20.8193 18.7269L19.4307 21.5042C18.9723 22.4209 18.0354 23 17.0105 23H5.98954C4.96462 23 4.02768 22.4209 3.56933 21.5042L2.18067 18.7269C1.75544 17.8765 2.10017 16.8423 2.95064 16.417C3.1897 16.2975 3.45331 16.2353 3.72059 16.2353H4.85136C5.06125 16.2353 5.26779 16.2678 5.46424 16.3301C5.59206 13.9107 5.95332 11.2623 6.5473 8.38396C6.74187 7.4411 7.57211 6.76471 8.53483 6.76471H8.79412V5.41176H8.57795C7.83074 5.41176 7.22501 4.80603 7.22501 4.05882C7.22501 3.9843 7.23117 3.90991 7.24343 3.8364L7.6944 1.13052C7.80313 0.478148 8.36758 0 9.02895 0H13.9711C14.6324 0 15.1969 0.478148 15.3056 1.13052L15.7566 3.8364C15.8794 4.57344 15.3815 5.27051 14.6445 5.39335C14.571 5.4056 14.4966 5.41176 14.422 5.41176H14.2059V6.76471H14.4653C15.428 6.76471 16.2581 7.44098 16.4528 8.38371C17.0501 11.2762 17.4121 13.938 17.5379 16.3699ZM8.57795 4.05882H14.422L13.9711 1.35294H9.02895L8.57795 4.05882ZM10.1471 6.76471H12.8529V5.41176H10.1471V6.76471ZM15.1278 8.65731C15.0629 8.34306 14.7862 8.11765 14.4653 8.11765H8.53483C8.21392 8.11765 7.93719 8.34311 7.87233 8.65739C7.21452 11.8451 6.85009 14.7334 6.77802 17.3213L6.84677 17.3901C6.97363 17.517 7.1457 17.5882 7.32511 17.5882H15.8971C16.0137 17.5882 16.127 17.5581 16.2266 17.5026C16.1669 14.8661 15.801 11.9173 15.1278 8.65731ZM7.44118 18.9412H7.32511C6.78688 18.9412 6.27068 18.7274 5.89009 18.3468L5.3297 17.7864C5.20284 17.6595 5.03077 17.5882 4.85136 17.5882H3.72059C3.66334 17.5882 3.60688 17.6016 3.55568 17.6272C3.37354 17.7182 3.2997 17.9397 3.39078 18.1219L4.77943 20.8992C5.00861 21.3575 5.47708 21.6471 5.98954 21.6471H17.0105C17.5229 21.6471 17.9914 21.3575 18.2206 20.8992L19.6092 18.1219C19.6348 18.0707 19.6481 18.0142 19.6481 17.957C19.6481 17.7533 19.4831 17.5882 19.2794 17.5882H18.2647C18.0518 17.5882 17.8513 17.6885 17.7235 17.8588L17.5206 18.1294C17.1373 18.6404 16.5358 18.9412 15.8971 18.9412H15.5588V19.6176C15.5588 19.9913 15.256 20.2941 14.8824 20.2941C14.5087 20.2941 14.2059 19.9913 14.2059 19.6176V18.9412H12.1765V19.6176C12.1765 19.9913 11.8736 20.2941 11.5 20.2941C11.1264 20.2941 10.8235 19.9913 10.8235 19.6176V18.9412H8.79412V19.6176C8.79412 19.9913 8.49125 20.2941 8.11765 20.2941C7.74404 20.2941 7.44118 19.9913 7.44118 19.6176V18.9412ZM14.2059 13.8676C14.5795 13.8676 14.8824 14.1705 14.8824 14.5441C14.8824 14.9177 14.5795 15.2206 14.2059 15.2206H8.79412C8.42051 15.2206 8.11765 14.9177 8.11765 14.5441C8.11765 14.1705 8.42051 13.8676 8.79412 13.8676H14.2059ZM13.8676 10.4853C14.2413 10.4853 14.5441 10.7882 14.5441 11.1618C14.5441 11.5354 14.2413 11.8382 13.8676 11.8382H9.13235C8.75875 11.8382 8.45588 11.5354 8.45588 11.1618C8.45588 10.7882 8.75875 10.4853 9.13235 10.4853H13.8676Z"
                              fill="#FFD700"
                            ></path>
                          </g>
                          <defs>
                            <clipPath id="clip0_194_965">
                              <rect width="23" height="23" fill="white"></rect>
                            </clipPath>
                          </defs>
                        </svg>
                        <p>Total Seats: {tour?.Max_Capacity}</p>
                      </span>

                      {/* <p>Remaining Seats: {tour?.Max_Capacity}</p> */}
                    </div>

                    <div className="PERSON-box">
                      <p>{tour?.price} / PERSON</p>
                      {/* <Link className="none-list" to=`/Memorable/$` style={{textDecoration:'none'}}> */}
                      <button onClick={() => HandleTourNavigation(tour._id)}>
                        Select
                      </button>
                      {/* </Link> */}
                    </div>
                  </div>
                </div>
              ))}
                                </>
                              ):(<>
                              
                              {
                              
                              AllTours?.filter((e)=>e.TourName.includes(filterTourName)).map((tour, i) => (
                <div className="Tours-card" key={i}>
                  <div className="Tours-card-img">
                    <img src={tour?.Tour_Pictures[0]} />
                  </div>
                  <div className="Tours-card-tital">
                    <h2>{tour?.TourName}</h2>

                    <span className="Duration">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="21"
                        height="21"
                        viewBox="0 0 21 21"
                        fill="none"
                      >
                        <path
                          d="M10.5002 18.832C12.7103 18.832 14.8299 17.9541 16.3927 16.3913C17.9555 14.8285 18.8335 12.7088 18.8335 10.4987C18.8335 8.28856 17.9555 6.16895 16.3927 4.60614C14.8299 3.04334 12.7103 2.16536 10.5002 2.16536C8.29003 2.16536 6.17041 3.04334 4.60761 4.60614C3.0448 6.16895 2.16683 8.28856 2.16683 10.4987C2.16683 12.7088 3.0448 14.8285 4.60761 16.3913C6.17041 17.9541 8.29003 18.832 10.5002 18.832ZM10.5002 0.0820312C11.8681 0.0820313 13.2226 0.351466 14.4865 0.874953C15.7503 1.39844 16.8986 2.16573 17.8659 3.133C18.8331 4.10028 19.6004 5.2486 20.1239 6.51241C20.6474 7.77622 20.9168 9.13076 20.9168 10.4987C20.9168 13.2614 19.8194 15.9109 17.8659 17.8644C15.9124 19.8179 13.2628 20.9154 10.5002 20.9154C4.73975 20.9154 0.0834961 16.2279 0.0834961 10.4987C0.0834961 7.73603 1.18096 5.08651 3.13447 3.133C5.08797 1.1795 7.73749 0.0820313 10.5002 0.0820312ZM11.021 5.29037V10.7591L15.7085 13.5404L14.9272 14.8216L9.4585 11.5404V5.29037H11.021Z"
                          fill="#FFD700"
                        />
                      </svg>
                      <p>Duration: {tour?.TourDuration}</p>
                    </span>

                    <div className="Seats-box">
                      <span className="Duration">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="23"
                          height="23"
                          viewBox="0 0 23 23"
                          fill="none"
                        >
                          <g clip-path="url(#clip0_194_965)">
                            <path
                              d="M17.5379 16.3699C17.767 16.282 18.013 16.2353 18.2647 16.2353H19.2794C20.2303 16.2353 21.0011 17.0061 21.0011 17.957C21.0011 18.2242 20.9389 18.4879 20.8193 18.7269L19.4307 21.5042C18.9723 22.4209 18.0354 23 17.0105 23H5.98954C4.96462 23 4.02768 22.4209 3.56933 21.5042L2.18067 18.7269C1.75544 17.8765 2.10017 16.8423 2.95064 16.417C3.1897 16.2975 3.45331 16.2353 3.72059 16.2353H4.85136C5.06125 16.2353 5.26779 16.2678 5.46424 16.3301C5.59206 13.9107 5.95332 11.2623 6.5473 8.38396C6.74187 7.4411 7.57211 6.76471 8.53483 6.76471H8.79412V5.41176H8.57795C7.83074 5.41176 7.22501 4.80603 7.22501 4.05882C7.22501 3.9843 7.23117 3.90991 7.24343 3.8364L7.6944 1.13052C7.80313 0.478148 8.36758 0 9.02895 0H13.9711C14.6324 0 15.1969 0.478148 15.3056 1.13052L15.7566 3.8364C15.8794 4.57344 15.3815 5.27051 14.6445 5.39335C14.571 5.4056 14.4966 5.41176 14.422 5.41176H14.2059V6.76471H14.4653C15.428 6.76471 16.2581 7.44098 16.4528 8.38371C17.0501 11.2762 17.4121 13.938 17.5379 16.3699ZM8.57795 4.05882H14.422L13.9711 1.35294H9.02895L8.57795 4.05882ZM10.1471 6.76471H12.8529V5.41176H10.1471V6.76471ZM15.1278 8.65731C15.0629 8.34306 14.7862 8.11765 14.4653 8.11765H8.53483C8.21392 8.11765 7.93719 8.34311 7.87233 8.65739C7.21452 11.8451 6.85009 14.7334 6.77802 17.3213L6.84677 17.3901C6.97363 17.517 7.1457 17.5882 7.32511 17.5882H15.8971C16.0137 17.5882 16.127 17.5581 16.2266 17.5026C16.1669 14.8661 15.801 11.9173 15.1278 8.65731ZM7.44118 18.9412H7.32511C6.78688 18.9412 6.27068 18.7274 5.89009 18.3468L5.3297 17.7864C5.20284 17.6595 5.03077 17.5882 4.85136 17.5882H3.72059C3.66334 17.5882 3.60688 17.6016 3.55568 17.6272C3.37354 17.7182 3.2997 17.9397 3.39078 18.1219L4.77943 20.8992C5.00861 21.3575 5.47708 21.6471 5.98954 21.6471H17.0105C17.5229 21.6471 17.9914 21.3575 18.2206 20.8992L19.6092 18.1219C19.6348 18.0707 19.6481 18.0142 19.6481 17.957C19.6481 17.7533 19.4831 17.5882 19.2794 17.5882H18.2647C18.0518 17.5882 17.8513 17.6885 17.7235 17.8588L17.5206 18.1294C17.1373 18.6404 16.5358 18.9412 15.8971 18.9412H15.5588V19.6176C15.5588 19.9913 15.256 20.2941 14.8824 20.2941C14.5087 20.2941 14.2059 19.9913 14.2059 19.6176V18.9412H12.1765V19.6176C12.1765 19.9913 11.8736 20.2941 11.5 20.2941C11.1264 20.2941 10.8235 19.9913 10.8235 19.6176V18.9412H8.79412V19.6176C8.79412 19.9913 8.49125 20.2941 8.11765 20.2941C7.74404 20.2941 7.44118 19.9913 7.44118 19.6176V18.9412ZM14.2059 13.8676C14.5795 13.8676 14.8824 14.1705 14.8824 14.5441C14.8824 14.9177 14.5795 15.2206 14.2059 15.2206H8.79412C8.42051 15.2206 8.11765 14.9177 8.11765 14.5441C8.11765 14.1705 8.42051 13.8676 8.79412 13.8676H14.2059ZM13.8676 10.4853C14.2413 10.4853 14.5441 10.7882 14.5441 11.1618C14.5441 11.5354 14.2413 11.8382 13.8676 11.8382H9.13235C8.75875 11.8382 8.45588 11.5354 8.45588 11.1618C8.45588 10.7882 8.75875 10.4853 9.13235 10.4853H13.8676Z"
                              fill="#FFD700"
                            ></path>
                          </g>
                          <defs>
                            <clipPath id="clip0_194_965">
                              <rect width="23" height="23" fill="white"></rect>
                            </clipPath>
                          </defs>
                        </svg>
                        <p>Total Seats: {tour?.Max_Capacity}</p>
                      </span>

                      {/* <p>Remaining Seats: {tour?.Max_Capacity}</p> */}
                    </div>

                    <div className="PERSON-box">
                      <p>{tour?.price} / PERSON</p>
                      {/* <Link className="none-list" to=`/Memorable/$` style={{textDecoration:'none'}}> */}
                      <button onClick={() => HandleTourNavigation(tour._id)}>
                        Select
                      </button>
                      {/* </Link> */}
                    </div>
                  </div>
                </div>
              ))}
                              
                              </>)

                          }
              
    </div>

                        <div className="tour-btn-box">
                         
                            <button className="hover-btn">
                                <span>View More</span>
                            </button>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )



}


export default FilteredTours