import React from "react";
import Product from "./Product";

const Products = ({ products }) => {
	return (
		<div className="grid grid-cols-2 gap-y-2 gap-x-2 md:grid-cols-4 ml-2">
			{products.map((x) => (
				<Product product={x} />
			))}
		</div>
	);
};

export default Products;
