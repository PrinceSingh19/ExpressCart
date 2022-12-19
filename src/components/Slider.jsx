import React, { useEffect, useState } from "react";
import { imagesLink } from "./images";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useAppContext } from "../context/AppContext";
import { motion } from "framer-motion";

const Slider = () => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const { sliderImages, sliderImagesLoading } = useAppContext();
	console.log(sliderImagesLoading);
	console.log(sliderImages);
	let autoScroll = true;
	let myInterval;
	const setNext = () => {
		const sliderLength = sliderImages.length;
		currentSlide < sliderLength - 1 ? setCurrentSlide(currentSlide + 1) : setCurrentSlide(0);
	};
	const setPrev = (index) => {
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

	return (
		<div className="overflow-hidden w-full h-64 ">
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
			{sliderImages.map((slide, index) => {
				return (
					<div key={index} className={`${sliderImagesLoading ? "animate-pulse bg-slate-600" : ""}`}>
						{currentSlide === index && (
							<motion.img
								src={slide.images[0]}
								className={`object-fill w-full `}
								viewport={{ once: false }}
								initial={{ opacity: 0 }}
								animate={{ opacity: sliderImagesLoading ? 0 : 1 }}
								whileInView={{ opacity: 1 }}
								transition={{ type: "easeIn", duration: 0.5 }}
							/>
						)}
					</div>
				);
			})}
		</div>
	);
};

export default Slider;
