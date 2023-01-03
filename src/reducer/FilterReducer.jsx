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
			//console.log(payload);
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
		case "UPDATE_FILTER_VALUE":
			const { name, value } = payload;
			console.log(name, value);
			return {
				...state,
				filters: {
					...state.filters,
					[name]: value,
				},
			};

		case "APPLY_FILTERS":
			const { all_products, filter_products } = state;
			let tempFilterProducts = [...all_products];
			const { rating, brand, discount, price } = state.filters;

			if (brand != "all") {
				tempFilterProducts = tempFilterProducts.filter(
					(x) => x.brand.toLowerCase() === brand.toLowerCase()
				);
			}

			if (rating != null) {
				tempFilterProducts = tempFilterProducts.filter((x) => x.rating >= rating);
				console.log(tempFilterProducts);
			}

			if (discount > 0) {
				tempFilterProducts = tempFilterProducts.filter((x) => x.discountPercentage >= discount);
			}

			if (price > 0) {
				tempFilterProducts = tempFilterProducts.filter((x) => x.price >= price);
			}
			return {
				...state,
				filter_products: tempFilterProducts,
			};
		default:
			return state;
	}
};

export default FilterReducer;
