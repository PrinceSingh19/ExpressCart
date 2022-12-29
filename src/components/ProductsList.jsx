import React from "react";
import { useParams } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { category } from "./HomeProducts";
import Products from "./Products";
const ProductsList = () => {
	const { cate } = useParams();
	const { productsData } = useAppContext();
	const produc = category(productsData, cate);

	return (
		<div className="mt-2 mx-2 ">
			<Products products={produc} />
		</div>
	);
};

export default ProductsList;
