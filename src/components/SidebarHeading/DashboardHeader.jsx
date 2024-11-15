import React from 'react'
import logo from '../../assets/Images/nav-logo.png';
import searchicon from '../../assets/dashboard/search.png';
import togglebutton from '../../assets/dashboard/togglebutton.png';
import Dropdownicon from '../../assets/dashboard/Down_Arrow_3_.png';
import CommentsIcon from '../../assets/dashboard/comments.png';
import Bellicon from '../../assets/dashboard/bellicon.png';
import profilePIC from '../../assets/dashboard/Profilepic.png';
import Dropdown from 'react-bootstrap/Dropdown';
import { useNavigate } from 'react-router-dom';
const DashboardHeader = (toggleSidebar) => {

    const navigate = useNavigate()

    const handleLogout=()=>{

        navigate('/')
        window.location.reload()

    }



    return (
        <>
            <div className="Dash--Header--main">
                <div className="logoHeader">
                    <img src={logo} alt="Headerlogo" />
                </div>


                {/* <div className="Header--center">

                <div className="togglebuttonHeader" onClick={toggleSidebar}>
                    <img src={togglebutton} alt="togglebutton" />
                </div>

                <div className="searchbar">
                    <input type="text" name='text' placeholder='Search' />
                    <img src={searchicon} alt="searchicon" />
                </div>

                </div> */}



              {/* <div className="commentsicon">
                        <img src={CommentsIcon} alt="CommentsIcon" />
                    </div>

                    <div className="bellicon">
                        <img src={Bellicon} alt="Bellicon" />
                    </div> */}


                <div className="Header--end">
      


                    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
 

                    <div className="profilepic">
                        <img src={profilePIC} alt="profilePIC" />
                        <h5>Admin</h5>
                    </div>

                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="12" viewBox="0 0 21 12" fill="none">
  <path d="M10.5 12C10.2559 12 10.0116 11.9023 9.82518 11.707L0.279741 1.70705C-0.093247 1.31631 -0.093247 0.683559 0.279741 0.293061C0.652729 -0.097437 1.25672 -0.097687 1.62947 0.293061L10.5 9.58601L19.3706 0.293061C19.7436 -0.097687 20.3476 -0.097687 20.7203 0.293061C21.0931 0.683809 21.0933 1.31656 20.7203 1.70705L11.1749 11.707C10.9885 11.9023 10.7442 12 10.5 12Z" fill="#FFD700"/>
</svg>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {/* <Dropdown.Item href="/"> */}
        <Dropdown.Item onClick={() => handleLogout()}>
        
        LOGOUT</Dropdown.Item>
        
      </Dropdown.Menu>

    </Dropdown>                    
    
 


                   


                </div>
            </div>
        </>
    )
}

export default DashboardHeader
