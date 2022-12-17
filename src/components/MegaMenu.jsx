import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MegaMenuLinks } from "./MegaMenuLinks";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { CgChevronDown } from "react-icons/cg";

const MegaMenu = () => {
	const [mainHead, setMainHead] = useState(false);
	const [heading, setHeading] = useState("");
	return (
		<>
			{MegaMenuLinks.map((links, i) => {
				return (
					<div key={i}>
						<div className="group ">
							<h1
								className={`text-lg flex items-center  font-normal font-[calibri] md:border-b-4 md:border-opacity-0 md:border-pink-600   md:hover:border-opacity-100 py-3 `}
								onClick={() => {
									setMainHead(!mainHead);
									setHeading("");
								}}
							>
								{links.name}

								<span
									className={`pl-1 md:group-hover:rotate-180 ${
										mainHead ? "rotate-180" : "rotate-0"
									}`}
								>
									<BiChevronDown />
								</span>
							</h1>
							<div className="hidden md:block">
								<div className="md:absolute  left-2 px-10 gap-8 group-hover:block hidden hover:block md:w-full md:border-b-2 md:border-slate-300 h-56 z-50">
									{links.submenu ? (
										<div className={`flex flex-col md:flex-row  md:gap-20  py-2 `}>
											{links.sublinks.map((mySublink, idx) => {
												return (
													<div key={idx}>
														<h1 className="text-lg font-semibold md:text-pink-600 ">
															{mySublink.Head}
														</h1>

														<div>
															{mySublink.sublink.map((slink, ke) => {
																return (
																	<li key={ke} className={`list-none pl-4  md:block `}>
																		<Link to={slink.link}>{slink.name}</Link>
																	</li>
																);
															})}
														</div>
													</div>
												);
											})}
										</div>
									) : (
										""
									)}
								</div>
							</div>
							<div className="md:hidden">
								<div className="md:absolute  left-2 px-10 gap-8 group-hover:block hidden hover:block md:w-full md:border-b-2 md:border-slate-300 h-1/3 mb-2">
									{links.submenu ? (
										<div
											className={`flex flex-col md:flex-row  md:gap-20 ${
												mainHead ? "block" : "hidden"
											}`}
										>
											{links.sublinks.map((mySublink, ind) => {
												return (
													<div key={ind}>
														<h1
															className="text-base md:text-pink-600 py-1 flex items-center"
															onClick={() => {
																mySublink.Head !== heading
																	? setHeading(mySublink.Head)
																	: setHeading("");
															}}
														>
															{mySublink.Head}
															<span
																className={`pl-2 ${
																	heading === mySublink.Head ? "rotate-180" : "rotate-0"
																}`}
															>
																<CgChevronDown />
															</span>
														</h1>

														<div
															className={`${heading === mySublink.Head ? "block" : "hidden"} mb-2`}
														>
															{mySublink.sublink.map((slink, index) => {
																return (
																	<li key={index} className={`list-none pl-8  md:block text-base `}>
																		<Link to={slink.link}>{slink.name}</Link>
																	</li>
																);
															})}
														</div>
													</div>
												);
											})}
										</div>
									) : (
										""
									)}
								</div>
							</div>
						</div>
					</div>
				);
			})}
		</>
	);
};

export default MegaMenu;
