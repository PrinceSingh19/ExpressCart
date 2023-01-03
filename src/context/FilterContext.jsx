import { createContext, useContext, useEffect, useReducer } from "react";
import { useAppContext } from "./AppContext";
import reducer from "../reducer/FilterReducer";
const FilterContext = createContext();
const initialState = {
	loading: true,
	error: null,
	filter_products: [],
	all_products: [],
	filters: {
		//text: "",
		rating: null,
		brand: "all",
		discount: 0,
		price: 0,
		minPrice: 0,
		maxPrice: 0,
	},
};
const FilterProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const { products } = useAppContext();
	const getFilterProducts = async (url) => {
		dispatch({ type: "FILTERS_LOADING" });
		try {
			const res = await fetch(url);
			const data = await res.json();
			if (!res.ok) {
				var error = new Error("Error" + res.status + res.statusText);
				throw error;
			}
			dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: data.products });
		} catch (err) {
			dispatch({ type: "FILTERS_ERROR", payload: err.message });
		}
	};

	/* const getFilterProducts = (products) => {
		dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
	}; */

	const updateFilterValue = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		dispatch({ type: "UPDATE_FILTER_VALUE", payload: { name, value } });
	};

	useEffect(() => {
		dispatch({ type: "APPLY_FILTERS" });
	}, [state.filters]);
	return (
		<FilterContext.Provider value={{ ...state, getFilterProducts, updateFilterValue }}>
			{children}
		</FilterContext.Provider>
	);
};

const useFilterContext = () => {
	return useContext(FilterContext);
};

export { useFilterContext, FilterProvider, FilterContext };
