import React from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { useFilterContext } from "../context/FilterContext";
import Products from "./homepage/Products";

const SearchProducts = () => {
	const { products } = useAppContext();
	console.log(products);
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
		<div>
			<div className="text-xl mt-1 ml-2">
				<Link to="/home" className="text-blue-800">
					Home
				</Link>
				/searched
			</div>
			{searched.length === 0 ? <NotFound /> : ""}
			<Products products={searched} />
		</div>
	);
};

export default SearchProducts;
