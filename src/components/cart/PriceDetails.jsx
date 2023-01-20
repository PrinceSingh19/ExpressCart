import React from "react";
import { useCartContext } from "../../context/CartContext";
import PriceFormat from "../helpers/PriceFormat";

const PriceDetails = () => {
	const { totalPrice } = useCartContext();
	return (
		<div className=" ">
			<h1 className="pl-2  my-2">Price Details</h1>
			<div className="w-full h-[1px] bg-slate-300"></div>
			<div className="ml-2 md:my-2">
				<div className="flex flex-col pr-2 ">
					<div className="flex justify-between">
						<span>Price</span>{" "}
						<span>
							<PriceFormat price={totalPrice} />
						</span>
					</div>
					<div className="flex justify-between">
						<span>Delivery Charge</span>{" "}
						<span>{totalPrice >= 6.12 ? "Free" : <PriceFormat price={0.86} />}</span>
					</div>
				</div>
			</div>
			<div className="w-full h-[1px] bg-slate-300 mt-3"></div>
			<div className="flex justify-between pl-2 pr-2 my-2 pb-2  font-semibold md:text-lg">
				<h3>Total Amount</h3>
				<span>
					<PriceFormat price={totalPrice} />
				</span>
			</div>
		</div>
	);
};

export default PriceDetails;
