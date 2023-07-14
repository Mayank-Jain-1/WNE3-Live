import React from 'react';
import './productpage.css';
import shirtimg from '../assets/men-black-plain-t-shirt-500x500.jpg';

import { useLocation,useNavigate } from 'react-router-dom';

const Productpage = () => {
  const location = useLocation();
  const imageURL = location.state?.imageURL || '';

  const navigate = useNavigate()

  return (
    <div className='Maincontainer'>
      <h1>Checkout</h1>
      <div className='productinfo'>
        <div className='Imagecontainer'>
          <img src={shirtimg} alt='background image for merchandise' />
          <div className='aimage'>
            <img src={imageURL} alt='' />
          </div>
        </div>
        <div className='Infocontainer'>
          <h1>Custom Unisex T-shirt</h1>
          <p>Unisex</p>
          <span>Custom merch with AI generated design</span>
          <h2>₹799</h2>
          <h5>-10% discount</h5>
          <div className='buy-btn'>
            <a >
              <button onClick={()=>{navigate('./address')}}>Buy Now</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productpage;
