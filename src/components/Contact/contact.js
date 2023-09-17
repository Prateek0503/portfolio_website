import React, {useRef} from 'react';
import './contact.css';
import Walmart from '../../assets/walmart.png';
import Microsoft from '../../assets/microsoft.png';
import Facebook from '../../assets/facebook.png';
import Adobe from '../../assets/adobe.png';
import FacebookIcon from '../../assets/facebook-icon.png';
import TwitterIcon from '../../assets/twitter.png';
import YoutubeIcon from '../../assets/youtube.png';
import InstagramIcon from '../../assets/instagram.png';
import emailjs from '@emailjs/browser';


const Contact = () =>{
 


  return (
   

  <section id="contactPage" >
<div id="clients">
                <h1 className="contactPageTitle"> My Client</h1>
                <p className="clientDisc"> iha sthe oppurninty to work with a diverse goup of comante some of the noablre compaies Meta Platforms, Inc., doing business as Meta, and formerly named Facebook, Inc., and TheFacebook, Inc., is an American multinational technology conglomerate based in Menlo Park, California. The company owns and operates Facebook, Instagram, Threads, and WhatsApp, among other products and services. </p>
                <div className="clientImgs">
                    <img src={Walmart} alt="client" className="clientImg" />
                    <img src={Microsoft} alt="client" className="clientImg" />
                    <img src={Facebook} alt="client" className="clientImg" />
                    <img src={Adobe} alt="client" className="clientImg" />
                 </div>
</div>
    <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDisc">Please fill ou the form</span>
        <form className="contactForm">
            <input type="text" className="name" placeholder="Your Name"  />
            <input type="email" className="email" placeholder="Your Email" />
            <textarea  name="message" className="msg" rows="5" placeholder="Your Email" > </textarea>
            <button className="submitBtn" type='submit' value='Send'> Submit</button>
        </form>
        <div className="links">
            <img src={FacebookIcon} className="link"  alt="" />
            <img src={TwitterIcon} className="link" alt="" />
            <img src={YoutubeIcon} className="link"  alt=""/>
            <img src={InstagramIcon} className="link"  alt=""/>
        </div>
    </div>
  </section>
  )
}

export default Contact
