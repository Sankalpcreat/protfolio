import React from 'react'
import {
FaFacebookF,
FaLinkedinIn,
FaGithub,
FaApple} 
from "react-icons/fa";
const Contact = () => {
   
  return (
   <div className="contact">
    <div className="container">
    <div className="contactSection">
            <div className="row justifyCenter">
                <div className="col-6">
                <div className="contactSection-logo">
            <img src="/images/logo.png" alt="logo" />
            </div>
                   <p>
                   Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Doloremque, enim quaerat dicta modi corrupti
                      obcaecati ullam odio optio iure vitae nesciunt
                       dolorum officia quas a saepe sapiente, iusto possimus natus!
                   </p>
                    <ul className="contactcircle">
                       
                            <li><FaFacebookF/></li>
                            <li><FaLinkedinIn/></li>
                            <li><FaGithub/></li>
                            <li><FaApple/></li>
                        
                    </ul>
                </div>
            </div>
        
    </div>
      </div>
    </div>
  
  )
}

export default Contact
