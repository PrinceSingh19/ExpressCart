import { createContext, useContext, useReducer, useEffect } from "react";
import reducer from "../reducer/AppReducer";

const AppContext = createContext();
const API = "https://dummyjson.com/products";
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
	/* 	const getCurrentRate = async (url) => {
		dispatch({ type: "EXCHANGE_RATE_LOADING" });
		try {
			const res = await fetch(url);
			const data = await res.json();

			if (!res.ok) {
				var error = new Error("Error" + res.status + res.statusText);
				throw error;
			}
			dispatch({ type: "SET_EXCHANGE_RATE", payload: data });
		} catch (err) {
			dispatch({ type: "EXCHANGE_RATE_ERROR", payload: err.message });
		}
	}; */
	useEffect(() => {
		getProducts(API);
		//getCurrentRate(CURRENCY_API);
	}, []);

	return <AppContext.Provider value={{ ...state, getProducts }}>{children}</AppContext.Provider>;
};

const useAppContext = () => {
	return useContext(AppContext);
};

export { AppProvider, useAppContext };
