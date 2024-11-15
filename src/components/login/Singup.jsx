import React from "react";
import { Link } from "react-router-dom";
import loginx  from "../../assets/Images/login.png";
import crous  from "../../assets/Images/crous.png";
const Singup = () => {


    return (
        <>
        <section className="Login">
        <Link className="none-list" to='/' style={{textDecoration:'none'}}>
          <button className="crous">
            <img src={crous} alt="" />
          </button>
          </Link>
          <div className="main-Login">
            <div className="Login-form">
              <h2>SIGN</h2>
              <form action="">
              <div className="LOGIN-input-box">
                  <label htmlFor="">Name*</label>
                  <input type="text" />
                </div>
                <div className="LOGIN-input-box">
                  <label htmlFor="">Email*</label>
                  <input type="email" />
                </div>
                <div className="LOGIN-input-box">
                  <label htmlFor="">Password*</label>
                  <input type="password" />
                </div>

                <div className="LOGIN-input-box">
                  <label htmlFor="">Confirm  Password*</label>
                  <input type="password" />
                </div>



                <button>Sign Up</button>

                <p>Have an account?       <span><Link className="none-list" to='/Login' style={{textDecoration:'none'}}>Login</Link></span></p>
              </form>
            </div>

            <div className="Login-bg">
              <img src={loginx} alt="" />
            </div>
          </div>
        </section>
        </>
    )



}


export default Singup