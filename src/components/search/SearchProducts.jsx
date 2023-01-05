import React from "react";
import { useAppContext } from "../../context/AppContext";
import { useFilterContext } from "../../context/FilterContext";
import ReturnHome from "../helpers/ReturnHome";
import DisplaySearch from "./DisplaySearch";

export const NotFound = () => {
	return <div className="flex items-center justify-center my-20">No Products Found</div>;
};
const SearchProducts = () => {
	const { products } = useAppContext();
	const {
		filters: { query },
	} = useFilterContext();
	const searched = products.filter(
		(product) =>
			product.title.toLowerCase().includes(query.toLowerCase()) ||
			product.description.toLowerCase().includes(query.toLowerCase()) ||
			product.category.toLowerCase().includes(query.toLowerCase())
	);

	return (
		<div className="mx-2">
			<ReturnHome text={query} />
			{searched.length === 0 ? <NotFound /> : ""}
			<DisplaySearch searched={searched} />
		</div>
	);
};

export default SearchProducts;
