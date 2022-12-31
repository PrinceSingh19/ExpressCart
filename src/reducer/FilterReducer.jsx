import React from "react";
import { category } from "../components/homepage/HomeProducts";

const FilterReducer = (state, { type, payload }) => {
	switch (type) {
		case "FILTERS_LOADING":
			return {
				...state,
				loading: true,
			};
		case "LOAD_FILTER_PRODUCTS":
			const allPrice = payload.map((x) => x.price);
			const maxPrice = Math.max(...allPrice);
			return {
				...state,
				all_products: [...payload],
				filter_products: [...payload],
				loading: false,
				maxPrice,
			};

		case "FILTERS_ERROR":
			return {
				...state,
				loading: false,
				error: payload,
			};
		/* 	case "GET_FILTERED_PRODUCTS":
			const { all_products } = state;
			const filter = category(all_products, payload);
			console.log(filter);
			return {
				...state,
				filter_products: filter,
			};
 */
		default:
			return state;
	}
};

export default FilterReducer;
