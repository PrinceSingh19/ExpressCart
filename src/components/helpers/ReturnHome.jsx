import React from "react";
import { Link } from "react-router-dom";

const ReturnHome = ({ text }) => {
	return (
		<div className="text-xl mt-1 mb-2">
			<Link to="/home" className="text-blue-800 mb-2">
				Home
			</Link>
			/{text}
		</div>
	);
};

export default ReturnHome;
