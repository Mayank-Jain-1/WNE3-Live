import { useState, useEffect } from 'react';
import React from 'react'
import './aiprompt.css'
import { Buffer } from 'buffer';
import axios from 'axios';
const AIprompt = () => {

  const [description, setDescription] = useState("")
  const [image, setImage] = useState(null)
  const [url, setURL] = useState(null)

  const [message, setMessage] = useState("")
  const [isWaiting, setIsWaiting] = useState(false)

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
    const URL = `https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-2`
    
    // Send the request
    const response = await axios({
      url: URL,
      method: 'POST',
      headers: {
        Authorization: `Bearer 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`,
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

    return data
  }

  return (
    <div>
      <h1>Type something cool....</h1>

      <form onSubmit={submitHandler}>
         
          <input className='input1' type="text" placeholder="Create a description..." onChange={(e) => setDescription(e.target.value)} />
          <input className='input2' type="submit" value="Generate" />
        </form>

        <div className="image">
          {!isWaiting && image ? (
            <div className="div">
            <img width={400} height={400} src={image} alt="AI generated image" />
            <button>Proceed</button>
            </div>
          ) : isWaiting ? (
            <div className="image__placeholder">
              
              <p>{message}</p>
            </div>
          ) : (
            <></>
          )}
        </div>
    </div>
  )
}

export default AIprompt
