import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { API } from "./API/API";
import Rating from "./Rating";

const SingleProduct = () => {
	const { id } = useParams();
	const [loading, setLoading] = useState(true);
	const { getSingleProduct, singleProduct } = useAppContext();
	const { brands, title, images, category, description, discountPercentage, price, rating, stock } =
		singleProduct;

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
							<div className=" border-2 border-slate-300 flex flex-col justify-center h-24 w-24 ">
								<img src={img} alt="product image" className="object-cover h-full " />
							</div>
						);
					})}
				</div>
				<div className="col-span-8 h-80 place-content-center ">
					<img src={images[0]} className="object-cover h-full" />
				</div>
			</div>
			<div className="productDescription  h-full">
				<h1>{title}</h1>
				<Rating rating={rating} />
			</div>
		</div>
	);
};

export default SingleProduct;
