import React from "react";
import { BsStarFill } from "react-icons/bs";

const Product = ({ product }) => {
	return (
		<div className=" rounded-sm  flex flex-col border-2 border-slate-200 py-2">
			<figure>
				<img src={product.images[0]} className="object-cover px-4 pt-2 h-40" />
				<figcaption className="pl-4  text-lg font-bold font-[calibri] text-ellipsis overflow-hidden whitespace-nowrap">
					{product.title}
				</figcaption>
			</figure>

			<div className="pl-4 mt-2 ">
				<h3 className="text-xl text-green-600 font-semibold">{product.price}</h3>
				<div className="text-sm text-slate-600 font-medium ">Free Delivery</div>
				<div className="pt-2 flex items-center ">
					<div className="flex items-center gap-1 bg-green-500 rounded-lg px-2">
						<span className="text-xl font-semibold text-white ">{product.rating}</span>
						<span>
							<BsStarFill className="text-yellow-400" />
						</span>
					</div>
					<span className="pl-6 text-sm text-slate-600 font-medium">11565 reviews</span>
				</div>
			</div>
		</div>
	);
};

export default Product;
