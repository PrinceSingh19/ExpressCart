import React from "react";
import { BsStarFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";
import DiscountCalculate from "../helpers/DiscountCalculate";
import PriceFormat from "../helpers/PriceFormat";
import PriceComponent from "./PriceComponent";
import Rate from "./Rate";

const Product = ({ product }) => {
	const { loading, getSingleProduct } = useAppContext();
	const { id, title, price, rating, discountPercentage } = product;

	return (
		<NavLink to={`/singleproduct/${id}`}>
			<div
				className="rounded-lg   flex flex-col  border-2 border-slate-200  py-2 pb-4"
				onClick={() => getSingleProduct(id)}
			>
				<figure
					className="w-full flex flex-col
			justify-center items-center"
				>
					<img src={product.images[0]} className="object-contain h-40 min-w-[10rem] px-1  " />
					<figcaption className="md:pl-4 w-40 sm:w-40 md:w-auto text-center  text-base font-bold font-[calibri] text-ellipsis overflow-hidden break-words whitespace-nowrap">
						{title}
					</figcaption>
				</figure>

				<div className="">
					<div className="md:pl-4 pl-2 mt-2 ">
						<div className="flex gap-3 items-center">
							<h4 className="md:text-lg text-base text-green-600 font-semibold pl-2 md:pl-0">
								<DiscountCalculate price={price} discountPercentage={discountPercentage} />
							</h4>
							<span className="text-sm line-through text-slate-700 font-medium">
								<PriceFormat price={price} />
							</span>
							<span className="text-md font-semibold text-green-600 text-ellipsis whitespace-nowrap overflow-hidden">{`${discountPercentage.toFixed(
								0
							)}% off`}</span>
						</div>
						<div className="text-xs text-slate-600 font-medium pl-2 md:pl-0 ">Free Delivery</div>
					</div>
					<div className="pl-4">
						<Rate rating={rating} />
					</div>
				</div>
			</div>
		</NavLink>
	);
};

export default Product;
