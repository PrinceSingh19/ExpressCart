import React from "react";

const AppReducer = (state, { type, payload }) => {
	switch (type) {
		case "PRODUCTS_LOADING":
			return {
				...state,
				loading: true,
			};
		case "SET_PRODUCTS":
			return {
				...state,
				loading: false,
				products: payload,
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
