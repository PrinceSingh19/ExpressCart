import React, { useRef, useState } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { useFilterContext } from "../../context/FilterContext";

const Form = () => {
	const { updateFormValue } = useFilterContext();
	const navigate = useNavigate();
	const handleSubmit = (e) => {
		e.preventDefault();
		const val = inputRef.current.value;
		const query = inputRef.current.name;
		updateFormValue(query, val);
		navigate(`/searchproducts/${val}`);
	};
	const inputRef = useRef();
	return (
		<form className="flex items-center " onSubmit={handleSubmit}>
			<input
				type="text"
				className="h-8 rounded-sm border-2 border-cyan-600  pl-4 w-full"
				ref={inputRef}
				name="query"
			/>
			<button type="submit" className="-ml-12 h-8 px-3 rounded-r-sm bg-orange-500 ">
				<HiMagnifyingGlass className="text-2xl" />
			</button>
		</form>
	);
};

export default Form;
