import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { NavLink, Outlet, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import FilterPage from "./mobileFilters/FilterPage";
import { filterPath } from "./mobileFilters/FilterPath";

const MobileFilters = () => {
	const navigate = useNavigate();
	/* const location = useLocation();
	const {
		state: { uniqueBrand, ratings, price, discounts },
	} = location;

	console.log(ratings); */

	return (
		<>
			<div className="bg-orange-400 h-8 flex items-center ">
				<button className="ml-2" onClick={() => navigate(-1)}>
					<BsArrowLeft className="text-2xl" />
				</button>
			</div>

			<div className="grid grid-cols-6">
				<div className="col-span-2 bg-slate-300 h-screen flex flex-col gap-y-2 text-lg ">
					<NavLink to="brand">Brand</NavLink>
					<NavLink to="rating">Rating</NavLink>
				</div>
				<div className="col-span-4 ">
					<Outlet />
				</div>
			</div>
		</>
	);
};

export default MobileFilters;
