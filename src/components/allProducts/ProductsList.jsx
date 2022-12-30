import React from "react";
import { useParams } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";
import { category } from "../homepage/HomeProducts";
import ProductListDetails from "./ProductListDetails";
const ProductsList = () => {
	const { cate } = useParams();
	const { productsData } = useAppContext();
	const produc = category(productsData, cate);

	return (
		<div className="mx-2 mt-2 mb-16 md:mb-0 grid grid-cols-1 md:grid-cols-12">
			<div className="h-9 w-full md:col-span-2">FilterSection</div>
			<div className="md:col-span-10">
				<ProductListDetails products={produc} />
			</div>
		</div>
	);
};

export default ProductsList;
