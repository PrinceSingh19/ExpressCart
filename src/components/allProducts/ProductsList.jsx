import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFilterContext } from "../../context/FilterContext";
import { API } from "../API/API";
import FilterSection from "./FilterSection";
import ProductListDetails from "./ProductListDetails";
import ProductListSkeleton from "./ProductListSkeleton";

const ProductsList = () => {
	const { cate } = useParams();
	const { getFilterProducts, filter_products } = useFilterContext();
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		//fetching the filtered data based on query received upon view all button click on homepage
		getFilterProducts(`${API}/category/${cate}`).then(() => {
			setLoading(false);
		});
	}, [cate]);

	if (loading) {
		return <ProductListSkeleton />;
	}
	return (
		<div className="mx-2 mt-2 mb-16 md:mb-0 grid grid-cols-1 md:grid-cols-12 md:min-h-[620px]">
			<div className="md:h-9 w-full md:col-span-2">
				<FilterSection cat={cate} />
			</div>
			<div className="md:col-span-10 ">
				<ProductListDetails products={filter_products} />
			</div>
		</div>
	);
};

export default ProductsList;
