import React from "react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";

const Rating = ({ rating }) => {
	const ratingArray = Array.from({ length: 5 }, (v, i) => {
		let number = i + 0.5;
		return (
			<span>{rating > i ? <BsStarFill /> : rating >= number ? <BsStarHalf /> : <BsStar />}</span>
		);
	});
	return <div>{ratingArray}</div>;
};

export default Rating;
