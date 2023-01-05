import React from "react";
import { useAppContext } from "../../context/AppContext";
import Product from "../product/Product";
import ProductSkeleton from "../product/ProductSkeleton";

const DisplaySearch = ({ searched }) => {
	const { loading } = useAppContext();
	return (
		<>
			{loading &&
				Array(4)
					.fill(0)
					.map((x, i) => <ProductSkeleton key={i} />)}
			<div className="grid grid-cols-2 md:grid-cols-4 gap-y-2 gap-x-2">
				{searched.map((x, index) => (
					<Product product={x} key={index} />
				))}
			</div>
		</>
	);
};

export default DisplaySearch;
