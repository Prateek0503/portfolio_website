import React from 'react'
import './skills.css';
import UIDesign from '../../assets/ui-design.png'
import WebDesign from '../../assets/website-design.png'
import AppDesign from '../../assets/app-design.png'


const Skills = () => {
  return (
   
      <section id='skills'>
        <span className="skillTitle">What I Do ! </span>
        <span className="skillDesc">I am a Skilled professional web developer using react i create website with the help of all things using css and html and java script .</span>
        <div className="skillBars">
                <div className="skillBar">
                    <img src={UIDesign} alt="" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>UI/UX Design</h2>
                        <p>It seems like you're looking for information or guidance related to building a user interface (UI). UI design is a broad topic, and creating an effective user interface involves several considerations, including layout, visual design, usability, and user experience.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={WebDesign} alt="" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>WebDesign</h2>
                        <p>It seems like you're interested in web development or something related to the web. Web development involves creating websites or web applications for various purposes. Here are some key aspects and technologies related to web developmen</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={AppDesign} alt="" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>AppDesign</h2>
                        <p>
                            Designing a mobile app involves creating an attractive and user-friendly interface for a smartphone or tablet application. Here are some key considerations and steps when it comes to app design:</p>
                    </div>
                </div>

        </div>
           
      </section>
   
  )
}

export default Skills
