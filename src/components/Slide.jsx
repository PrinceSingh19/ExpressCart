import React from "react";

const Slide = ({ img }) => {
	console.log(img);
	return (
		<div>
			<img src={img} className="w-full object-fill" />
		</div>
	);
};

export default Slide;
