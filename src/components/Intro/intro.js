import React from 'react';
import './intro.css';
import bg from '../../assets/bg1.png';
import btnImg from '../../assets/hireme.png';
// import resume from '../../assets/Resume.pdf';

import { Link } from 'react-scroll';




const Intro = () => {
  return (
  
      <section id="intro">
      <div className="introContent">
        <span className="hello">Hola,</span>
         <span className="introText">I'm <span className="introName">Prateek Tiwari</span> <br/> Website Designer<span/></span>
               <p className="introPara">A Web developer using reactjs i'm <br/>creating this website an Avid learner and <br/>Tech Enthusiast. </p>


        <Link>
        <button  className="btn"  >
          <img src={btnImg} alt="" className="btnImg" /> My Resume</button>
          </Link>

       </div>
       <img src={bg} alt="Profile" className="bg" />
       </section>



    
  )
}

export default Intro
