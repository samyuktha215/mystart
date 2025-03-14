import React, {  useState } from 'react'
import AWS from '../../images/AWS.png';
import electrical from '../../images/electrical.png';
import mpc from '../../images/mpc.png';
import './contact.css';
import iconfacebook from '../../images/icon-facebook.svg';
import iconinstagram from '../../images/icon-instagram.svg';
import icontwitter from '../../images/icon-twitter.svg';
import iconpinterest from '../../images/icon-pinterest.svg';
import { send } from '@emailjs/browser';
const Contact = () => {

    const [toSend, setToSend] = useState({
        your_name: '',
        your_email: '',
        your_message: '',
      });

      const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
      };

console.log(toSend)
    const sendEmail = (e) => {
        e.preventDefault();
    
        send('service_m7q9yc8', 'template_h2ctue6' , toSend, '7RaGYDv0L6oJTVN-T')
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
          })
          .catch((err) => {
            console.log('FAILED...', err);
          });
      };
  return (
    <section id="contactPage">
        <div id="Education">
            <h1 className="contactPageTitle">My Education</h1>
            <p className="educationDescription">I had done my secondary education and my graduation in my home country, at present studying cloud developer course in Sweden.</p>
        </div>
        <div className="educationImgs">
            <img src={AWS} alt="Education" className="educationImg"/>
            <img src={electrical} alt="Education" className="educationImg"/>
            <img src={mpc} alt="Education" className="educationImg"/>
        </div>
        <div id="contact"> 
         <h1 className="contactPageTitle"> Contact me</h1>
         <span className="contactDescription">Please fill out the form below to discuss any work oppotunities.</span>
         <form className="contactForm"  onSubmit={sendEmail}>
            <input type="text" className="name" placeholder="your name" name='your_name' onChange={handleChange} value={toSend.your_name}/>
            <input type="email" className="email" placeholder="your email"name='your_email' onChange={handleChange} value={toSend.your_email}/>
            <input  className="msg" name="your_message" rows="5" placeholder="Type a message..." onChange={handleChange} value={toSend.your_message}/>
            <button type="submit"  value="send" className="submitButton">submit</button>
            <div className="links">
                <img src={iconfacebook} alt="facebook" className="link"/>
                <img src={iconinstagram} alt="instagram" className="link"/>
                <img src={icontwitter} alt="twitter" className="link"/>
                <img src={iconpinterest} alt="pinterest" className="link"/>
            </div>

         </form>
        </div>
    </section>
  )
}

export default Contact;
