import React from "react";
import { Link } from "react-router-dom";
import { RxModulzLogo, RxNotionLogo, RxStitchesLogo } from "react-icons/rx";
import { SiVectorlogozone } from "react-icons/si";
import { IoLogoStencil } from "react-icons/io5";
import { GrDeliver } from "react-icons/gr";
import { MdOutlineContactSupport } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";
const AboutUs = () => {
	return (
		<>
			<div className="flex items-center justify-center  h-12 bg-slate-100">
				<div className=" mt-1 mb-2">
					<Link to="/home" className="text-blue-800 mb-2">
						Home
					</Link>
					/ About Us
				</div>
			</div>
			<div className="text-center">
				<h3>Who Are We</h3>
				<h3 className="font-semibold text-lg">Welcome To ExpressCart</h3>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-4 md:gap-14  mt-6">
				<p className="w-11/12 md:w-3/4 font-[poppins] text-justify">
					ExpressCart is a shopping platform which provides you quality products at affordable
					prices. We are committed to provide you the best online shopping experience you ever had.
					We do so by connecting 1000+ sellers on our platform with potential buyers. We have the
					best cutting edge technology and innovation that provides you the most immersive shopping
					experience. We also provide 24x7 customer support so that you don't have to worry about
					anything.
				</p>
				<section className="flex justify-center md:flex-none">
					<img src="/shopping.jpg" className="object-cover w-11/12" />
				</section>
			</div>
			<div className="grid grid-cols-1 font-[poppins] space-y-2 md:space-y-0 md:grid-cols-3 place-items-center mx-auto mt-4">
				<section className="w-11/12 md:w-3/4">
					<h3 className="md:text-xl font-semibold">Our Vision</h3>
					<p className="text-justify">
						To provide high quality shopping experience to our customers from the comfort of their
						homes. For those of you having hectic work schedule ExpressCart is your best bet
					</p>
				</section>

				<section className="w-11/12 md:w-3/4 h-[123.9px] font-[poppins]">
					<h3 className="md:text-xl font-semibold">Our Mission</h3>
					<p className="text-justify">
						To revolutionarize the shopping experience for the customers through our cutting edge
						technology & 24x7 customer support
					</p>
				</section>

				<section className="w-11/12 md:w-3/4 font-[poppins]">
					<h3 className="md:text-xl font-semibold ">Our Goal</h3>
					<p className="text-justify">
						To reach every corner of the country & provide immmersive shopping experience and make
						it affordable to every person in the country
					</p>
				</section>
			</div>

			<div className="grid md:grid-cols-3 gap-4 mx-3 md:mx-12  mt-6">
				<div className="flex-col px-5 py-2 md:py-0   flex items-center justify-center rounded-md bg-slate-100">
					<GrDeliver className="text-3xl mb-1" />
					Super Fast & Free Delivery
				</div>
				<div className="grid grid-rows-2 gap-4">
					<div className=" py-3 flex flex-col items-center justify-center rounded-md bg-slate-100">
						<MdOutlineContactSupport className="text-3xl mb-1" />
						24x7 Customer Support
					</div>
					<div className="px-10 flex flex-col items-center justify-center rounded-md bg-slate-100">
						<GiReceiveMoney className="text-3xl mb-1" />
						Money Back Guarantee
					</div>
				</div>
				<div className="px-10  py-2 md:py-0 flex flex-col items-center justify-center rounded-md bg-slate-100">
					<RiSecurePaymentLine className="text-3xl mb-1" />
					Super Secure Payments
				</div>
			</div>
			<div className="flex flex-col justify-center items-center mt-6 mb-10">
				<h3>Trusted By 1000+ Companies</h3>
				<div className="flex justify-center h-12 items-center space-x-8 md:space-x-24 text-xl mt-2 bg-slate-100 w-full">
					<RxModulzLogo />
					<RxNotionLogo />
					<SiVectorlogozone />
					<RxStitchesLogo />
					<IoLogoStencil />
				</div>
			</div>
		</>
	);
};

export default AboutUs;
