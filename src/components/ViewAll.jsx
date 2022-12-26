import React from "react";
import { NavLink } from "react-router-dom";

const ViewAll = ({ category }) => {
	return (
		<div className="flex flex-col rounded-lg justify-center  border-2 border-slate-300 min-w-[7rem] md:w-40">
			<div className="flex flex-col items-center justify-center md:text-2xl text-lg mt-10 ">
				<h1>Best of </h1>
				<h3 className="font-semibold font-[calibri] break-words whitespace-normal text-center">
					{category}
				</h3>
			</div>
			<NavLink to="/productsList" className="flex flex-col items-center justify-center mb-10 pt-2">
				<button className="bg-blue-600 text-white rounded-sm px-2 py-1 text-md md:text-xl">
					View All
				</button>
			</NavLink>
		</div>
	);
};

export default ViewAll;
