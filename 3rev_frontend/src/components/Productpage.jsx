import React from 'react'
import './productpage.css'
import shirtimg from '../assets/men-black-plain-t-shirt-500x500.jpg'
import aimage from '../assets/download 3.jpeg'


const aiimage = localStorage.getItem('image');
const datalog = () =>{
  console.log(aiimage)
}



const Productpage = (props) => {
  return (
    <div className='Maincontainer'>
        <h1>Checkout </h1>
        <div className="productinfo">
      <div className="Imagecontainer">
         <img src={shirtimg} alt="background image for merchandise" />

         
         <div className="aimage"><img src={aimage}  alt="" /></div>
      </div>
      <div className="Infocontainer">
         <h1>Custom Unisex T-shirt</h1>
         <p>Unisex</p>
         <span>Custom merch with AI generated design</span>
         <h2>₹799</h2>
         <h5>-10% discount</h5>
         <div className="buy-btn">
         <a href='/address' ><button onClick={datalog}>Buy Now</button></a>
         </div>
      </div>
      </div>
    </div>
  )
}

export default Productpage
