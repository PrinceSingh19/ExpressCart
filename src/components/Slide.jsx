import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Slide = ({ img }) => {
	const [ref, inView] = useInView();
	const controls = useAnimation();

	useEffect(() => {
		if (inView) {
			controls.start("visible");
		} else {
			controls.start("hidden");
		}
	}, [controls, inView]);
	return (
		<motion.img
			src={img.images[0]}
			className="w-full object-fill"
			ref={ref}
			variants={{
				visible: { opacity: 1 },
				hidden: { opacity: 0 },
			}}
			transition={{ duration: 1 }}
			animate={controls}
			initial="hidden"
		/>
	);
};

export default Slide;
