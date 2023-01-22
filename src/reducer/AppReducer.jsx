import React from "react";

const AppReducer = (state, { type, payload }) => {
	switch (type) {
		//setting the state of app
		case "PRODUCTS_LOADING":
			return {
				...state,
				loading: true,
			};

		//setting the state of app if query gets resolved
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
		//setting the state of app if query does gets resolved
		case "PRODUCTS_ERROR":
			return {
				...state,
				loading: false,
				error: payload,
			};

		//setting state of exchage rates
		case "EXCHANGE_RATE_LOADING":
			return {
				...state,
				exchangeLoading: true,
				exchangeError: null,
			};

		//setting state of exchange rates if query gets resoved
		case "SET_EXCHANGE_RATE":
			return {
				...state,
				exchange: payload,
				exchangeLoading: false,
				exchangeError: null,
			};

		//setting state of exchange rates if query does not gets resoved
		case "EXCHANGE_RATE_ERROR":
			return {
				...state,
				exchangeError: payload,
				exchangeLoading: false,
			};

		//setting state of single product
		case "SINGLE_PRODUCT_LOADING":
			return {
				...state,
				singleLoading: true,
			};

		//setting state of single product if query gets resoved
		case "SET_SINGLE_PRODUCT":
			return {
				...state,
				singleProduct: payload,
				singleLoading: false,
			};

		//setting the state of single product if query fails
		case "SINGLE_PRODUCT_ERROR":
			return {
				...state,
				singleLoading: false,
				singleError: payload,
			};

		//clearing the state of the single product
		case "CLEAR":
			return {
				...state,
				singleProduct: payload,
			};
		default:
			return state;
	}
};

export default AppReducer;
