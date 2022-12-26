import React from "react";
import { useParams } from "react-router-dom";

const ProductsList = () => {
	const { category } = useParams();
	return (
		<div className="overscroll-y-auto">
			<h1>{category}</h1>
		</div>
	);
};

export default ProductsList;
