import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

const SingleProduct = () => {
	const { id } = useParams();
	const { getSingleProduct } = useAppContext();
	console.log(id);
	useEffect(() => {
		getSingleProduct(`${API}/${id}`);
	}, [id]);
	return <div>Single Product</div>;
};

export default SingleProduct;
