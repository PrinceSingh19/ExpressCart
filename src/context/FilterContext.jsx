import { createContext, useContext, useEffect, useReducer } from "react";
import { useAppContext } from "./AppContext";
import reducer from "../reducer/FilterReducer";
const FilterContext = createContext();
const initialState = {
	loading: true,
	error: null,
	filter_products: [],
	all_products: [],
	sort_products: [],
	sort: "",
	filters: {
		query: "",
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

	const updateFormValue = (query, val) => {
		dispatch({ type: "UPDATE_FORM_VALUE", payload: { query, val } });
	};

	const clearFilters = () => {
		dispatch({ type: "CLEAR_FILTERS" });
	};

	const sortProductsValue = (e) => {
		dispatch({ type: "GET_SORT_VALUE", payload: e.target.value });
	};
	useEffect(() => {
		dispatch({ type: "SORT_PRODUCTS" });
		dispatch({ type: "APPLY_FILTERS" });
	}, [state.filters, state.sort]);
	return (
		<FilterContext.Provider
			value={{
				...state,
				getFilterProducts,
				updateFilterValue,
				updateFormValue,
				clearFilters,
				sortProductsValue,
			}}
		>
			{children}
		</FilterContext.Provider>
	);
};

const useFilterContext = () => {
	return useContext(FilterContext);
};

export { useFilterContext, FilterProvider, FilterContext };
