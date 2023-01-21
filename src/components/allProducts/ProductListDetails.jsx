import React from "react";
import { useAppContext } from "../../context/AppContext";
import Product from "../product/Product";
import ProductSkeleton from "../product/ProductSkeleton";
import { NotFound } from "../search/SearchProducts";

const ProductListDetails = ({ products }) => {
	const { loading } = useAppContext();
	return (
		<div className="grid grid-cols-2  md:grid-cols-4  gap-x-2 gap-y-2 justify-center md:min-h-[500px]">
			{loading && Array.from({ length: 5 }, () => 0).map((x, i) => <ProductSkeleton key={i} />)}
			{products.length === 0 && <NotFound />}
			{products.map((x, index) => (
				<Product product={x} key={index} />
			))}
		</div>
	);
};

export default ProductListDetails;
