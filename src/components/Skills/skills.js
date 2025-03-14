import React from 'react'
import './skills.css';
import javadeveloper from '../../images/javadeveloper.png';
import cloud from '../../images/cloud.png';
import SQL from '../../images/SQL.png';
const Skills = () => {
  return (
   <section id="skills">
     <span className="skillTitle"> What I do</span>
     <span className="skillDescription"> I am a skilled and passionate cloud developer who likes doing projects using AWS services and enjoys collaborating with others in doing projects.</span>
     <div className="skillBars">
     <div className="skillBar">
            <img src={javadeveloper} alt="javadeveloper" className="skillBarImg"/>
              <div className="skillBarText">
                    <h2>Java developer</h2>
                    <p>Got the ability to do Java based projects using OOPS concepts.</p>
              </div>
      </div>
      <div className="skillBar">
            <img src={cloud} alt="cloud" className="skillBarImg"/>
              <div className="skillBarText">
                    <h2>Cloud developer</h2>
                    <p>Able to create CI/CD pipeline using all the AWS servives.</p>
              </div>
      </div>
      
      <div className="skillBar">
            <img src={SQL} alt="SQL" className="skillBarImg"/>
              <div className="skillBarText">
                    <h2>SQL</h2>
                    <p>Retrieving and quering data is widely managed.</p>
              </div>
      </div>
     </div>
      
   </section>
  )
}

export default Skills;
