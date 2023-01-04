import React from "react";
import { useAppContext } from "../../context/AppContext";
import ProductsCategories from "./ProductsCategories";

export const category = (arr, cat) => {
	return arr.filter((currElem) => currElem.category.includes(cat.toLowerCase()));
};
const HomeProducts = () => {
	const { uniqueCategories, productsData } = useAppContext();

	const smartPhones = category(productsData, "smartphones").slice(0, 4);
	const laptops = category(productsData, "laptops").slice(0, 4);
	const groceries = category(productsData, "groceries").slice(0, 4);
	const homeDecoration = category(productsData, "home-decoration").slice(0, 4);
	const fragrances = category(productsData, "fragrances").slice(0, 4);
	const skincare = category(productsData, "skincare").slice(0, 4);

	return (
		<div className="w-full  mb-5">
			<ProductsCategories category="Smartphones" data={smartPhones} />
			<ProductsCategories category="Laptops" data={laptops} />
			<ProductsCategories category="Groceries" data={groceries} />
			<ProductsCategories category="Home-Decoration" data={homeDecoration} />
			<ProductsCategories category="Skincare" data={skincare} />
		</div>
	);
};

export default HomeProducts;