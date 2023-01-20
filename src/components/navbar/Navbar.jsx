import React, { useState } from "react";
import { HiHome, HiShoppingCart } from "react-icons/hi2";
import { FiLogIn, FiMenu } from "react-icons/fi";
import MegaMenu from "./MegaMenu";
import { CgClose, CgNotifications } from "react-icons/cg";
import Form from "./Form";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import { useAuthContext } from "../../context/AuthContext";
import { signOut } from "@firebase/auth";
import { auth } from "../../auth/Firebase";
import { toast, ToastContainer } from "react-toastify";
const Navbar = () => {
	const navigate = useNavigate();
	const [navOpen, setNavOpen] = useState(false);
	const { user } = useAuthContext();
	const { totalAmount } = useCartContext();
	const signout = () => {
		signOut(auth)
			.then(() => toast.success("Signed out successfully"))
			.catch((error) => toast(`${error.message}`));
	};

	return (
		<>
			<ToastContainer
				position="top-center"
				autoClose={2000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable={false}
				pauseOnHover
				theme="light"
			/>
			<div className="md:sticky md:z-50 md:top-0 w-screen">
				{/* for md devices */}
				<nav
					className="bg-black sticky top-0  hidden
			 md:block "
				>
					<div className="flex items-center justify-between">
						<div className="w-1/4 hover:cursor-pointer" onClick={() => navigate("/home")}>
							<img
								src="./express.png"
								alt="Express Cart"
								className="h-10 pl-2 flex justify-start py-1 ml-1"
							/>
						</div>

						<div className="w-2/4 ">
							<Form />
						</div>
						<div className="text-white font-semibold flex text-base w-1/4 ml-2 justify-evenly  ">
							<Link to="/about">About</Link>
							{user ? (
								<h1>
									{user.displayName}{" "}
									<button className="bg-orange-500 rounded-sm px-2" onClick={signout}>
										{user.displayName != "" && <span>Sign Out</span>}
									</button>
								</h1>
							) : (
								<div>
									<Link to="/signup">Sign Up</Link>
									<Link to="/login">/ Sign In</Link>
								</div>
							)}
						</div>
						<Link to="/cart" className="text-white flex mr-8 text-2xl">
							<HiShoppingCart />
							<span className="text-white text-sm absolute top-1 right-6">{totalAmount}</span>
						</Link>
					</div>
					<div className=" bg-white flex justify-around border-b-2 border-slate-300 box-border">
						<MegaMenu />
					</div>
				</nav>

				{/* For mobile */}
				<nav className="md:hidden ">
					<div className="flex bg-black items-center">
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

						<div className="pr-2 ">
							<Form />
						</div>
					</div>
					<div
						className={`md:hidden pl-5 text-lg text-white  bg-slate-800 z-40 absolute w-3/4 h-full bottom-0 py-16  md:py-0 duration-300 ${
							navOpen ? "left-0" : "left-[-100%]"
						}`}
					>
						<MegaMenu />
					</div>

					<div className="fixed bottom-0 bg-white w-full h-10 flex items-center justify-evenly text-2xl ">
						<NavLink to="/home">
							<HiHome />
						</NavLink>
						<NavLink to="/">
							<FiLogIn />
						</NavLink>
						<NavLink to="/">
							<CgNotifications />
						</NavLink>
						<NavLink to="/cart" className="flex ">
							<HiShoppingCart />
							<span className="text-sm absolute top-1 ml-6">{totalAmount}</span>
						</NavLink>
					</div>
				</nav>
			</div>
		</>
	);
};

export default Navbar;
