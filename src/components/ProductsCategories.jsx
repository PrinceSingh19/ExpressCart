import React from "react";
import Products from "./Products";
import ViewAll from "./ViewAll";

const ProductsCategories = ({ category, products }) => {
	return (
		<div className="flex h-full px-2">
			<ViewAll category={category} />
			<Products products={products} />
		</div>
	);
};

export default ProductsCategories;
