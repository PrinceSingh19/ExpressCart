import React from "react";
const FilterReducer = (state, { type, payload }) => {
	switch (type) {
		//filters loading
		case "FILTERS_LOADING":
			return {
				...state,
				loading: true,
			};

		//setting state of filter products if query gets resolved
		case "LOAD_FILTER_PRODUCTS":
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

		//setting state of filter products if query gets failed
		case "FILTERS_ERROR":
			return {
				...state,
				loading: false,
				error: payload,
			};

		//updating the state of filters based on the filters applied by the user
		case "UPDATE_FILTER_VALUE":
			const { name, value } = payload;
			return {
				...state,
				filters: {
					...state.filters,
					[name]: value,
				},
			};

		//updating the form field value based on the query received by user
		case "UPDATE_FORM_VALUE":
			const { query, val } = payload;

			return {
				...state,
				filters: {
					...state.filters,
					[query]: val,
				},
			};

		//setting the filters and displaying the filtered products based on filters applied
		case "APPLY_FILTERS":
			const { all_products } = state;
			let tempFilterProducts = [...all_products];
			const { rating, brand, discount, price, text } = state.filters;

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

		//setting the sort state
		case "GET_SORT_VALUE":
			return {
				...state,
				sort: payload,
			};

		//sorting products based on lowest and highest
		case "SORT_PRODUCTS":
			const { filter_products, sort } = state;
			let temp = [...filter_products];

			const sortProducts = (a, b) => {
				if (sort === "lowest") {
					return a.price - b.price;
				}
				if (sort === "highest") {
					return b.price - a.price;
				}
			};
			let filtered = temp.sort(sortProducts);
			return {
				...state,
				filter_products: filtered,
			};

		//clearing all the filters applied by the user on button click
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
