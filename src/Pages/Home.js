import React from 'react'
import web from '../images/img1.webp'
import './Home.css'

function Home() {
    return (
        
             <div className='mainContainer'>
                <div className='thodaContent'>
                      <h1>Grow Your Knowledge With <br/>
                      <strong className='brand-name'>  Gospeller</strong></h1>
                      <p  >I am a talented developer making Websites</p>
                      <button href='/about' className='btn' >Get Started</button>
                </div>
                <div className='moreContent'>
                       <img src={web} width="450px" height="300px"/>
                </div>
             </div>
        
    )
}

export default Home