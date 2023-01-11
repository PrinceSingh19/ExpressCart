const allBrands = (products) => {
	const brands = products.map((x) => x.brand);
	return ["all", ...new Set(brands)];
};
const range = (start, stop, step) => {
	return Array.from({ length: (stop - start) / step + 1 }, (v, i) => start + i * step);
};
const ratings = range(1, 4, 1);
const discounts = range(10, 50, 10);
const newPriceRange = [6.04, 12.1, 30.3, 60.6];

export { range, ratings, discounts, newPriceRange, allBrands };
