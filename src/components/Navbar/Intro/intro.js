import React from 'react'
import  './intro.css'
// import bg from '../../../assets/image.png'
import bg from '../../../assets/Snapchat-986746536.jpg'
import {Link} from 'react-scroll'
import btnImg from '../../../assets/hireme.png'

const Intro=()=> {
  return (
    <section id='intro'>
        <div className="introContent">
         <span className="hello">Hello</span>
         <span className="introText">I'm <span className="introName">Alhan</span> <br /> Website Designer</span>
         <p className='introPara'>I am a skilled web designer with experience in creating <br /> visually appealing and user friendly websites.</p>
         <Link> <button className='btn' > <img src={btnImg} alt="Hire" className='btnImg'/>  Hire Me</button> </Link>
        </div>
        <img src={bg} className="bg" alt="Profile" />
    </section>
  )
}
export default Intro;