import React from "react";
import { convert } from "./PriceFormat";

const DiscountCalculate = ({ discountPercentage, price }) => {
	const divide = discountPercentage / 100;
	const discountedPrice = price - price * divide;

	const exchangeRate = 82.5;
	const convertedPrice = Math.ceil(exchangeRate * discountedPrice);

	const formatPrice = convert(convertedPrice);
	return <span>{formatPrice}</span>;
};

export default DiscountCalculate;
