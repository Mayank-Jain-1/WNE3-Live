import React from 'react'
import './home.css'
import bgimage from '../assets/grid_0.webp'
import linkedin from '../assets/icons8-linkedin-circled-48.png'
import instagram from '../assets/icons8-instagram-48.png'
import twitter from '../assets/icons8-twitter-48.png'
import discord from '../assets/icons8-discord-48.png'
const Home = () => {
  return (
    <div className='mainContainer'>
      <div className="sideSection">
      <img src={bgimage} alt="" />
       
      </div>
      <div className="mainSection">
        <div className="textContainer">
            <p>3REV</p>
            <h1>Open marketplace for all powered by AI </h1>
        </div>
        
        <a href='/prompt'><button className='btn-2'>Try Demo</button></a>
        <div className="socials">
            <a href=""><img src={instagram} alt="" width={25} height={25}/></a>
            <a href=""><img src={linkedin} alt="" width={25} height={25}/></a>
            <a href=""><img src={twitter} alt="" width={25} height={25}/></a>
            <a href=""><img src={discord} alt="" width={25} height={25}/></a>
        </div>
      </div>
    </div>
  )
}

export default Home
