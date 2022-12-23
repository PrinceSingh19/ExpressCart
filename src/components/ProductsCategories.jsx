import React from "react";
import Products from "./Products";
import ViewAll from "./ViewAll";

const ProductsCategories = () => {
	return (
		<div className="flex h-full px-2">
			<ViewAll />
			<Products />
		</div>
	);
};

export default ProductsCategories;
