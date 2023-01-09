import React from "react";
import { useCartContext } from "../context/CartContext";
import CartItem from "./CartItem";

const Cart = () => {
	const { cart } = useCartContext();
	console.log(cart);
	return (
		<div className="grid grid-cols-12 place-items-center">
			<div className="col-span-8">
				<CartItem />
			</div>
			<div className="col-span-4">Price Details</div>
		</div>
	);
};

export default Cart;
