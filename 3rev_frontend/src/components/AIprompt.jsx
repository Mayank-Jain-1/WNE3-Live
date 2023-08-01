import { useState } from "react";
import { Link } from "react-router-dom";
import PromptCard from "./prompts/PromptCard";

const AIprompt = () => {
	const [types, setTypes] = useState({
		Hoodies: false,
		"T-shirts": false,
		Shorts: false,
		Sneakers: false,
		"Full sleeve": false,
	});

	const [prompt, setPrompt] = useState("");

	return (
		<div className="bg-[#151515] min-h-screen w-full">
			{/* Navbar */}
			<nav className="flex justify-between items-center  space-x-6 px-[18px] py-[37px] md:px-12 xl:px-[52px]">
				<Link
					to={"/"}
					className="font-Russo text-white text-[23px] md:text-[30px] none"
				>
					WNE3<span className="text-Aqua">Live</span>
				</Link>
			</nav>

			<div className="flex flex-col items-center text-white w-full px-5 sm:px-9 md:px-12">
				<h1 className="font-Manrope  text-3xl sm:text-5xl lg:text-[64px] font-extrabold ">
					Create anything with prompts
				</h1>
				<div className="max-w-[831px] w-full flex items-center mt-[55px] mb-[45px] bg-black h-[50px] px-[6px] py-[6px] rounded-[30px] border border-[#595959] ">
					<input
						type="text"
						className="w-full mx-[44px] bg-transparent focus:outline-none font-Manrope placeholder:text-[#868686]"
						placeholder="Type in your prompts"
						value={prompt}
						onChange={(e) => setPrompt(e.target.value)}
					/>
					<button className="w-40 bg-gradient-to-r from-[#5E81FF] to-[#00D1FF] h-full rounded-[20px] text-sm">
						GENERATE
					</button>
				</div>

				{/* Filters  */}
				<div className="w-full flex justify-center">
					<div className="gap-5 flex flex-wrap justify-around">
						{Object.keys(types).map((type, index) => {
							return (
								<button
									onClick={() => {
										setTypes({ ...types, [type]: !types[type] });
									}}
									className={`${
										types[type]
											? "text-black bg-white"
											: "text-white bg-transparent"
									} w-[85px] h-[18px] rounded-[10px] font-Manrope font-extrabold border border-white text-[10px] shrink-0  no-scrollbar`}
								>
									{type}
								</button>
							);
						})}
					</div>
				</div>

				{/* Models */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 my-16">
					<PromptCard
						bgImage={"/images/hoodie.png"}
						image={""}
						title={"Hoodies - Black XL"}
						price={799}
					/>
					<PromptCard
						bgImage={"/images/hoodie.png"}
						image={""}
						title={"Hoodies - Black XL"}
						price={799}
					/>
					<PromptCard
						bgImage={"/images/hoodie.png"}
						image={""}
						title={"Hoodies - Black XL"}
						price={799}
					/>
					<PromptCard
						bgImage={"/images/hoodie.png"}
						image={""}
						title={"Hoodies - Black XL"}
						price={799}
					/>
					<PromptCard
						bgImage={"/images/hoodie.png"}
						image={""}
						title={"Hoodies - Black XL"}
						price={799}
					/>
					<PromptCard
						bgImage={"/images/hoodie.png"}
						image={""}
						title={"Hoodies - Black XL"}
						price={799}
					/>
					<PromptCard
						bgImage={"/images/hoodie.png"}
						image={""}
						title={"Hoodies - Black XL"}
						price={799}
					/>
					<PromptCard
						bgImage={"/images/hoodie.png"}
						image={""}
						title={"Hoodies - Black XL"}
						price={799}
					/>
				</div>
			</div>
		</div>
	);
};

export default AIprompt;

// import { useState, useEffect , } from 'react';
// import React from 'react'
// import './aiprompt.css'
// import useImageStore from './imagestore';
// import shirtimg from '../assets/men-black-plain-t-shirt-500x500.jpg'
// import { useNavigate } from "react-router-dom";
// import { Buffer } from 'buffer';
// import axios from 'axios';
// const AIprompt = (props) => {
//   const [description, setDescription] = useState("")
//   const [image, setImage] = useState(null)
//   const [message, setMessage] = useState("")
//   const [isWaiting, setIsWaiting] = useState(false)

//   const handleClick = () => {

//     props.onImageChange("https://i0.wp.com/coolhunting.com/wp-content/uploads/2022/09/f956de51bf9bc6123a8b2f4120fd8566aa9f295f_w1152_h0_fS.png?fit=1152%2C1152&ssl=1")
//  }

//   const submitHandler = async (e) => {
//     e.preventDefault()

//     if ( description === "") {
//       window.alert("Please provide a name and description")
//       return
//     }

//     setIsWaiting(true)

//     // Call AI API to generate a image based on description
//     const imageData = await createImage()

//     setIsWaiting(false)
//     setMessage("")

//   }

//   const createImage = async () => {
//     setMessage("Generating Image...")

//     // You can replace this with different model API's
//     const URL = `https://api-inference.huggingface.co/models/prompthero/openjourney-v4`

//     // Send the request
//     const response = await axios({
//       url: URL,
//       method: 'POST',
//       headers: {
//         Authorization: `Bearer ${import.meta.env.VITE_APP_HUGGING_FACE_API_KEY}`,
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//       },
//       data: JSON.stringify({
//         inputs: description, options: { wait_for_model: true },
//       }),
//       responseType: 'arraybuffer',
//     })

//     const type = response.headers['content-type']
//     const data = response.data

//     const base64data = Buffer.from(data).toString('base64')
//     const img = `data:${type};base64,` + base64data // <-- This is so we can render it on the page
//     setImage(img)

//     return data
//   }

//   return (
//     <div className='aiprompt'>
//       <h1>Create anything with prompts </h1>
//       <form onSubmit={submitHandler} >
//         <div className='input_field'>
//         <input className='input1' type="text" placeholder="Create a description..." onChange={(e) => setDescription(e.target.value)} />
//           <input className='input2' type="submit" value="Generate"  />
//         </div>

//         </form>
//         <div className="image">
//           {!isWaiting && image ? (

//             <><div className="div">
//             <img className="back" src={shirtimg} alt="" />
//             <div className="ai_image">
//               <img width={200} height={200} src={image} alt="AI generated image" />
//             </div>
//           </div>
//           <div>
//              <a href="/prompt/checkout"><button onClick={handleClick}>Proceed to checkout</button></a>
//             </div></>
//           ) : isWaiting ? (
//             <div className="image__placeholder">
//               <div className="lds-ripple"><div></div><div></div></div>
//             </div>
//           ) : (
//             <></>
//           )}
//         </div>
//     </div>
//   )
// }

// export default AIprompt
