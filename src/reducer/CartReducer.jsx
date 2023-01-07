import React from "react";

const CartReducer = (state, { type, payload }) => {
	switch (type) {
		case "cart":
			return {
				...state,
			};
		default:
			return {
				...state,
			};
	}
};

export default CartReducer;
