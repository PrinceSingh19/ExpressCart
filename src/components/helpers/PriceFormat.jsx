import React from "react";
import { useAppContext } from "../../context/AppContext";
export const convert = (convertedPrice) => {
	//converting the fetched dollar currency into indian rupee currency format
	return Intl.NumberFormat("en-IN", {
		style: "currency",
		currency: "INR",
		maximumFractionDigits: 0,
		roundingIncrement: 5,
	}).format(convertedPrice);
};
const PriceFormat = ({ price }) => {
	/* const { exchange } = useAppContext();
	const exchangeRate = exchange.rates.INR; */
	const exchangeRate = 82.5;
	const convertedPrice = Math.ceil(exchangeRate * price);

	const formatPrice = convert(convertedPrice);
	return <span>{formatPrice}</span>;
};

export default PriceFormat;
