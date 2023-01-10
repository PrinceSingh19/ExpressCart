import React from "react";
import { useCartContext } from "../../context/CartContext";
import { AiFillPlusSquare, AiFillMinusSquare } from "react-icons/ai";
import PriceFormat from "../helpers/PriceFormat";
import DiscountCalculate from "../helpers/DiscountCalculate";
import { MdDelete } from "react-icons/md";

const CartItem = () => {
	const { cart, removeCart } = useCartContext();

	return (
		<div className=" border-2">
			{cart.map((cart) => {
				return (
					<div
						key={cart.id}
						className="grid grid-cols-12 justify-items-center border-b-2 mt-3 pb-2"
					>
						<div className="col-span-3 pl-2 md:pl-0">
							<img src={cart.images[0]} alt={cart.title} className="w-24 h-24 object-cover" />
							<div className="space-x-3 flex justify-center">
								<button>
									<AiFillMinusSquare className="text-2xl" />
								</button>
								<span className="text-xl">1</span>
								<button>
									<AiFillPlusSquare className="text-2xl" />
								</button>
							</div>
						</div>
						<div className="col-span-9 md:col-span-4 ml-2 space-y-2">
							<h1 className="font-bold">{cart.title}</h1>
							<h3 className="text-sm">Brand: {cart.brand}</h3>
							<div className="flex items-center gap-2 ">
								<h3 className="text-lg text-green-600 font-semibold pl-2 md:pl-0">
									<DiscountCalculate
										price={cart.price}
										discountPercentage={cart.discountPercentage}
									/>
								</h3>
								<span className="text-sm md:text-base line-through text-slate-700 font-medium">
									<PriceFormat price={cart.price} />
								</span>
								<span className="text-md md:text-base  font-semibold text-green-600">{`${cart.discountPercentage.toFixed(
									0
								)}% off`}</span>
							</div>
							<button className="flex" onClick={() => removeCart(cart.id)}>
								<MdDelete className="text-2xl" /> Remove
							</button>
						</div>
						<div className=" col-span-12 md:col-span-4 ">
							<h4>
								Deliver by Tommorrow | free{" "}
								<span className="line-through">
									<PriceFormat price={0.86} />
								</span>
							</h4>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default CartItem;
