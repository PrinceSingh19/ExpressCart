import React from "react";
import { NavLink } from "react-router-dom";

const ViewAll = ({ category }) => {
	return (
		<div className="grid grid-rows-2 min-w-[4rem] max-w-[6rem] md:min-w-[10rem] border-2 border-slate-200 px-2 w-44 h-[300px] md:h-[304px] ">
			<div className="flex flex-col items-center justify-center md:text-2xl text-lg ">
				<h1>Best of </h1>
				<h3 className="font-semibold font-[calibri] break-words whitespace-normal text-center break-all">
					{category}
				</h3>
			</div>
			<NavLink to="/productsList" className="flex flex-col items-center justify-center">
				<button className="bg-blue-600 text-white rounded-sm px-2 py-1 text-md md:text-xl">
					View All
				</button>
			</NavLink>
		</div>
	);
};

export default ViewAll;
