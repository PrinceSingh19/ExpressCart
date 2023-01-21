import React from "react";
import { convert } from "./PriceFormat";
//component to caluculate the discount based on the discountPercentage recd from api
const DiscountCalculate = ({ discountPercentage, price }) => {
	const divide = discountPercentage / 100;
	const discountedPrice = price - price * divide;
	const exchangeRate = 82.5;
	const convertedPrice = Math.ceil(exchangeRate * discountedPrice); //rounding off the discounted price

	const formatPrice = convert(convertedPrice); //conberting the price in indian rupee format b/c currency recd from api is in dollars
	return <span>{formatPrice}</span>;
};

export default DiscountCalculate;
