import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const SingleLoadingSkeleton = () => {
	return (
		<SkeletonTheme baseColor="#bfc2c2" highlightColor="#6c7070">
			<div className=" flex flex-col md:grid md:grid-cols-2 mt-2 ">
				<div className="imgs  md:grid md:grid-cols-12 md:place-items-center">
					<div className="flex items-center px-2 md:px-0 gap-x-1 md:gap-x-0  md:col-span-4 md:place-items-center ">
						<div className="flex flex-col space-y-2 ">
							{Array.from({ length: 5 }, (v, i) => {
								return (
									<div
										key={i}
										className=" border-2 border-slate-300 flex flex-col justify-center h-24 w-24 "
									>
										<Skeleton style={{ width: `100%`, height: "6rem" }} />
									</div>
								);
							})}
						</div>
						<div className="col-span-8 h-60 w-60 flex flex-col  mx-auto md:mx-0 items-center  mt-2 md:mt-0 md:hidden">
							<Skeleton width={"15rem"} height={"15rem"} />
						</div>
					</div>
					<div className=" col-span-8 md:h-96 md:w-96 flex justify-center md:flex-col  md:mx-0 items-center md:mt-0 ">
						<div className="h-80 w-80 hidden md:block">
							<Skeleton height={"20rem"} width={"20rem"} />
						</div>
						<div className="mt-8 md:mt-2 flex justify-center w-3/4 md:w-auto  md:flex-row gap-4 font-semibold">
							<Skeleton height={42} width={140} />
							<Skeleton height={42} width={140} />
						</div>
					</div>
				</div>
				<div className="productDescription md:place-items-center  h-full ml-4 mt-2 md:mt-0 mb-11 md:mb-0 md:ml-28 flex flex-col">
					<Skeleton height={30} width={60} />
					<div className="flex gap-3 items-center">
						<Skeleton height={35} width={70} />
						<Skeleton height={22} width={30} />
						<Skeleton height={22} width={30} />
					</div>

					<div className="w-3/5 mt-4 font-[calibri] text-lg text-neutral-600">
						<Skeleton height={16} width={100} count={6} />
					</div>
					<div className="flex items-center gap-4">
						<Skeleton height={25} width={50} />
						<Skeleton height={16} width={40} />
					</div>

					<div className="flex mt-4 gap-5">
						<div className="flex flex-col items-center">
							<Skeleton height={30} width={30} circle={"50%"} />
							<Skeleton height={15} width={60} />
						</div>
						<div className="flex flex-col items-center">
							<Skeleton height={30} width={30} circle={"50%"} />
							<Skeleton height={15} width={60} />
						</div>
						<div className="flex flex-col items-center">
							<Skeleton height={30} width={30} circle={"50%"} />
							<Skeleton height={15} width={60} />
						</div>
					</div>
					<span className="w-3/4 h-[2px] bg-slate-300 mt-2"></span>
				</div>
			</div>
		</SkeletonTheme>
	);
};

export default SingleLoadingSkeleton;
