const ProductCatReducer = (state, { type, payload }) => {
	switch (type) {
		case "GET_UNIQUE_CAT":
			const allCat = payload.map((x) => x.category);
			const uniqueCat = [...new Set(allCat)];
			return {
				...state,
				uniqueCategories: uniqueCat,
			};

		case "GET_PRODUCTS_DATA":
			return {
				...state,
				productsData: [...payload],
			};
		default:
			return state;
	}
};

export default ProductCatReducer;
