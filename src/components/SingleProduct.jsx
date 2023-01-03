import React, { useEffect, useState } from "react";
import { BsTruck } from "react-icons/bs";
import { useParams } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { API } from "./API/API";
import DiscountCalculate from "./helpers/DiscountCalculate";
import PriceFormat from "./helpers/PriceFormat";
import PriceComponent from "./product/PriceComponent";
import Rate from "./product/Rate";
import Rating from "./Rating";
import { TbReplace, TbTruckDelivery } from "react-icons/tb";
import { MdOutlineSecurity } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import { FaGreaterThan } from "react-icons/fa";
import SingleLoadingSkeleton from "./SingleLoadingSkeleton";
import Skeleton from "react-loading-skeleton";

const SingleProduct = () => {
	const { id } = useParams();
	const [loading, setLoading] = useState(true);
	const [index, setIndex] = useState(0);
	const { getSingleProduct, singleProduct } = useAppContext();
	const { brand, title, images, category, description, discountPercentage, price, rating, stock } =
		singleProduct;

	useEffect(() => {
		getSingleProduct(`${API}/${id}`).then(() => setLoading(false));
	}, []);

	if (loading) {
		return <SingleLoadingSkeleton />;
	}
	return (
		<div className=" flex flex-col md:grid md:grid-cols-2 mt-2 ">
			<div className="imgs  md:grid md:grid-cols-12 md:place-items-center">
				<div className="flex items-center px-2 md:px-0 gap-x-1 md:gap-x-0  md:col-span-4 md:place-items-center ">
					<div className="flex flex-col  space-y-2 ">
						{images?.map((img, index) => {
							return (
								<div
									onClick={() => setIndex(index)}
									key={index}
									className=" border-2 border-slate-300 flex flex-col justify-center h-24 w-24 "
								>
									<img src={img} alt="product image" className="object-cover h-full " />
								</div>
							);
						})}
					</div>
					<div className="col-span-8 h-60 w-60 flex flex-col  mx-auto md:mx-0 items-center  mt-2 md:mt-0 md:hidden">
						<img src={images[index]} className="object-cover h-full w-full" />
					</div>
				</div>
				<div className=" col-span-8 md:h-96 md:w-96 flex justify-center md:flex-col  md:mx-0 items-center md:mt-0 ">
					<div className="h-80 w-80 hidden md:block">
						<img src={images[index]} className="object-cover w-full h-full" />
					</div>
					<div className="mt-8 md:mt-2 flex justify-center w-3/4 md:w-auto flex-col  md:flex-row gap-4 font-semibold">
						<button
							type="button"
							className="flex justify-center   items-center gap-2 px-5 py-2 border-[1px] border-black rounded-md"
						>
							<FiShoppingCart /> Add To Cart
						</button>
						<button
							type="button"
							className=" flex justify-center items-center gap-2 border-[1px] border-black rounded-md bg-orange-400 px-5 py-2"
						>
							<FaGreaterThan />
							Buy Now
						</button>
					</div>
				</div>
			</div>
			<div className="productDescription   h-full ml-4 mt-2 md:mt-0 mb-11 md:mb-0 md:ml-28 flex flex-col">
				<h1 className="text-xl">{title}</h1>
				<div className="flex gap-3 items-center">
					<h3 className="md:text-2xl text-lg text-green-600 font-semibold pl-2 md:pl-0">
						<DiscountCalculate price={price} discountPercentage={discountPercentage} />
					</h3>
					<span className="text-sm md:text-lg line-through text-slate-700 font-medium">
						<PriceFormat price={price} />
					</span>
					<span className="text-md md:text-lg  font-semibold text-green-600">{`${discountPercentage.toFixed(
						0
					)}% off`}</span>
				</div>

				<div className="w-3/5 mt-4 font-[calibri] text-lg text-neutral-600">
					<h4 className="md:text-xl">Product Details</h4>
					<h5>Name: {title}</h5>
					<h5>Brand: {brand}</h5>
					<h5>Type: {category}</h5>
					<p>{description}</p>
					<h5 className="">Available: {stock > 0 ? "In Stock" : "Out of Stock"}</h5>
				</div>
				<Rate rating={rating} />

				<div className="flex mt-4 gap-5">
					<div className="flex flex-col items-center">
						<TbTruckDelivery className="text-2xl " />
						<span className="text-sm">Free Delivery</span>
					</div>
					<div className="flex flex-col items-center">
						<TbReplace className="text-2xl" />
						<span className="text-sm">30 Days Replacement</span>
					</div>
					<div className="flex flex-col items-center">
						<MdOutlineSecurity className="text-2xl" />
						<span className="text-sm">Free Delivery</span>
					</div>
				</div>
				<span className="w-3/4 h-[2px] bg-slate-300 mt-2"></span>
			</div>
		</div>
	);
};

export default SingleProduct;
