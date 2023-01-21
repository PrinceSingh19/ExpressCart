import React from "react";
import { useAppContext } from "../../context/AppContext";
import ProductsCategories from "./ProductsCategories";

export const category = (arr, cat) => {
	return arr.filter((currElem) => currElem.category.includes(cat.toLowerCase()));
};
const HomeProducts = () => {
	const { productsData } = useAppContext();
	//getting the products data based on query and displaying only 4 of them on homepage and rest all will be displayed on view all button click
	const smartPhones = category(productsData, "smartphones").slice(0, 4);
	const laptops = category(productsData, "laptops").slice(0, 4);
	const groceries = category(productsData, "groceries").slice(0, 4);
	const homeDecoration = category(productsData, "home-decoration").slice(0, 4);
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
