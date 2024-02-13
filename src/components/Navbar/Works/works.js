import React from 'react'
import './works.css'
import screenshort1 from '../../../assets/Screenshot (57).png'
import screenshort2 from '../../../assets/Screenshot (58).png'
import screenshort3 from '../../../assets/Screenshot (59).png'
import screenshort4 from '../../../assets/Screenshot (60).png'
import screenshort5 from '../../../assets/Screenshot (61).png'
import screenshort6 from '../../../assets/Screenshot (62).png'
// import Portfolio1 from '../../../assets/portfolio-1.png'
// import Portfolio2 from '../../../assets/portfolio-2.png'
// import Portfolio3 from '../../../assets/portfolio-3.png'
// import Portfolio4 from '../../../assets/portfolio-4.png'
// import Portfolio5 from '../../../assets/portfolio-5.png'
// import Portfolio6 from '../../../assets/portfolio-6.png'

const  Works=()=> {
  return (
     <section id='works'>
    <h2 className="worksTitle">My Portfolio</h2>
    <span className="worksDesc">I take pride in paying attention to the smallest details and making sure that my work is pixel perfect. I am excited to bring my skills and experience to help businesses achieve their goals and create a strong onilne presence.*</span>
    <div className="worksImgs">
      <a href="https://alhanhussain.github.io/YouTube/ "><img src={screenshort1}  alt="" className="worksImg" /></a>  
      <a href="https://alhanhussain.github.io/MoviesApp/ "><img src={screenshort2}  alt="" className="worksImg" /></a>  
      <a href="https://playful-melba-48be4e.netlify.app/ "><img src={screenshort3}  alt="" className="worksImg" /></a>  
      <a href="https://heartfelt-squirrel-8c13e3.netlify.app/ "><img src={screenshort4}  alt="" className="worksImg" /></a>  
      <a href="https://alhanhussain.github.io/JS-FINAL/ "><img src={screenshort5}  alt="" className="worksImg" /></a>  
      <a href="https://alhanhussain.github.io/IPL-TEAM/ "><img src={screenshort6}  alt="" className="worksImg" /></a>  

      
      
      
    </div>
    <button className="worksBtn">See More</button>
     </section>
  )
}
export default Works;