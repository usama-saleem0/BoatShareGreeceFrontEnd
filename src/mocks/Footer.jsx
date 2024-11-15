import React from "react";

import tw from "../../src/assets/Images/tw.png";
import you from "../../src/assets/Images/you.png";
import fb from "../../src/assets/Images/fb.png";
import ins from "../../src/assets/Images/in.png";
import logo from "../../src/assets/Images/footer-logo.png";
import cl from "../../src/assets/Images/cl.png";
import el from "../../src/assets/Images/el.png";
import ll from "../../src/assets/Images/ll.png";

import fg1 from "../../src/assets/Images/hello1.jpeg";
import fg2 from "../../src/assets/Images/hello2.jpg";
import fg3 from "../../src/assets/Images/hello3.jpg";
import fg4 from "../../src/assets/Images/hello4.jpg";
import fg5 from "../../src/assets/Images/hello5.jpg";
import fg6 from "../../src/assets/Images/hello6.jpeg";
import { Link } from "react-router-dom";
const Footer = () => {
    return (

        <footer>
            <div className="container">
                <div className="main-footer">
                    <div className="footer-part-1">


                        <div className="footer-logo">
                            <img src={logo} alt="" />
                        </div>

                        <p>Speak directly now by clicking the WhatsApp logo .</p>

                        <div className="footer-socuil-icon">
                            <img src={fb} alt="" />
                            <img src={ins} alt="" />
                            <img src={tw} alt="" />
                            <img src={you} alt="" />
                        </div>
                    </div>

                    <div className="footer-part-2">
                        <h2>Contact Details</h2>
                        <ul>
                            <li>
                                <span>
                                <img src={cl} alt="" />
                                </span>
                                <p>+30 6978131329</p>
                            </li>


                            
                            <li>
                             
                            <span>
                                <img src={el} alt="" />
                                </span>
                                <p><a href="mailto:info@boatsharegreece.com" style={{textDecoration:'none',color:'white'}}>info@boatsharegreece.com</a></p>
                               
                            </li>

                            
                            <li>
                            <span>
                                <img src={ll} alt="" />
                                </span>
                                    <p>Zakynthos, Greece</p>
                             
                            </li>
                        </ul>
                    </div>


                    <div className="footer-part-2">
                        <h2>Useful Link</h2>
                        <ul>
                            <li>
                            <Link className="none-list" to='/' style={{textDecoration:'none'}}>
                                <p>Home</p>
                                </Link>
                            </li>


                            
                            <li>
                            <Link className="none-list" to='/About' style={{textDecoration:'none'}}>
                           
                                    <p>About</p>
                                    </Link>
                            </li>

                            
                            <li>
                            <Link className="none-list" to='/' style={{textDecoration:'none'}}>
                                    <p>Blogs</p>
                                    </Link>
                            </li>

                            <li>
                            <Link className="none-list" to='/Contact' style={{textDecoration:'none'}}>
                           <p>Contact</p>
                           </Link>
                   </li>
                        </ul>
                    </div>

                    <div className="footer-part-2">
                        <h2>Our Gallery</h2>


                       <div className="footer-imger-list">
       

                        <div className="pic-footer">
                        <Link className="none-list" to='/Gallery' style={{textDecoration:'none'}}>
                            <img src={'http://res.cloudinary.com/dcd0ad1pk/image/upload/v1730381044/bulabkmvhous8pm56bwu.png'} alt="" />
                            </Link>
                        </div>
                      



                        
                        <div className="pic-footer">
                        <Link className="none-list" to='/Gallery' style={{textDecoration:'none'}}>
                            <img src={'http://res.cloudinary.com/dcd0ad1pk/image/upload/v1730381043/bndsoanthmtcyvlr9caq.png'} alt="" />
                            </Link>

                        </div>
                     
                 
                        <div className="pic-footer">
                        <Link className="none-list" to='/Gallery' style={{textDecoration:'none'}}>
                            <img src={'http://res.cloudinary.com/dcd0ad1pk/image/upload/v1730381042/fqnuge0i6fw0dz2uu6dk.png'} alt="" />
                            </Link>
                        </div>
                   
                        
                        <div className="pic-footer">
                        <Link className="none-list" to='/Gallery' style={{textDecoration:'none'}}>
                            <img src={'http://res.cloudinary.com/dcd0ad1pk/image/upload/v1730381041/g3lso4wnjbbcierzhk3c.png'} alt="" />
                            </Link>
                        </div>
                       
                       
                        <div className="pic-footer">
                        <Link className="none-list" to='/Gallery' style={{textDecoration:'none'}}>
                            <img src={'http://res.cloudinary.com/dcd0ad1pk/image/upload/v1730381040/txrmrdholaggdueygzjk.png'} alt="" />
                            </Link>
                        </div>
                       
                       
                        <div className="pic-footer">
                        <Link className="none-list" to='/Gallery' style={{textDecoration:'none'}}>
                            <img src={'http://res.cloudinary.com/dcd0ad1pk/image/upload/v1730381039/n8sbcpeh1phyqwf4wsnl.png'} alt="" />
                            </Link>
                        </div>
                       

                       </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
