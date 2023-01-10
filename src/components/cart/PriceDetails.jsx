import React from "react";

const PriceDetails = () => {
	return (
		<div className=" ">
			<h1 className="pl-2  my-2">Price Details</h1>
			<div className="w-full h-[1px] bg-slate-300"></div>
			<div className="ml-2 md:my-2">
				<div className="flex flex-col pr-2 ">
					<div className="flex justify-between">
						<span>Price</span> <span>1399</span>
					</div>
					<div className="flex justify-between">
						<span>Delivery Charge</span> <span>Free</span>
					</div>
				</div>
			</div>
			<div className="w-full h-[1px] bg-slate-300 mt-3"></div>
			<div className="flex justify-between pl-2 pr-2 my-2 pb-2  font-semibold md:text-lg">
				<h3>Total Amount</h3>
				<span> 1399</span>
			</div>
		</div>
	);
};

export default PriceDetails;
