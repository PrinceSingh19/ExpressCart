import React from "react";
import Product from "./Product";

const Products = ({ products }) => {
	return (
		<div className="flex overflow-x-scroll sm:overflow-x-hidden gap-x-2 gap-y-2 ml-2">
			{products.map((x, index) => (
				<Product product={x} key={index} />
			))}
		</div>
	);
};

export default Products;
