import React from 'react';
import './intro.css';
import bg from '../../assets/bg1.png';
import btnImg from '../../assets/hireme.png';
import { Link } from 'react-scroll';




const Intro = () => {
  return (
  
      <section id="intro">
      <div className="introContent">
        <span className="hello">Hola,</span>
         <span className="introText">I'm <span className="introName">Prateek Tiwari</span> <br/> Website Designer<span/></span>
               <p className="introPara">I am a skilled web developer using react im creating this website<br/> with handfull experince of of web development </p>
        <Link> <button className="btn" ><img src={btnImg} alt="" className="btnImg" />Hire me</button></Link>

       </div>
       <img src={bg} alt="Profile" className="bg" />
       </section>



    
  )
}

export default Intro
