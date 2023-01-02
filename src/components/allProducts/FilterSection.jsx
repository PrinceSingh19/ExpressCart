import React, { useState } from "react";
import { BsStarFill } from "react-icons/bs";
import Rating from "../Rating";
import DropdownHeader from "./DropdownHeader";
const FilterSection = ({ products }) => {
	//const uniqueBrand
	//const [value, setValue] = useState("All");

	const brands = products.map((x) => x.brand);
	const uniqueBrand = ["all", ...new Set(brands)];
	const handleRating = (e) => {
		console.log(e.target.value);
	};

	const range = (start, stop, step) => {
		return Array.from({ length: (stop - start) / step + 1 }, (v, i) => start + i * step);
	};

	const ratings = range(1, 4, 1);
	const discounts = range(10, 50, 10);
	return (
		<div className=" mx-auto">
			<div className="text-xl font-semibold">Filters</div>
			{/*   Brands */}
			<DropdownHeader arrayData={uniqueBrand} head="brand" />

			{/* Rating */}
			<div>
				<div className="text-base text-ellipsis whitespace-nowrap overflow-hidden w-32 font-medium">
					Ratings
				</div>
				{ratings.map((checkbox, index) => {
					return (
						<form key={index} onChange={handleRating} className="flex items-center my-2">
							<input type="checkbox" name="rating" value={checkbox} />
							<div className="flex items-center ml-2 gap-1">
								{checkbox}
								<BsStarFill className="text-yellow-500" />& above
							</div>
						</form>
					);
				})}
			</div>

			{/* Discount */}
			<div className="w-44">
				<DropdownHeader arrayData={discounts} head="discounts" extradata="% & above" />
			</div>

			{/* Price */}

			<div>
				<input
					type="range"
					min={0}
					max={5000}
					step={500}
					name="price"
					onChange={(e) => console.log(e.target.value)}
				/>
			</div>
		</div>
	);
};

export default FilterSection;
