import React from "react";
import { useAppContext } from "../context/AppContext";
import { useProductCatContext } from "../context/ProductCatContext";
import ProductsCategories from "./ProductsCategories";

const HomeProducts = () => {
	const { uniqueCategories, productsData } = useAppContext();
	const categoryWisProduct = productsData.map((x) => {
		return { categrory: x.category };
	});
	console.log(categoryWisProduct);
	return (
		<div className="w-full h-80  py-2 my-2">
			{uniqueCategories.map((cat, index) => {
				return (
					<div key={index} className="my-2">
						<ProductsCategories category={cat} products={productsData} />
					</div>
				);
			})}
		</div>
	);
};

export default HomeProducts;
