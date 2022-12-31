import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const FilterSkeleton = () => {
	return (
		<SkeletonTheme baseColor="#bfc2c2" highlightColor="#6c7070">
			<div className="flex flex-col">
				<Skeleton height={10} width={30} />
				<Skeleton height={8} width={30} count={4} />

				<Skeleton circle={5} count={4} />
			</div>
		</SkeletonTheme>
	);
};

export default FilterSkeleton;
