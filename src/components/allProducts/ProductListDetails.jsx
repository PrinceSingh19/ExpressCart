import React from "react";
import { useAppContext } from "../../context/AppContext";
import { useFilterContext } from "../../context/FilterContext";
import Product from "../product/Product";
import ProductSkeleton from "../product/ProductSkeleton";
import { NotFound } from "../search/SearchProducts";

const ProductListDetails = () => {
	const { loading } = useAppContext();
	const { filter_products } = useFilterContext();

	return (
		<div className="grid grid-cols-2  md:grid-cols-4  gap-x-2 gap-y-2 justify-center md:min-h-[500px]">
			{loading && Array.from({ length: 5 }, () => 0).map((x, i) => <ProductSkeleton key={i} />)}
			{filter_products.length === 0 && <NotFound />}
			{filter_products.map((x, index) => (
				<Product product={x} key={index} />
			))}
		</div>
	);
};

export default ProductListDetails;
