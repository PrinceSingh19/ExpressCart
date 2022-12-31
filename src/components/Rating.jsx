import React from "react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";

const Rating = ({ rating }) => {
	const ratingArray = Array.from({ length: 5 }, (v, i) => {
		let number = i + 0.5;
		return (
			<span key={i}>
				{i + 1 < rating ? (
					<BsStarFill className="text-yellow-500" />
				) : number < rating ? (
					<BsStarHalf className="text-yellow-500" />
				) : (
					<BsStar className="text-yellow-500" />
				)}
			</span>
		);
	});
	return <div className="flex space-x-1">{ratingArray}</div>;
};

export default Rating;
