import React from "react";
import Product from "./Product";
import { useAppContext } from "../context/AppContext";
const Products = ({ products }) => {
	const { loading, error } = useAppContext();
	if (loading) {
		return <h1 className="ml-7 text-base">Loading...</h1>;
	}
	if (error) {
		return <h5 className="text-center ml-7 text-base">{error}</h5>;
	}
	return (
		<div className="flex overflow-x-scroll sm:overflow-x-hidden gap-x-1 gap-y-1 ml-1">
			{products.map((x, index) => (
				<Product product={x} key={index} />
			))}
		</div>
	);
};

export default Products;
