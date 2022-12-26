import React from "react";
import { useAppContext } from "../../context/AppContext";

const PriceFormat = ({ price }) => {
	/* const { exchange } = useAppContext();
	const exchangeRate = exchange.rates.INR; */
	const exchangeRate = 82.5;
	const convertedPrice = Math.ceil(exchangeRate * price);

	const formatPrice = Intl.NumberFormat("en-IN", {
		style: "currency",
		currency: "INR",
		maximumFractionDigits: 0,
		roundingIncrement: 5,
	}).format(convertedPrice);
	return <span>{formatPrice}</span>;
};

export default PriceFormat;
