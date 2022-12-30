import React, { useEffect } from "react";
import { useAppContext } from "../../context/AppContext";
import Product from "../product/Product";
import ProductSkeleton from "../product/ProductSkeleton";

const ProductListDetails = ({ products }) => {
	const { loading, error } = useAppContext();

	return (
		<div className="grid grid-cols-2 md:grid-cols-4 gap-x-2 gap-y-2 justify-center">
			{loading && Array.from({ length: 5 }, () => 0).map((x, i) => <ProductSkeleton key={i} />)}
			{products.map((x, index) => (
				<Product product={x} key={index} />
			))}
		</div>
	);
};

export default ProductListDetails;
