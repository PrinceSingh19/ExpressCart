import React from "react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";

const Rating = ({ rating }) => {
	console.log(rating);
	const ratingArray = Array.from({ length: 5 }, (v, i) => {
		let number = i + 0.5;
		return (
			<span>
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
	return <div>{ratingArray}</div>;
};

export default Rating;
