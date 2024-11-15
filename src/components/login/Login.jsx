import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginx  from "../../assets/Images/login.png";
import crous  from "../../assets/Images/crous.png";
import { baseurl } from "../../BaseUrl";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
const Login = () => {

const navigate=useNavigate()

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("hitt")

    try {
      const loginData = { email, password };
      const response = await axios.post(`${baseurl}/login`, loginData);
      console.log(response.data.checkUser);
      await Decrypt_Token(response.data.checkUser);
    } catch (error) {
      console.error("There was an error logging in:", error);
      toast.error( error.response?.data?.error || "An error occurred", "error");
    }
  };

  const Decrypt_Token = async (token) => {
    try {
      const response = await axios.get(`${baseurl}/protected`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      console.log(response.data,"SING");
 

      navigate('/adminboatsharegreecedashboard')

    
    } catch (error) {
      console.error('Failed to fetch details:', error);
      showAlert("Error!", "Failed to fetch user details.", "error");
    }
  };





    return (
        <>
        <ToastContainer/>
        <section className="Login">
        <Link className="none-list" to='/' style={{textDecoration:'none'}}>
          <button className="crous">
            <img src={crous} alt="" />
          </button>
          </Link>
          <div className="main-Login">
            <div className="Login-form">
              <h2>LOGIN</h2>
              <form action="">
                <div className="LOGIN-input-box">
                  <label htmlFor="">Email*</label>
                  <input type="email" 
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="LOGIN-input-box">
                  <label htmlFor="">Password*</label>
                  <input type="password"
                     onChange={(e) => setPassword(e.target.value)}
                  
                  />
                </div>


                {/* <div className="LOGIN-input-box">
                <div class="checkbox-wrapper-46">
  <input type="checkbox" id="cbx-46" class="inp-cbx" />
  <label for="cbx-46" class="cbx"
    ><span>
      <svg viewBox="0 0 12 10" height="10px" width="12px">
        <polyline points="1.5 6 4.5 9 10.5 1"></polyline></svg></span><span>Remember</span>
  </label>
</div>
                </div> */}

                <button  onClick={handleSubmit}>Login</button>

                 
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


export default Login