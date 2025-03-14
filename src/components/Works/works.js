import React from 'react'
import './works.css'
import AWSlambda from '../../images/AWSlambda.png'
import onlineshopping from '../../images/onlineshopping.png';
import TDD from '../../images/TDD.png';
import work1 from '../../images/work1.png';
import work2 from '../../images/work2.png';
import work3 from '../../images/work3.png';
const Works = () => {
  return (
    <section id="works">
       <h2 className="worksTitle"> My portfolio</h2>
       <span className='worksDescription'>I take pride in paying attention to the smallest details and making sure that my work is perfect. I am excited to bring my skills and experience to help business acheive their goals and create a strong online presence.</span>
       <div className='worksImgs'>
        <img src={work1} alt="work1"className="worksImg"/>
        <img src={work2} alt="work2"className="worksImg"/>
        <img src={work3} alt="work3"className="worksImg"/>
        <img src={TDD} alt="TDD"className="worksImg"/>
        <img src={onlineshopping} alt="onlineshopping"className="worksImg"/>
        <img src={AWSlambda} alt="AWSlambda"className="worksImg"/>
       </div>
       <button className="workButton">See more</button>
    </section>
  )
}

export default Works;
