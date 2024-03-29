import React from "react";
import Product from "../product/Product";
import { useAppContext } from "../../context/AppContext";
import ProductSkeleton from "../product/ProductSkeleton";
const Products = ({ products }) => {
	const { loading } = useAppContext();

	return (
		<div className="flex overflow-x-scroll w-full md:grid md:grid-cols-4 gap-x-2 gap-y-2 ml-2 md:overflow-x-hidden md:ml-0">
			{loading &&
				Array(4)
					.fill(0)
					.map((x, i) => <ProductSkeleton key={i} />)}
			{products.map((x, index) => (
				<Product product={x} key={index} />
			))}
		</div>
	);
};

export default Products;
