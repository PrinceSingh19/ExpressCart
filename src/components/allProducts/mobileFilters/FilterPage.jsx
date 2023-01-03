import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Rating from "../../Rating";
import Brand from "./Pages/Brand";

const FilterPage = () => {
	return (
		<div>
			<Routes>
				<Route path="/brand" element={<Brand />} />
				<Route path="/rating" element={<Rating />} />
			</Routes>
		</div>
	);
};

export default FilterPage;
