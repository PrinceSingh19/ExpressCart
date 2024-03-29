import React from "react";
import { BsStarFill } from "react-icons/bs";
import { useFilterContext } from "../../context/FilterContext";
import { allBrands, discounts, newPriceRange, ratings } from "../helpers/Filters";
import PriceFormat from "../helpers/PriceFormat";
import DropdownHeader from "./DropdownHeader";
import FilterModal from "./mobileFilters/FilterModal";

const FilterSection = () => {
	const { updateFilterValue, clearFilters, all_products } = useFilterContext();
	const uniqueBrand = allBrands(all_products); //getting allBrands function from helpers and using it to get the unique brand names of all products

	return (
		<>
			<div className="mx-auto hidden md:block">
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
		</>
	);
};

export default FilterSection;
