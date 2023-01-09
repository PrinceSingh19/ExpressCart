import React from "react";

const CartReducer = (state, { type, payload }) => {
	switch (type) {
		case "ADD_TO_CART":
			const { title, price, stock, description } = payload;
			console.log(title);
			let cartProduct = {
				title,
				price,
				stock,
				description,
			};
			return {
				cart: [...state.cart, cartProduct],
			};
		default:
			return {
				...state,
			};
	}
};

export default CartReducer;
