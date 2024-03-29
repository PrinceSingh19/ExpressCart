import { createContext, useContext, useReducer, useEffect } from "react";
import { API, PRODUCTS_API } from "../components/API/API";
import reducer from "../reducer/AppReducer";

const AppContext = createContext();

/* const CURRENCY_API = `https://api.currencyfreaks.com/latest?apikey=${
	import.meta.env.VITE_CURRENCY_KEY
}&symbols=PKR,GBP,EUR,INR`; */
const initialState = {
	loading: true,
	error: null,
	products: [],
	singleProduct: {},
	singleLoading: true,
	singleError: null,
	sliderImagesLoading: true,
	sliderImages: [],
	uniqueCategories: [],
	productsData: [],
	//exchange: {},
	//exchangeError: null,
	//exchageLoading: true,
};
const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	//getting all the products on page load
	const getProducts = async (url) => {
		dispatch({ type: "PRODUCTS_LOADING" });
		try {
			const res = await fetch(url);
			const data = await res.json();
			if (!res.ok) {
				var error = new Error("Error" + res.status + res.statusText);
				throw error;
			}
			dispatch({ type: "SET_PRODUCTS", payload: data.products });
		} catch (err) {
			dispatch({ type: "PRODUCTS_ERROR", payload: err.message });
		}
	};

	//api to get latest currency rates
	/* 	const getCurrentRate = async (url) => {
		dispatch({ type: "EXCHANGE_RATE_LOADING" });
		try {
			const res = await fetch(url);
			const data = await res.json();

			if (!res.ok) 
				var error = new Error("Error" + res.status + res.statusText);
				throw error;
			}
			dispatch({ type: "SET_EXCHANGE_RATE", payload: data });
		} catch (err) {
			dispatch({ type: "EXCHANGE_RATE_ERROR", payload: err.message });
		}
	}; */

	//fetching singleproduct based on the selected product
	const getSingleProduct = async (url) => {
		dispatch({ type: "SINGLE_PRODUCT_LOADING" });
		try {
			const res = await fetch(url);
			const data = await res.json();
			if (!res.ok) {
				var error = new Error("Error" + res.status + res.statusText);
				throw error;
			}
			dispatch({ type: "SET_SINGLE_PRODUCT", payload: data });
		} catch (err) {
			dispatch({ type: "SINGLE_PRODUCT_ERROR", payload: err.message });
		}
	};

	useEffect(() => {
		getProducts(PRODUCTS_API);
		//getCurrentRate(CURRENCY_API);
	}, []);

	return (
		<AppContext.Provider value={{ ...state, getProducts, getSingleProduct, dispatch }}>
			{children}
		</AppContext.Provider>
	);
};

const useAppContext = () => {
	return useContext(AppContext);
};

export { AppProvider, useAppContext };
