import React from 'react'

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar__container">
          <ul className="navbar__left">
            <div className="navbar__left-logo">
              <img src="/images/logo.png" alt="logo" />
            </div>
          </ul>
          
            <ul className="navbar__right">
              <li>
                <a href="!#">Home</a>
              </li>
              <li>
                <a href="!#">Services</a>
              </li>
              <li>
                <a href="!#">About</a>
              </li>
              <li>
                <a href="!#">Skills</a>
              </li>
              <li>
                <a href="!#">Portfolio</a>
              </li>
              <li>
                <a href="!#">Blog</a>
              </li>
              <li>
                <a href="!#">Contact</a>
              </li>
            </ul>
        </div>
      </div>
    </nav>
  );
};


export default  Nav
 