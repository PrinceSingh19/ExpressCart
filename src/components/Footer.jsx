import React from "react";
import {
	FaFacebookSquare,
	FaInstagramSquare,
	FaTwitterSquare,
	FaYoutubeSquare,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
	return (
		<div className="grid px-4 grid-cols-2 gap-y-3 md:gap-y-0  md:grid-cols-5 bg-slate-100 py-3  mt-5 mb-10 md:mb-0">
			<div className="flex flex-col items-center">
				<h1 className="font-bold text-2xl">ExpressCart</h1>
				<p>&#169; {new Date().getFullYear()}</p>
				<p>All rights reserved</p>
			</div>
			<div>
				<h2 className="font-semibold">ABOUT US</h2>
				<NavLink to="/about" className=" block hover:text-blue-400">
					About Us
				</NavLink>
				<NavLink to="/contact" className=" hover:text-blue-400">
					Submit Query
				</NavLink>
				<h4 className=" hover:text-blue-400">Store Location</h4>
				<h4 className=" hover:text-blue-400">Order Tracking</h4>
			</div>

			<div className="pl-10 md:pl-0">
				<h2 className="font-semibold ">FOLLOW US</h2>
				<p className="flex items-center gap-1 hover:text-blue-400">
					<FaFacebookSquare className="text-blue-600" /> Facebook
				</p>
				<p className="flex items-center gap-1 hover:text-blue-400">
					<FaTwitterSquare className="text-blue-600" /> Twitter
				</p>
				<p className="flex items-center gap-1 hover:text-blue-400">
					<FaInstagramSquare className="text-pink-600" /> Instagram
				</p>
				<p className="flex items-center gap-1 hover:text-blue-400">
					<FaYoutubeSquare className="text-red-500" /> Youtube
				</p>
			</div>
			<div className=" md:block">
				<h2 className="font-semibold ">CONTACT US</h2>
				<div>
					<p>ExpressCart Pvt Ltd</p>
					<p className="w-11/12">
						106/Avdhut Heights, Hightension Road, Pragati Ngr, Nallasopar (E), 401209, Palghar,
						Maharashtra, India
					</p>
					<p>Email: expresscart@gmail.com</p>
					<p>Contact: +91 987465123</p>
				</div>
			</div>
			<div>
				<h2 className="font-semibold">SUBSCRIBE</h2>
				<p>Get E-mail updates about our latest shop and special offers.</p>
				<form action="https://formspree.io/f/xwkjkgdr" method="POST">
					<input
						type="email"
						name="subscribe-email"
						placeholder="Enter your email here"
						className="bg-slate-100 p-1 border-b-2 border-slate-300 w-44 active:outline-none active:border-none focus:outline-none"
					/>
					<button type="submit" className="border-b-4 border-pink-600 block">
						Subscribe
					</button>
				</form>
			</div>
		</div>
	);
};

export default Footer;
