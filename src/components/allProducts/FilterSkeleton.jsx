import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const FilterSkeleton = () => {
	return (
		<SkeletonTheme baseColor="#bfc2c2" highlightColor="#6c7070">
			<div className="flex flex-col">
				<Skeleton height={25} width={60} />
				<Skeleton height={20} width={50} count={2} />
				<Skeleton height={15} width={90} count={4} />
				<Skeleton height={20} width={50} count={2} />
				<Skeleton width={80} count={4} />
				<Skeleton height={45} width={100} />
			</div>
		</SkeletonTheme>
	);
};

export default FilterSkeleton;
