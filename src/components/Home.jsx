import React from 'react'
import './home.css'
import bgimage from '../assets/grid_0.webp'
import linkedin from '../assets/icons8-linkedin-circled-48.png'
import instagram from '../assets/icons8-instagram-48.png'
import twitter from '../assets/icons8-twitter-48.png'
import disocrd from '../assets/icons8-discord-48.png'
const Home = () => {
  return (
    <div className='mainContainer'>
      <div className="sideSection">
      <img src={bgimage} alt="" />
       
      </div>
      <div className="mainSection">
        <div className="textContainer">
            <p>3REV</p>
            <h1>Open marketplace for all powered by AI</h1>
        </div>
        <a href="/prompt"><button>Get Started</button></a>
        <div className="socials">
            <a href=""><img src={instagram} alt="" width={35} height={35}/></a>
            <a href=""><img src={linkedin} alt="" width={35} height={35}/></a>
            <a href=""><img src={twitter} alt="" width={35} height={35}/></a>
            <a href=""><img src={linkedin} alt="" width={35} height={35}/></a>
        </div>
      </div>
    </div>
  )
}

export default Home
