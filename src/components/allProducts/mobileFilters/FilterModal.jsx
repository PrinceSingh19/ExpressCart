import React, { useState } from "react";
import { BsFilterCircleFill } from "react-icons/bs";
import { useFilterContext } from "../../../context/FilterContext";
import PriceFormat from "../../helpers/PriceFormat";

export default function FilterModal({ name, data, discount, price }) {
	const { updateFilterValue } = useFilterContext();
	const [showModal, setShowModal] = useState(false);
	return (
		<>
			<button
				className="text-base border-2 rounded-md px-2 capitalize flex items-center gap-4 outline-none focus:outline-none ease-linear transition-all duration-150"
				type="button"
				onClick={() => setShowModal(true)}
			>
				{name}
			</button>
			{showModal ? (
				<>
					<div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
						<div className="relative w-11/12  my-6 mx-auto">
							{/*content*/}
							<div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
								{/*header*/}
								<div className="flex items-center justify-between p-5 border-b border-solid border-slate-200 rounded-t">
									<h3 className="text-lg md:text-2xl font-semibold">Filters</h3>
									<button
										className="p-1 ml-auto  border-0 text-black  text-3xl font-semibold outline-none focus:outline-none"
										onClick={() => setShowModal(false)}
									>
										X
									</button>
								</div>
								{/*body*/}
								<div className="relative px-6 flex-auto">
									{data?.map((x, i) => {
										return (
											<form onChange={updateFilterValue} key={i} className=" capitalize">
												<input type="checkbox" value={x} name={name} id={x} />
												<label className="ml-2" htmlFor={x}>
													{x}
												</label>
											</form>
										);
									})}
								</div>
								<div className="relative px-6 flex-auto">
									{discount?.map((x, i) => {
										return (
											<form onChange={updateFilterValue} key={i} className=" capitalize">
												<input type="checkbox" value={x} name={name} id={x} />
												<label className="ml-2" htmlFor={x}>
													{`${x}% off`}
												</label>
											</form>
										);
									})}
								</div>
								<div className="relative px-6 flex-auto">
									{price?.map((x, i) => {
										return (
											<form onChange={updateFilterValue} key={i} className=" capitalize">
												<input type="checkbox" value={x} name={name} id={x} />
												<label className="ml-2" htmlFor={x}>
													<PriceFormat price={x} />
												</label>
											</form>
										);
									})}
								</div>
								{/*footer*/}
								<div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
									<button
										className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
										type="button"
										onClick={() => setShowModal(false)}
									>
										Close
									</button>
									<button
										className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
										type="button"
										onClick={() => setShowModal(false)}
									>
										Save Changes
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
				</>
			) : null}
		</>
	);
}
