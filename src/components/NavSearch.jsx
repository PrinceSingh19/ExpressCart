import React from "react";
import { useParams } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import ReturnHome from "./helpers/ReturnHome";
import Products from "./homepage/Products";

const NavSearch = () => {
	const { name } = useParams();
	const { products, loading } = useAppContext();
	console.log(name);
	const searched = products.filter((product) =>
		product.category.toLowerCase().includes(name.toLowerCase())
	);

	//console.log(name);
	return (
		<div className="mx-2 mt-3">
			<ReturnHome text={name} />
			<Products products={searched} />
		</div>
	);
};

export default NavSearch;
