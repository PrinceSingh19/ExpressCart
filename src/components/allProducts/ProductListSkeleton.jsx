import React from "react";
import Skeleton from "react-loading-skeleton";
import ProductSkeleton from "../product/ProductSkeleton";
import FilterSkeleton from "./FilterSkeleton";

const ProductListSkeleton = () => {
	return (
		<div className="grid grid-cols-12 mx-2 mt-2 mb-16 md:mb-0">
			<div className="col-span-2 hidden md:block">
				<FilterSkeleton />
			</div>
			<div className="col-span-12 md:hidden">
				<FilterSkeleton />
			</div>

			<div className="col-span-10 grid grid-cols-2 md:grid-cols-4 gap-x-2 gap-y-2 justify-center">
				{Array.from({ length: 5 }, () => 0).map((x, i) => (
					<ProductSkeleton key={i} />
				))}
			</div>
		</div>
	);
};

export default ProductListSkeleton;
