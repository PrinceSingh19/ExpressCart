import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const ProductSkeleton = () => {
	return (
		<SkeletonTheme baseColor="#bfc2c2" highlightColor="#6c7070">
			<div className="ml-2 rounded-lg flex flex-col border-2 border-slate-200 py-2 pb-4 w-40 md:w-60">
				<div className="flex flex-col items-center justify-center">
					<div className="md:block hidden">
						<Skeleton width={200} height={140} />
					</div>
					<div className="md:hidden min-w-[10rem] text-center">
						<Skeleton
							width={150}
							style={{ paddingLeft: "0.25rem", paddingRight: "0.25rem" }}
							height={140}
						/>
					</div>
					<Skeleton width={100} style={{ paddingTop: "5px", marginTop: "10px" }} />
				</div>
				<div className="mt-2 pl-4">
					<Skeleton count={2} width={80} height={20} />
				</div>
				<div className="hidden md:block">
					<div className="flex  items-center pl-4 gap-4 pr-2">
						<Skeleton height={23} width={80} />
						<Skeleton height={15} width={90} style={{ marginTop: "10px", paddingRight: "10px" }} />
					</div>
				</div>
				<div className="md:hidden pl-4">
					<Skeleton height={23} width={60} />
				</div>
			</div>
		</SkeletonTheme>
	);
};

export default ProductSkeleton;
