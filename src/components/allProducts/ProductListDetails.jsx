import React, { useEffect } from "react";
import { useAppContext } from "../../context/AppContext";
import { useFilterContext } from "../../context/FilterContext";
import Product from "../product/Product";
import ProductSkeleton from "../product/ProductSkeleton";
import { NotFound } from "../search/SearchProducts";

const ProductListDetails = ({ products }) => {
	const { loading, error } = useAppContext();
	//const { loading } = useFilterContext();
	//console.log("products");
	/* console.log(filter_products);
	useEffect(() => {
		getFilterProducts(products);
	}, []); */
	return (
		<div className="grid grid-cols-2 md:grid-cols-4 gap-x-2 gap-y-2 justify-center">
			{loading && Array.from({ length: 5 }, () => 0).map((x, i) => <ProductSkeleton key={i} />)}
			{products.length === 0 && <NotFound />}
			{products.map((x, index) => (
				<Product product={x} key={index} />
			))}
		</div>
	);
};

export default ProductListDetails;
