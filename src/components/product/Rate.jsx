import React from "react";
import { BsStarFill } from "react-icons/bs";

const Rate = ({ rating }) => {
	return (
		<div className="pt-2 ml-2 md:flex md:ml-0 md:items-center ">
			<div className="flex justify-center md:flex md:justify-between items-center gap-1 bg-green-500 rounded-lg w-16  px-2 md:w-auto ">
				<span className="md:text-base text-sm font-semibold text-white ">{rating}</span>
				<span>
					<BsStarFill className="text-yellow-400" />
				</span>
			</div>
			<span className="md:pl-6 md:pr-2 hidden md:block text-sm text-slate-600 font-medium text-ellipsis overflow-hidden whitespace-nowrap ">
				11565 reviews
			</span>
		</div>
	);
};

export default Rate;
