import React from "react";
import HomeProducts from "./HomeProducts";
import Slider from "../slider/Slider";

const Home = () => {
	return (
		<div className="w-full scroll-smooth">
			<Slider />
			<HomeProducts />
		</div>
	);
};

export default Home;
