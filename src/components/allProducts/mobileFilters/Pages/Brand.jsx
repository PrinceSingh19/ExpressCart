import React from "react";
import { useFilterContext } from "../../../../context/FilterContext";
import { allBrands } from "../../../helpers/Filters";

const Brand = () => {
	const { all_products, updateFilterValue } = useFilterContext();
	const uniqueBrand = allBrands(all_products);

	return (
		<div>
			{uniqueBrand.map((currElem, index) => {
				return (
					<button key={index} name="brand" value={currElem} onClick={updateFilterValue}>
						{currElem}
					</button>
				);
			})}
		</div>
	);
};

export default Brand;
