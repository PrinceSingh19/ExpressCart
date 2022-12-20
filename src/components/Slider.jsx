import React, { useEffect, useRef, useState } from "react";
import { BsChevronLeft, BsChevronRight, BsFillCloudArrowDownFill } from "react-icons/bs";
import { useAppContext } from "../context/AppContext";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Slide from "./Slide";

const Slider = () => {
	const [index, setIndex] = useState(0);
	const [currentSlide, setCurrentSlide] = useState(0);
	const { sliderImages, sliderImagesLoading } = useAppContext();
	console.log(sliderImages);
	const [ref, inView] = useInView();
	const control = useAnimation();
	const sliderVariants = {
		visible: { opatcity: 1, transition: { duration: 1 } },
		hidden: { opacity: 0 },
	};
	let autoScroll = true;
	let myInterval;
	/* const setNext = () => {
		const sliderLength = sliderImages.length;
		currentSlide < sliderLength - 1 ? setCurrentSlide(currentSlide + 1) : setCurrentSlide(0);
	}; */

	const setNext = () => {
		index === sliderImages.length - 1 ? setIndex(0) : setIndex(index + 1);
	};
	const setPrev = (index) => {
		/* const sliderLength = sliderImages.length;
		currentSlide === 0 ? setCurrentSlide(sliderLength - 1) : setCurrentSlide(currentSlide - 1); */
		index === 0 ? setIndex(sliderImages.length - 1) : setIndex(index - 1);
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
		if (inView) {
			control.start("visible");
		} else {
			control.start("hidden");
		}
	}, [control, inView]); */

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
			{sliderImages.map((slider, index) => {
				return (
					<div key={index} className="bg-red-400">
						<img src={slider.images[index]} className="w-full object-fill" />
					</div>
				);
			})}
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
