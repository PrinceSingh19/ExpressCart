import React, { useEffect, useRef, useState } from "react";
import { BsChevronLeft, BsChevronRight, BsFillCloudArrowDownFill } from "react-icons/bs";
import { useAppContext } from "../context/AppContext";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Slide = ({ img }) => {
	const [ref, inView] = useInView();
	const controls = useAnimation();

	useEffect(() => {
		console.log("inview" + inView);
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

const Slider = () => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const { sliderImages, sliderImagesLoading } = useAppContext();
	const [ref, inView] = useInView();
	const controls = useAnimation();
	const sliderVariants = {
		visible: { opatcity: 1, transition: { duration: 1 } },
		hidden: { opacity: 0 },
	};
	let autoScroll = true;
	let myInterval;
	const setNext = () => {
		const sliderLength = sliderImages.length;
		currentSlide < sliderLength - 1 ? setCurrentSlide(currentSlide + 1) : setCurrentSlide(0);
	};

	const setPrev = () => {
		const sliderLength = sliderImages.length;
		currentSlide === 0 ? setCurrentSlide(sliderLength - 1) : setCurrentSlide(currentSlide - 1);
	};

	const auto = () => {
		myInterval = setInterval(setNext, 5000);
	};

	useEffect(() => {
		setCurrentSlide(0);
	}, []);

	useEffect(() => {
		if (autoScroll) {
			auto();
		}
		return () => clearInterval(myInterval);
	}, [currentSlide]);

	/* 	useEffect(() => {
		console.log("inview" + inView);
		if (inView) {
			controls.start("visible");
		}
	}, [controls, inView]); */

	return (
		<div className="overflow-hidden w-full h-64 border-violet-800 border-t-4 border-b-4 ">
			<span
				className="absolute mt-20 left-0 bg-white w-12 h-24 flex items-center rounded-tr-md rounded-br-md z-50 "
				onClick={() => setPrev()}
			>
				<BsChevronLeft className="text-4xl  " />
			</span>
			<span
				className="absolute mt-20 right-0 bg-white w-12 h-24 flex items-center rounded-tl-md rounded-bl-md z-50"
				onClick={() => setNext()}
			>
				<BsChevronRight className="text-4xl" />
			</span>
			<div>
				{sliderImages.map((slide, index) => {
					return <div key={index}>{currentSlide === index && <Slide img={slide} />}</div>;
				})}
			</div>
		</div>
	);
};

export default Slider;

/* 	<div
						key={index}
						className={`${sliderImagesLoading ? "animate-pulse bg-slate-600" : ""} `}
					>
						{currentSlide === index && (
							<motion.img
								src={slide.images[0]}
								className={`object-fill w-full`}
								viewport={{ once: false }}
								initial={{ opacity: 0 }}
								animate={{ opacity: sliderImagesLoading ? 0 : 1 }}
								whileInView={{ opacity: 1 }}
								transition={{ type: "easeIn", duration: 0.5 }}
							/>
						)}
					</div> */
