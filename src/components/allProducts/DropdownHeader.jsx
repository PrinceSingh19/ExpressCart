import React, { useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { useFilterContext } from "../../context/FilterContext";

const DropdownHeader = ({ arrayData, head, extradata }) => {
	const [open, setOpen] = useState(false);
	const { updateFilterValue } = useFilterContext();
	const newData = extradata === undefined ? "" : extradata;

	return (
		<>
			<div
				className="text-base flex justify-between items-center text-ellipsis whitespace-nowrap overflow-hidden  md:w-32 font-medium"
				onClick={() => setOpen(!open)}
			>
				<span className="capitalize">{head}</span>
				<span>{open ? <BsChevronUp /> : <BsChevronDown />}</span>
			</div>
			<div className={open ? "block" : "hidden"}>
				{arrayData.map((curr, i) => {
					return (
						<div key={i}>
							<div>
								<button
									className="capitalize"
									type="button"
									name={head}
									value={curr}
									onClick={updateFilterValue}
								>
									{curr + " " + newData}
								</button>
							</div>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default DropdownHeader;
