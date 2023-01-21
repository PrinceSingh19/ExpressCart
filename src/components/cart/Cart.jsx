import React, { useEffect } from "react";
import { useCartContext } from "../../context/CartContext";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";
import PriceDetails from "./PriceDetails";
import { useAuthContext } from "../../context/AuthContext";

const Cart = () => {
	const { cart } = useCartContext();
	const navigate = useNavigate();
	const { user } = useAuthContext();

	useEffect(() => {
		//if user is not signed in then redirect him to the login page to show the cart page
		if (!user) {
			navigate("/login");
		}
	}, [user]);
	return (
		<div className="grid grid-cols-1  md:grid-cols-12 bg-custome-slate px-2 md:px-20 gap-4">
			<div className="col-span-8 bg-white mt-2">
				{cart.length === 0 && (
					<div className="text-lg text-center mt-10 mb-4 font-semibold">Nothing in Cart</div>
				)}

				<CartItem />
				<div className="flex justify-between gap-2 md:gap-0 py-1  md:py-0 px-4 h-16 md:px-28 md:h-20 border-2 items-center text-white md:text-lg">
					<button className="px-4 bg-blue-600 h-12" onClick={() => navigate("/home")}>
						Continue Shopping
					</button>
					<button className="px-4 bg-orange-500 h-12">Place Order</button>
				</div>
			</div>
			<div className="col-span-4 border-2 mt-2 mb-2 md:w-3/4 bg-white h-fit">
				<PriceDetails />
			</div>
		</div>
	);
};

export default Cart;
