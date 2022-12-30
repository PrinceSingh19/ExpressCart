import React from "react";
import { NavLink } from "react-router-dom";

const ViewAll = ({ category }) => {
	return (
		<div className="flex flex-col rounded-lg justify-center  border-2 border-slate-300 min-w-[7rem] md:w-48">
			<div className="flex flex-col items-center justify-center text-base mt-10 ">
				<h1>Best of </h1>
				<h3 className="font-semibold font-[calibri] break-words text-center">{category}</h3>
			</div>
			<NavLink
				to={`/productsList/${category.toLowerCase()}`}
				className="flex flex-col items-center justify-center mb-10 pt-2"
			>
				<button className="bg-blue-600 text-white rounded-sm px-2 py-1 text-base">View All</button>
			</NavLink>
		</div>
	);
};

export default ViewAll;
