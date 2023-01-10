import React from "react";
import { useCartContext } from "../../context/CartContext";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";
import PriceDetails from "./PriceDetails";

const Cart = () => {
	const { cart } = useCartContext();
	const navigate = useNavigate();

	return (
		<div className="grid grid-cols-1  md:grid-cols-12 bg-custome-slate h-[100vh] px-2 md:px-20 gap-4">
			<div className="col-span-8 bg-white mt-2   ">
				<CartItem />
				<div className="flex justify-between gap-2 md:gap-0 py-1  md:py-0 px-4 h-16 md:px-28 md:h-20 border-2 items-center text-white md:text-lg">
					<button className="px-4 bg-blue-600 h-12" onClick={() => navigate("/home")}>
						Continue Shopping
					</button>
					<button className="px-4 bg-orange-500 h-12">Place Order</button>
				</div>
			</div>
			<div className="col-span-4  border-2 mt-2 mb-2 md:w-3/4 bg-white h-fit">
				<PriceDetails />
			</div>
		</div>
	);
};

export default Cart;
