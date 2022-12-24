import React from "react";
import { BsStarFill } from "react-icons/bs";

const Product = ({ product }) => {
	return (
		<div className="ml-2 rounded-sm   flex flex-col border-2 border-slate-200 py-2 pb-4 w-60 ">
			<figure
				className="w-full flex flex-col
			justify-center items-center"
			>
				<img src={product.images[0]} className="object-contain h-40 min-w-[10rem] px-1 " />
				<figcaption className="md:pl-4  text-lg font-bold font-[calibri] text-ellipsis overflow-hidden whitespace-nowrap">
					{product.title}
				</figcaption>
			</figure>

			<div className="md:pl-4 pl-2 mt-2 ">
				<h3 className="text-xl text-green-600 font-semibold pl-2 md:pl-0">{product.price}</h3>
				<div className="text-sm text-slate-600 font-medium pl-2 md:pl-0 ">Free Delivery</div>
				<div className="pt-2 ml-2 md:flex md:ml-0 md:items-center ">
					<div className="flex justify-center md:flex md:justify-between items-center gap-1 bg-green-500 rounded-lg w-16 px-2 md:w-auto ">
						<span className="md:text-xl text-md font-semibold text-white ">{product.rating}</span>
						<span>
							<BsStarFill className="text-yellow-400" />
						</span>
					</div>
					<span className="md:pl-6 hidden md:block text-sm text-slate-600 font-medium text-ellipsis overflow-hidden whitespace-nowrap ">
						11565 reviews
					</span>
				</div>
			</div>
		</div>
	);
};

export default Product;
