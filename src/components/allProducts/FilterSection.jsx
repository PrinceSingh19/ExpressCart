import React, { useState } from "react";
import { BsFilterCircleFill, BsStarFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useFilterContext } from "../../context/FilterContext";
import PriceFormat from "../helpers/PriceFormat";
import Rating from "../Rating";
import DropdownHeader from "./DropdownHeader";
const FilterSection = ({ products }) => {
	const navigate = useNavigate();
	const {
		updateFilterValue,
		filters: { minPrice, maxPrice, price },
	} = useFilterContext();
	//console.log(price);
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
	//const priceRange = range(1000, 10000, 2000);

	const newPriceRange = [6.04, 12.1, 30.3, 60.6];
	return (
		<>
			<div className=" mx-auto hidden md:block">
				<div className="text-xl font-semibold">Filters</div>
				{/*   Brands */}
				<DropdownHeader arrayData={uniqueBrand} head="brand" />

				{/* Rating */}
				<div>
					<div className="text-base text-ellipsis whitespace-nowrap overflow-hidden w-32 font-medium">
						Rating
					</div>
					{ratings.map((checkbox, index) => {
						return (
							<form key={index} onChange={updateFilterValue} className="flex items-center">
								<input type="checkbox" name="rating" value={checkbox} id={checkbox} />
								<label className="flex items-center ml-2 gap-1" for={checkbox}>
									{checkbox}
									<BsStarFill className="text-yellow-500" />& above
								</label>
							</form>
						);
					})}
				</div>

				{/* Discount */}
				<div className="w-44">
					<DropdownHeader arrayData={discounts} head="discount" extradata="% & above" />
				</div>

				{/* Price */}

				<div>
					<div className="text-base font-medium">Price</div>
					{newPriceRange.map((price, index) => {
						return (
							<form onChange={updateFilterValue} key={index}>
								<input type="checkbox" value={price} name="price" id={price} />
								<label className="ml-2" for={price}>
									<PriceFormat price={price} /> and above
								</label>
							</form>
						);
					})}
				</div>
			</div>
			<div className="md:hidden ">
				<div
					className=" text-xl flex items-center gap-4 w-44"
					onClick={() => navigate("/mobilefilters")}
				>
					Filters
					<BsFilterCircleFill />
				</div>
			</div>
		</>
	);
};

export default FilterSection;
