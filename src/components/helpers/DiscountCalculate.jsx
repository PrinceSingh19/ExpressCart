import React from "react";
import { convert } from "./PriceFormat";
//component to caluculate the discount based on the discountPercentage recd from api

export const finalDiscount = (discountPer, price) => {
	const divide = discountPer / 100;
	const discountedPrice = price - price * divide;
	const exchangeRate = 82.5;
	const convertedPrice = exchangeRate * discountedPrice; //rounding off the discounted price
	const converted = Math.ceil(convertedPrice);
	return converted;
};
const DiscountCalculate = ({ discountPercentage, price }) => {
	const convertedPrice = finalDiscount(discountPercentage, price);

	const formatPrice = convert(convertedPrice); //converting the price in indian rupee format b/c currency recd from api is in dollars
	return <span>{formatPrice}</span>;
};

export default DiscountCalculate;
