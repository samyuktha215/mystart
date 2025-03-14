import React from 'react';
import './intro.css';
import background1 from '../../images/background1.png';
import { Link } from 'react-scroll';
import hireme from '../../images/hireme.png';
const Intro = () => {
  return (
   <section id="intro">
       <div className="introContent">
           <span className="hello">Hello,</span>
           <span className="introText">I'm <span className="introName">Samyuktha</span> <br/>  Cloud Developer</span>
            <p className="introPara"> I'm a skilled developer who has experience in creating <br/> user interfaces, has done various projects using AWS. </p>
            <Link><button className="button"><img src={hireme} alt="hire me" className="buttonImg" />Hire me</button>
            </Link>
            
       </div>
       <img src={background1} alt="background1" className="background1"/>
   </section>
  )
}

export default Intro;
