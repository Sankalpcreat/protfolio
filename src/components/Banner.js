import React from 'react'
import {FaFacebookF,FaLinkedinIn,FaGithub,FaApple} from "react-icons/fa";
import { TbPlayerPlayFilled } from "react-icons/tb";



const Banner = () => {
  const[state]=React.useState({title:"I am Sankalp Singh",text:"i,m sankalp,front end developer having experience in Reactjs,CSS,Bootstrap",
       image:"/images/sankalp.png"})
  return (
    <header className='header'>
      <div className='container'>
        <div className='row'>
          <div className='col-6'>
            <div className='header__content'>
              <div className='header__section'>
              <ul className='header__ul'>
                <li>
                  <FaFacebookF/>
                </li>
                <li>
                <FaLinkedinIn/>
                </li>
                <li>
                <FaGithub/>
                </li>
                <li>
                <FaApple/>
                </li>
              </ul>
              <h1>{state.title}</h1>
              <p>
                {state.text}
              </p>
              <div className='header_buttons'>
                <a href='!#' className='btn btn-outline'>My Portfolio</a>
                &nbsp;&nbsp;&nbsp;
                <a href='!#' className='btn btn-smart'><TbPlayerPlayFilled className='play'/></a>
              </div>
              </div>
            </div>
            </div>
            <div className='col-6'>
              <div className='banner__image'>
                <img src={state.image} alt="man"/>
              </div>
            </div>
          </div>
        </div>
    </header>
  )
}

export default Banner
