import React from "react";
import Products from "./Products";
import ViewAll from "./ViewAll";

const ProductsCategories = ({ category, data }) => {
	return (
		<div className="flex  h-full px-2 my-2 gap-2">
			<ViewAll category={category} products={data} />
			<Products products={data} />
		</div>
	);
};

export default ProductsCategories;
