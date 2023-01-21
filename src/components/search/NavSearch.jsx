import React from "react";
import { useParams } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";
import ReturnHome from "../helpers/ReturnHome";
import DisplaySearch from "./DisplaySearch";

const NavSearch = () => {
	const { name } = useParams();
	const { products } = useAppContext();

	//displaying the searched products based on the query
	const searched = products.filter((product) =>
		product.category.toLowerCase().includes(name.toLowerCase())
	);

	return (
		<div className="mx-2 mt-3">
			<ReturnHome text={name} />
			<DisplaySearch searched={searched} />
		</div>
	);
};

export default NavSearch;
