import React from "react";
import Product from "./Product";

const Products = ({ products }) => {
	return (
		<div className="">
			{products.map((x, index) => (
				<Product product={x} key={index} />
			))}
		</div>
	);
};

export default Products;
