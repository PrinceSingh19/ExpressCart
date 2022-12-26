import React, { useEffect, useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useAppContext } from "../../context/AppContext";
import Slide from "./Slide";

const Slider = () => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const { sliderImages, sliderImagesLoading } = useAppContext();
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

	return (
		<div className="overflow-hidden w-full md:h-56 h-44 border-violet-800 border-t-4 border-b-4 p-2 bg-blue-600 ">
			<span
				className="absolute mt-14 md:mt-15 left-0 bg-white w-6 h-12 md:w-12 md:h-24 flex items-center rounded-tr-md rounded-br-md z-10 "
				onClick={() => setPrev()}
			>
				<BsChevronLeft className="text-4xl  " />
			</span>
			<span
				className="absolute mt-14 md:mt-15 right-0 bg-white w-6 h-12 md:w-12 md:h-24 flex items-center rounded-tl-md rounded-bl-md z-10"
				onClick={() => setNext()}
			>
				<BsChevronRight className="text-4xl" />
			</span>
			<div>
				{sliderImages.map((slide, index) => {
					return (
						<div key={index} className={`${sliderImagesLoading ? "animate-spin" : ""}`}>
							{currentSlide === index && <Slide img={slide} />}
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Slider;
