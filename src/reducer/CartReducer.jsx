import React from "react";

const CartReducer = (state, { type, payload }) => {
	switch (type) {
		case "ADD_TO_CART":
			const { id, title, price, stock, description, images, discountPercentage, brand } = payload;
			console.log(title);
			let cartProduct = {
				title,
				price,
				stock,
				description,
				images,
				id,
				discountPercentage,
				brand,
			};
			return {
				cart: [...state.cart, cartProduct],
			};

		case "REMOVE_CART":
			return {
				...state,
				cart: state.cart.filter((cart) => cart.id != payload),
			};

		default:
			return {
				...state,
			};
	}
};

export default CartReducer;
