import React from "react";
import Product from "./Product";
import { useAppContext } from "../context/AppContext";
import Skeleton from "react-loading-skeleton";
import ProductSkeleton from "./ProductSkeleton";
const Products = ({ products }) => {
	const { loading, error } = useAppContext();

	return (
		<div className="flex overflow-x-scroll  md:grid md:grid-cols-4  md:overflow-x-hidden">
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

/* flex overflow-x-scroll md:overflow-x-hidden gap-x-1 gap-y-1 ml-1 */
