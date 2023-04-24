import React from 'react'
import './productpage.css'
import shirtimg from '../assets/men-black-plain-t-shirt-500x500.jpg'

const Productpage = () => {
  return (
    <div className='Maincontainer'>
        <h1>Checkout </h1>
        <div className="productinfo">
      <div className="Imagecontainer">
         <img src={shirtimg} alt="background image for merchandise" />
         <div className="Aiimage">
            <img src="" alt="" />
         </div>
      </div>
      <div className="Infocontainer">
         <h1>Custom Unisex T-shirt</h1>
         <p>Unisex</p>
         <span>Custom merch with AI generated design</span>
         <h2>₹799</h2>
         <h5>-10% discount</h5>
         <div className="buy-btn">
         <a href={import.meta.env.VITE_APP_GFORM_URL} target='_blank'><button>Buy Now</button></a>
         </div>
      </div>
      </div>
    </div>
  )
}

export default Productpage
