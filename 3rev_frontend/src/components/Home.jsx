import React from "react";
import "./home.css";
import bgimage from "../assets/grid_0.webp";
import linkedin from "../assets/icons8-linkedin-circled-48.png";
import instagram from "../assets/icons8-instagram-48.png";
import twitter from "../assets/icons8-twitter-48.png";
import discord from "../assets/icons8-discord-48.png";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
	const navigate = useNavigate();

	return (
		<div className="flex">
			<div className="w-full min-h-screen bg-transparent  md:bg-black flex flex-col md:justify-between">
				<div className="flex justify-between items-center  space-x-6 px-[18px] py-[37px] md:px-12 xl:px-[52px]">
					<Link
						to={"/"}
						className="font-Russo text-white text-[23px] md:text-[30px] none"
					>
						WNE3<span className="text-Aqua">Live</span>
					</Link>
					<div className="hidden md:flex space-x-[18px]">
						<Link to={""} className="font-Manrope text-white block text-sm">
							Already a user?
						</Link>
						<Link to={" "} className="block">
							<p className="w-20 h-[30px] bg-white text-center text-black text-[15px] font-Manrope font-extrabold rounded-md">
								LOGIN
							</p>
						</Link>
					</div>
				</div>

				<div className="mt-auto md:mt-0">
					<div className="py-10 px-[18px] md:px-12 xl:px-[72px]">
						<h1 className="text-[40px] xl:text-[64px] font-Manrope font-extrabold text-left tracking-tight">
							AI marketplace for <br /> turning ideas into <br />
							products
						</h1>
					</div>
					<div className="flex flex-col md:flex-row items-center md:space-x-10 bg-black py-11 md:px-12 xl:px-[72px] space-y-8 md:space-y-0">
						<button
							className="font-Manrope text-black  text-lg xl:text-2xl font-semibold outline-none w-4/5 md:w-36 xl:w-52 max-w-[350px] h-11 text-center rounded-[30px]
							bg-gradient-to-tr
							from-[#3380F4]
							to-[#67B4D4]
							"
							onClick={() => {
								navigate("./");
							}}
						>
							Join Beta
						</button>
						<button
							className="font-Manrope text-white border border-white  text-lg xl:text-2xl font-semibold outline-none w-4/5 md:w-36 xl:w-52 max-w-[350px] h-11 text-center rounded-[30px]"
							onClick={() => {
								navigate("./test");
							}}
						>
							Try Demo
						</button>
					</div>
				</div>

				<div className="bg-[#151515] md:bg-transparent px-[18px] md:px-12 xl:px-[72px] pb-28 md:pb-[120px] pt-5 items-center md:items-start flex flex-col ">
					<p className="font-Manrope text-[15px] text-left my-9 hidden md:block">
						Connect with us
					</p>
					<div className="flex w-[222px] justify-between">
						<a href="">
							<img src={instagram} alt="" width={30} height={30} />
						</a>
						<a href="">
							<img src={linkedin} alt="" width={30} height={30} />
						</a>
						<a href="">
							<img src={twitter} alt="" width={30} height={30} />
						</a>
						<a href="">
							<img src={discord} alt="" width={30} height={30} />
						</a>
					</div>
				</div>
			</div>
			<img
				src={bgimage}
				alt=""
				className="fixed shrink-0 -z-10 top-0 left-0 w-full h-screen object-cover md:static md:w-5/12 xl:w-[48%] md:z-10 contrast-[50%] md:contrast-100"
			/>
		</div>
	);
};

export default Home;
