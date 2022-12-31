import React from "react";
import { BsStarFill } from "react-icons/bs";
import DiscountCalculate from "../helpers/DiscountCalculate";
import PriceFormat from "../helpers/PriceFormat";

const PriceComponent = ({ price, discountPercentage }) => {
	return (
		<div className="md:pl-4 pl-2 mt-2 ">
			<h4 className="text-base text-green-600 font-semibold pl-2 md:pl-0">
				<DiscountCalculate price={price} discountPercentage={discountPercentage} />
			</h4>
			<div className="text-xs text-slate-600 font-medium pl-2 md:pl-0 ">Free Delivery</div>
		</div>
	);
};

export default PriceComponent;
