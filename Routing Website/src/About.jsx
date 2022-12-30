import React from 'react'
import "./About.css";
import About_img from "../src/laptop.jpg";

const About = () => {
  return (
    <>
      <div className='main_div'>
        <div className='left_div'>
          <h1 className='about_heading'> Welcome to<span> About </span> Page</h1>
          <ul>
            <li>I am <strong> Frontend</strong> Developer</li>
            <li>I am pursuing<strong> B.Tech </strong>from MAIT DELHI</li>
            <li>I am currently seeking to learn Backend Development</li>
            <li>I would love to play Basketball,Music and CODING</li>
            <li><strong>Competitive Programming</strong> is Love</li>
            <li>Also Love to solve Real life Problems through CODING</li>
          </ul>
        </div>
        <img src={About_img} className='about_img'/>
      </div>
    </>
  )
}

export default About;
