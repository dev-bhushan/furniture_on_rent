import React from 'react'

export default function Header() {
  return (
    <div>
    <div className="sticky">
      <div className="container"> 
        <div className="logo"> <a href="index.html"><img className="img-responsive" src="images/logo.png" alt="" /></a> </div>
        <div className="navbar ownmenu">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#nav-open-btn" aria-expanded="false"> <span className="sr-only">Toggle navigation</span> <span className="icon-bar"><i className="fa fa-navicon"></i></span> </button>
          </div>
          
          <div className="collapse navbar-collapse" id="nav-open-btn">
            <ul className="nav">
              <li className="dropdown active"> <a href="#." className="dropdown-toggle" data-toggle="dropdown">Home</a>
              </li>
              <li> <a href="about-us_01.html">About </a> </li>
              
              <li> <a href="contact.html"> contact</a> </li>
            </ul>
          </div>
          
         
        </div>
      </div>
    </div>
    </div>
 )
}