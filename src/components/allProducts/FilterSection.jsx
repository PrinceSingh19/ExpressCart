import React from "react";
import { BsStarFill } from "react-icons/bs";
const FilterSection = () => {
	return (
		<div className="mx-2">
			{/*   Brands */}
			<div>
				<li>Apple</li>
				<li>Apple</li>
				<li>Apple</li>
				<li>Apple</li>
			</div>

			{/* Rating */}
			<div>
				<BsStarFill />
				<BsStarFill />
				<BsStarFill />
				<BsStarFill />
			</div>

			{/* Discount */}
			<div>
				<li>50%</li>
				<li>50%</li>
				<li>50%</li>
				<li>50%</li>
			</div>

			{/* Price */}

			<div>
				<input type="range" min="0" max="5000" step="500" />
			</div>
		</div>
	);
};

export default FilterSection;
