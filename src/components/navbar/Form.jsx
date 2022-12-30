import React from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";

const Form = () => {
	return (
		<form className="flex items-center " onSubmit={(e) => e.preventDefault()}>
			<input type="text" className="h-8 rounded-sm border-2 border-cyan-600  pl-4 w-full" />
			<button type="submit" className="-ml-12 h-8 px-3 rounded-r-sm bg-orange-500 ">
				<HiMagnifyingGlass className="text-2xl" />
			</button>
		</form>
	);
};

export default Form;
