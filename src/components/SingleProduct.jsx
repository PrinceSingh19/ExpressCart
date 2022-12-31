import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { API } from "./API/API";
import DiscountCalculate from "./helpers/DiscountCalculate";
import PriceFormat from "./helpers/PriceFormat";
import PriceComponent from "./product/PriceComponent";
import Rate from "./product/Rate";
import Rating from "./Rating";

const SingleProduct = () => {
	const { id } = useParams();
	const [loading, setLoading] = useState(true);
	const { getSingleProduct, singleProduct } = useAppContext();
	const { brands, title, images, category, description, discountPercentage, price, rating, stock } =
		singleProduct;
	console.log(price, discountPercentage);
	useEffect(() => {
		getSingleProduct(`${API}/${id}`).then(() => setLoading(false));
	}, [id]);

	if (loading) {
		return <p>Loading...</p>;
	}
	return (
		<div className="grid grid-cols-2 mt-2">
			<div className="imgs grid grid-cols-12 place-items-center">
				<div className="col-span-4 space-y-2 place-items-center">
					{images?.map((img, index) => {
						return (
							<div
								key={index}
								className=" border-2 border-slate-300 flex flex-col justify-center h-24 w-24 "
							>
								<img src={img} alt="product image" className="object-cover h-full " />
							</div>
						);
					})}
				</div>
				<div className="col-span-8 h-80 place-content-center ">
					<img src={images[0]} className="object-cover h-full" />
				</div>
			</div>
			<div className="productDescription  h-full ml-28 flex flex-col justify-start">
				<h1 className="text-xl">{title}</h1>
				<div className="flex gap-3 items-center">
					<h3 className="md:text-2xl text-base text-green-600 font-semibold pl-2 md:pl-0">
						<DiscountCalculate price={price} discountPercentage={discountPercentage} />
					</h3>
					<span className="text-sm md:text-lg line-through text-slate-700 font-medium">
						<PriceFormat price={price} />
					</span>
					<span className="text-md md:text-lg  font-semibold text-green-600">{`${discountPercentage.toFixed(
						0
					)}% off`}</span>
				</div>
				<Rate rating={rating} />
			</div>
		</div>
	);
};

export default SingleProduct;
