import React, { useState } from 'react';
import './ImageComponent.css';
import { useNavigate } from 'react-router-dom';

const ImageComponent = () => {
  const [prompt, setPrompt] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [loading, setLoading] = useState(false); // New loading state

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading state to true

    const data = { inputs: prompt };
    const response = await query(data);
    const imageUrl = URL.createObjectURL(response);
    setImageURL(imageUrl);
    console.log(imageUrl);

    navigate('/checkout', { state: { imageURL: imageUrl } });
    setLoading(false); // Set loading state to false after image is loaded
  };

  const query = async (data) => {
    const response = await fetch(
      'https://api-inference.huggingface.co/models/prompthero/openjourney',
      {
        headers: { Authorization: 'Bearer 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' },
        method: 'POST',
        body: JSON.stringify(data),
      }
    );
    const result = await response.blob();
    return result;
  };

  return (
    <div className='div'>
      <h1>Create anything with prompt</h1>
      <form onSubmit={handleSubmit} className='formtest'>
        <div className='inputSection'>
          <input
            type='text'
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder='Enter prompt'
          />
          <button type='submit'>Submit</button>
        </div>
      </form>
      {loading ? ( // Render "loading..." message while loading is true
        <div>Loading...</div>
      ) : (
        imageURL && (
          <div>
            <img src={imageURL} alt='Generated Image' />
          </div>
        )
      )}
    </div>
  );
};

export default ImageComponent;

