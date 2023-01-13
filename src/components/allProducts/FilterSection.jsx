import React, { useState } from "react";
import { AiOutlineSortAscending, AiOutlineSortDescending } from "react-icons/ai";
import { BsSortNumericDown, BsSortNumericUp, BsStarFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useFilterContext } from "../../context/FilterContext";
import { allBrands, discounts, newPriceRange, ratings } from "../helpers/Filters";
import PriceFormat from "../helpers/PriceFormat";
import DropdownHeader from "./DropdownHeader";
import FilterModal from "./mobileFilters/FilterModal";

const FilterSection = ({ cat }) => {
	const navigate = useNavigate();
	const { updateFilterValue, clearFilters, all_products, sortProductsValue } = useFilterContext();
	const uniqueBrand = allBrands(all_products);
	//const uniqueBrand = ["all", ...new Set(brands)];

	/* const range = (start, stop, step) => {
		return Array.from({ length: (stop - start) / step + 1 }, (v, i) => start + i * step);
	};

	const ratings = range(1, 4, 1);
	const discounts = range(10, 50, 10);
	const newPriceRange = [6.04, 12.1, 30.3, 60.6]; */
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
								<label className="flex items-center ml-2 gap-1" htmlFor={checkbox}>
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
								<label className="ml-2" htmlFor={price}>
									<PriceFormat price={price} /> and above
								</label>
							</form>
						);
					})}
				</div>
				<button className="px-4 py-2 rounded-sm bg-orange-500 mt-2" onClick={clearFilters}>
					Clear Filters
				</button>
			</div>
			<div className="md:hidden flex flex-wrap items-center gap-1 mb-2 ">
				<div>Filters</div>
				<FilterModal name="brand" data={uniqueBrand} />
				<FilterModal name="rating" data={ratings} />
				<FilterModal name="discount" discount={discounts} />
				<FilterModal name="price" price={newPriceRange} />
				<button className="text-sm border-2 rounded-sm px-1" onClick={clearFilters}>
					Clear Filters
				</button>
			</div>
			{/* <div className="md:hidden flex items-center gap-1 mt-1 mb-1">
				<div>Sort</div>
				<button
					className="px-2 text-sm border-2 ml-3 rounded-sm"
					name="sort"
					value="lowest"
					onClick={sortProductsValue}
				>
					Lowest
				</button>
				<button
					className="px-2 text-sm border-2 rounded-sm"
					name="sort"
					value="highest"
					onClick={sortProductsValue}
				>
					Highest
				</button>
				<button
					className="px-2 text-sm border-2 rounded-sm"
					name="sort"
					value="a-z"
					onClick={sortProductsValue}
				>
					A-Z
				</button>
				<button
					className="px-2 text-sm border-2 rounded-sm"
					name="sort"
					value="z-a"
					onClick={sortProductsValue}
				>
					Z-A
				</button>
			</div> */}
		</>
	);
};

export default FilterSection;
