import React from "react";
import { useAppContext } from "../context/AppContext";
import { useProductCatContext } from "../context/ProductCatContext";
import ProductsCategories from "./ProductsCategories";

const HomeProducts = () => {
	const { uniqueCategories, productsData } = useAppContext();

	const category = (arr, cat) => {
		return arr.filter((currElem) => currElem.category.includes(cat.toLowerCase()));
	};

	const smartPhones = category(productsData, "smartphones").slice(0, 4);
	const laptops = category(productsData, "laptops").slice(0, 4);
	const groceries = category(productsData, "groceries").slice(0, 4);
	const homeDecoration = category(productsData, "home-decoration").slice(0, 4);
	const fragrances = category(productsData, "fragrances").slice(0, 4);
	const skincare = category(productsData, "skincare").slice(0, 4);

	return (
		<div className="w-full h-80  py-2 my-2">
			<ProductsCategories category="Smartphone" data={smartPhones} />
		</div>
	);
};

export default HomeProducts;
