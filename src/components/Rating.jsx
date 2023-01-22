import React from "react";
import { BsStar, BsStarFill } from "react-icons/bs";

const Rating = ({ rating }) => {
	const ratingArray = Array.from({ length: 5 }, (v, i) => {
		return (
			<div key={i} value={rating} name="rate">
				{i + 1 <= rating ? (
					<BsStarFill className="text-yellow-500" />
				) : (
					<BsStar className="text-yellow-500" />
				)}
			</div>
		);
	});
	return <div className="flex space-x-1">{ratingArray}</div>;
};

export default Rating;
