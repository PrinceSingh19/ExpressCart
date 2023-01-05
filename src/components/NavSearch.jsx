import React from "react";
import { useParams } from "react-router-dom";

const NavSearch = () => {
	const { name } = useParams();
	console.log(name);
	return <div></div>;
};

export default NavSearch;
