import React, { useState } from "react";
import { HiShoppingCart } from "react-icons/hi2";
import { FiMenu } from "react-icons/fi";
import MegaMenu from "./MegaMenu";
import { CgClose } from "react-icons/cg";
import Form from "./Form";
import { Link } from "react-router-dom";
const Navbar = () => {
	const [navOpen, setNavOpen] = useState(false);
	return (
		<nav className="bg-black ">
			<div className="flex items-center justify-between flex-grow flex-shrink">
				<button className="md:hidden z-50 pl-3" onClick={() => setNavOpen(!navOpen)}>
					{navOpen ? (
						<CgClose className="text-white text-4xl ml-1 " />
					) : (
						<FiMenu className="text-white text-4xl ml-1" />
					)}
				</button>
				<div className="md:w-1/4 w-2/4 ">
					<img
						src="./express.png"
						alt="Express Cart"
						className="h-14 pl-2 flex justify-start py-1 ml-1"
					/>
				</div>

				<div className="md:w-2/4 hidden md:block ">
					<Form />
				</div>
				<div className="text-white font-semibold flex text-xl md:w-1/4  w-full  ml-2 justify-evenly  ">
					<Link to="/">About</Link>
					<Link to="/">Login</Link>
				</div>
				<Link to="/" className="text-white md:mr-8 mr-2 text-4xl">
					<HiShoppingCart />
				</Link>
			</div>
			<div className="hidden md:bg-white  md:flex md:justify-around md:border-b-2 md:border-slate-300  md:box-border">
				<MegaMenu />
			</div>

			{/* mobile */}
			<div
				className={`md:hidden pl-5 text-lg text-white  bg-slate-800 z-40 absolute w-3/4 h-full bottom-0 py-16  md:py-0 duration-300 ${
					navOpen ? "left-0" : "left-[-100%]"
				}`}
			>
				<MegaMenu />
			</div>
		</nav>
	);
};

export default Navbar;
