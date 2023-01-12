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
				sort_products: [...payload],
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
			return {
				...state,
				filters: {
					...state.filters,
					[name]: value,
				},
			};
		case "UPDATE_FORM_VALUE":
			const { query, val } = payload;

			return {
				...state,
				filters: {
					...state.filters,
					[query]: val,
				},
			};
		case "APPLY_FILTERS":
			const { all_products } = state;
			let tempFilterProducts = [...all_products];
			const { rating, brand, discount, price, text } = state.filters;
			//console.log(text);

			if (brand != "all") {
				tempFilterProducts = tempFilterProducts.filter(
					(x) => x.brand.toLowerCase() === brand.toLowerCase()
				);
			}

			if (rating != null) {
				tempFilterProducts = tempFilterProducts.filter((x) => x.rating >= rating);
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

		case "GET_SORT_VALUE":
			return {
				...state,
				sort: payload,
			};

		case "SORT_PRODUCTS":
			const { filter_products, sort } = state;
			let temp = [...filter_products];

			//console.log(filter_products);
			const sortProducts = (a, b) => {
				if (sort === "lowest") {
					return a.price - b.price;
				}
				if (sort === "highest") {
					return b.price - a.price;
				}
			};

			let filtered = temp.sort(sortProducts);
			//let newPr = filtered.map((x) => x.price);
			console.log(filtered);
			return {
				...state,
				filter_products: filtered,
			};

		case "CLEAR_FILTERS":
			return {
				...state,
				filters: {
					query: "",
					rating: null,
					brand: "all",
					discount: 0,
					price: 0,
					minPrice: 0,
					maxPrice: 0,
				},
			};
		default:
			return state;
	}
};

export default FilterReducer;
