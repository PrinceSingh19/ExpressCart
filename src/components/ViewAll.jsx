import React from "react";
import { NavLink } from "react-router-dom";

const ViewAll = () => {
	return (
		<div className="flex flex-col justify-around bg-blue-500 items-center p-4 h-11/12">
			<h1>Best of </h1>
			<NavLink to="/productsList">
				<button className="bg-blue-600 text-white rounded-sm px-2 py-1">View All</button>
			</NavLink>
		</div>
	);
};

export default ViewAll;
