import React from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { useFilterContext } from "../context/FilterContext";
import ReturnHome from "./helpers/ReturnHome";
import Products from "./homepage/Products";

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
	//console.log(searched);
	const NotFound = () => {
		return <div className="flex items-center justify-center my-20">No Products Found</div>;
	};
	return (
		<div className="mx-2">
			<ReturnHome text={query} />
			{searched.length === 0 ? <NotFound /> : ""}
			<Products products={searched} />
		</div>
	);
};

export default SearchProducts;
