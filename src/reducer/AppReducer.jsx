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
		default:
			return state;
	}
};

export default AppReducer;
