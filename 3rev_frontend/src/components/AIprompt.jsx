import { useState, useEffect , } from 'react';
import React from 'react'
import './aiprompt.css'
import shirtimg from '../assets/men-black-plain-t-shirt-500x500.jpg'

import { Buffer } from 'buffer';
import axios from 'axios';
const AIprompt = (props) => {
  const [description, setDescription] = useState("")
  const [image, setImage] = useState(null)
  const [message, setMessage] = useState("")
  const [isWaiting, setIsWaiting] = useState(false)

  const handleClick = () => {
    
    props.onImageChange("https://i0.wp.com/coolhunting.com/wp-content/uploads/2022/09/f956de51bf9bc6123a8b2f4120fd8566aa9f295f_w1152_h0_fS.png?fit=1152%2C1152&ssl=1")
 }


  const submitHandler = async (e) => {
    e.preventDefault()

    if ( description === "") {
      window.alert("Please provide a name and description")
      return
    }

    setIsWaiting(true)

    // Call AI API to generate a image based on description
    const imageData = await createImage()
    
    setIsWaiting(false)
    setMessage("")

   
  }

  const createImage = async () => {
    setMessage("Generating Image...")

    // You can replace this with different model API's
    const URL = `https://api-inference.huggingface.co/models/prompthero/openjourney-v4`
    
    // Send the request
    const response = await axios({
      url: URL,
      method: 'POST',
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_APP_HUGGING_FACE_API_KEY}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      data: JSON.stringify({
        inputs: description, options: { wait_for_model: true },
      }),
      responseType: 'arraybuffer',
    })

    const type = response.headers['content-type']
    const data = response.data

    const base64data = Buffer.from(data).toString('base64')
    const img = `data:${type};base64,` + base64data // <-- This is so we can render it on the page
    setImage(img)
    localStorage.setItem('image' , JSON.stringify(img))

  

  

    return data
  }

 

  

  return (
    <div className='aiprompt'>
      <h1>Customise your merchandise</h1>
      <form onSubmit={submitHandler} >
        <div className='input_field'>
        <input className='input1' type="text" placeholder="Create a description..." onChange={(e) => setDescription(e.target.value)} />
          <input className='input2' type="submit" value="Generate"  />
        </div>
          
        </form>
        <div className="image">
          {!isWaiting && image ? (
            
            <><div className="div">
            <img className="back" src={shirtimg} alt="" />
            <div className="ai_image">
              <img width={200} height={200} src={image} alt="AI generated image" />
            </div>
          </div>
          <div>
             <a href="/prompt/checkout"><button onClick={handleClick}>Proceed to checkout</button></a> 
            </div></>
          ) : isWaiting ? (
            <div className="image__placeholder">
              <div className="lds-ripple"><div></div><div></div></div>
            </div>
          ) : (
            <></>
          )}
        </div>
    </div>
  )
}

export default AIprompt
