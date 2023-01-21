//getting all the uniqued brands in the products list fecthed from api
const allBrands = (products) => {
	const brands = products.map((x) => x.brand);
	return ["all", ...new Set(brands)];
};

//setting range for any two given values
const range = (start, stop, step) => {
	return Array.from({ length: (stop - start) / step + 1 }, (v, i) => start + i * step);
};
const ratings = range(1, 4, 1); //setting ratings range from 1 to 4
const discounts = range(10, 50, 10); //setting discounts range from 10 to 50
const newPriceRange = [6.04, 12.1, 30.3, 60.6]; //setting price range from 500 to 5000rs

export { range, ratings, discounts, newPriceRange, allBrands };
