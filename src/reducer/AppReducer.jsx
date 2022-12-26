import React from "react";

const AppReducer = (state, { type, payload }) => {
	switch (type) {
		case "PRODUCTS_LOADING":
			return {
				...state,
				loading: true,
			};
		case "SET_PRODUCTS":
			const sliderImages = payload.slice(0, 5);
			const allCat = payload.map((x) => x.category);
			const uniqueCat = [...new Set(allCat)];

			return {
				...state,
				loading: false,
				products: payload,
				sliderImages,
				sliderImagesLoading: false,
				uniqueCategories: uniqueCat,
				productsData: [...payload],
			};
		case "PRODUCTS_ERROR":
			return {
				...state,
				loading: false,
				error: payload,
			};

		case "EXCHANGE_RATE_LOADING":
			return {
				...state,
				exchangeLoading: true,
				exchangeError: null,
			};
		case "SET_EXCHANGE_RATE":
			console.log(payload);
			return {
				...state,
				exchange: payload,
				exchangeLoading: false,
				exchangeError: null,
			};

		case "EXCHANGE_RATE_ERROR":
			return {
				...state,
				exchangeError: payload,
				exchangeLoading: false,
			};
		default:
			return state;
	}
};

export default AppReducer;
