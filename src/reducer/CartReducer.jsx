import React from "react";

const CartReducer = (state, { type, payload }) => {
	switch (type) {
		case "ADD_TO_CART":
			const { id, title, price, stock, description, images, discountPercentage, brand } = payload;

			let existingProduct = state.cart.find((cart) => cart.id === id);
			if (existingProduct) {
				let updatedProduct = state.cart.map((currElem) => {
					if (currElem.id === id) {
						let newAmount = currElem.amount + 1;
						if (currElem.amount >= stock) {
							newAmount = currElem.stock;
						}

						return {
							...currElem,
							amount: newAmount,
						};
					} else {
						return {
							...currElem,
						};
					}
				});

				return {
					...state,
					cart: updatedProduct,
				};
			} else {
				let amount = 1;
				let cartProduct = {
					title,
					price,
					stock,
					description,
					images,
					id,
					discountPercentage,
					brand,
					amount,
				};
				return {
					cart: [...state.cart, cartProduct],
				};
			}

		case "REMOVE_CART":
			return {
				...state,
				cart: state.cart.filter((cart) => cart.id != payload),
			};

		case "SET_INCREASE":
			let newAmount = state.cart.map((currElem) => {
				if (currElem.id === payload) {
					let currentAmount = currElem.amount + 1;
					if (currentAmount >= currElem.stock) {
						currentAmount = currElem.stock;
					}
					return {
						...currElem,
						amount: currentAmount,
					};
				} else {
					return {
						...currElem,
					};
				}
			});
			return {
				...state,
				cart: newAmount,
			};

		case "SET_DECREASE":
			let decAmount = state.cart.map((currElem) => {
				if (currElem.id === payload) {
					let currentAmount = currElem.amount - 1;
					if (currentAmount <= 1) {
						currentAmount = 1;
					}
					return {
						...currElem,
						amount: currentAmount,
					};
				} else {
					return {
						...currElem,
					};
				}
			});
			return {
				...state,
				cart: decAmount,
			};

		case "TOTAL_CART_PRICE_AMOUNT":
			const { totalPrice, totalAmount } = state.cart.reduce(
				(acc, curr) => {
					let { price, amount } = curr;

					acc.totalAmount += amount;
					acc.totalPrice += price * amount;
					return acc;
				},
				{ totalPrice: 0, totalAmount: 0 }
			);
			return {
				...state,
				totalAmount,
				totalPrice,
			};

		default:
			return {
				...state,
			};
	}
};

export default CartReducer;
