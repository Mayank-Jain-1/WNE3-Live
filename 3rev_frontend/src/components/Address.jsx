import React from 'react'
import './Address.css'

function Address() {
  return (
    <div className='address_container'>  
    <h1>Address </h1>
      
      <form action="">
        <div className="form">
          <div className="names">
            <div className="f_name sw">
              <p>First Name</p>
              <input type="text" className='inputs' name='f_name'/>
            </div>
            <div className="l_name sw">
              <p>Last Name</p>
              <input type="text sw" className='inputs' name='l_name'/>
            </div>
          </div>
          <div className="address">
            <p>Address</p>
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </div>
          <div className="info_1">
            <div className="phone sw">
              <p>Phone</p>
              <input type="text" className='inputs' name='phone'/>
            </div>
            <div className="state sw">
              <p>State</p>
              <input type="text" className='inputs'/>
            </div>
          </div>
          <div className="info_2">
            <div className="city sw">
              <p>City</p>
              <input type="text" className='inputs'/>
            </div>
            <div className="pincode sw">
              <p>Pincode</p>
              <input type="text" className='inputs'/>
            </div>
          </div>
          <button>Submit</button>
        </div>
      </form>
    
    </div>
  )
}

export default Address
