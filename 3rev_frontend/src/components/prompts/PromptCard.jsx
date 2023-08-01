import React from "react";

const PromptCard = ({ className, image, bgImage, title, price }) => {
	return (
		<div className="">
			<div className="relative w-[250px] h-56 mb-2">
				<img
					src={bgImage}
					alt=""
					className="absolute left-0 top-0 w-full h-full object-cover"
				/>
				<img
					src={image || "/images/defaultprompt.png"}
					alt=""
					className="absolute z-10 left-1/2 top-1/2 w-[56px] h-[61px] -translate-x-1/2 -translate-y-1/2"
				/>
			</div>
			<div className="text-start px-4  text-Manrope font-semibold tracking-[-0.4px]">
				<h1 className="text-xl">{title}</h1>
				<p >Rs. {price}</p>
			</div>
		</div>
	);
};

export default PromptCard;
