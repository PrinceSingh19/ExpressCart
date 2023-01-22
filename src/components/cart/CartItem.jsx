import React from "react";
import { useCartContext } from "../../context/CartContext";
import { AiFillPlusSquare, AiFillMinusSquare } from "react-icons/ai";
import PriceFormat from "../helpers/PriceFormat";
import DiscountCalculate from "../helpers/DiscountCalculate";
import { MdDelete } from "react-icons/md";

const CartItem = () => {
	const { cart, removeCart, setIncrease, setDecrease } = useCartContext();
	console.log(cart);

	return (
		<div className=" border-2">
			{cart.map((cart) => {
				return (
					<div key={cart.id} className="grid grid-cols-12   border-b-2 mt-3 pb-2">
						<div className="col-span-3 pl-2 md:flex md:flex-col md:items-center">
							<img src={cart.images[0]} alt={cart.title} className="w-24 h-24 object-cover" />
							<div className="space-x-3 flex justify-center">
								<button onClick={() => setDecrease(cart.id)}>
									<AiFillMinusSquare className="text-2xl" />
								</button>
								<span className="text-xl">{cart.amount}</span>
								<button onClick={() => setIncrease(cart.id)}>
									<AiFillPlusSquare className="text-2xl" />
								</button>
							</div>
						</div>
						<div className="col-span-9 md:col-span-4 ml-2 sm:ml-16  space-y-2">
							<h1 className="font-bold">{cart.title}</h1>
							<h3 className="text-sm">Brand: {cart.brand}</h3>
							<div className="flex items-center gap-2">
								<h3 className="text-lg text-green-600 font-semibold  md:pl-0">
									<DiscountCalculate
										price={cart.price}
										discountPercentage={cart.discountPercentage}
									/>
								</h3>
								<span className="text-sm md:text-base line-through text-slate-700 font-medium">
									<PriceFormat price={cart.price} />
								</span>
								<span className="text-md md:text-base sm:hidden  font-semibold text-green-600">{`${cart.discountPercentage.toFixed(
									0
								)}% off`}</span>
							</div>
							<button className="flex" onClick={() => removeCart(cart.id)}>
								<MdDelete className="text-2xl" /> Remove
							</button>
						</div>
						<div className="col-span-12  ml-2 md:ml-0  md:col-span-4 ">
							<h4>
								Delivery by Tommorrow |{" "}
								{cart.price >= 6.12 ? (
									<span>
										free{" "}
										<span className="line-through">
											<PriceFormat price={0.86} />
										</span>
									</span>
								) : (
									<span>
										<PriceFormat price={0.86} />
									</span>
								)}
							</h4>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default CartItem;
