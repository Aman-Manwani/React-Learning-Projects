import React from 'react'
import "./Home.css"
import {Link } from "react-router-dom"
import Home_img from "../src/Building.jpg";
import "./Contact.css";

const Home = () => {
  return (
    <>
      <div className='main-div'>
        <div className='left-div'>
          <header id="header" className="header">
            <h1 className='Home_content'>Hey there, I am <span>Aman Manwani</span> currently Learning <strong>Frontend</strong> Development</h1>
          </header>
          <div className='p-homecontent'>
            <p>I am currently pusuing <span>B.Tech</span> from <span>MAIT DELHI</span></p>
          </div>  
          <div className='get_started'>
            <Link to="/services" className='btn-get-started'>
              Get Started With Us
            </Link>
          </div>
        </div>
        <img src={Home_img}/>
      </div>
    </>
  )
}

export default Home;