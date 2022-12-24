import { createContext, useContext, useEffect, useReducer } from "react";
import { useAppContext } from "./AppContext";
import reducer from "../reducer/ProductCatReducer";
const ProductCatContext = createContext();
const initialState = {
	uniqueCategories: [],
	productsData: [],
};
const ProductCatProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const { products } = useAppContext();

	useEffect(() => {
		dispatch({ type: "GET_UNIQUE_CAT", payload: products });
		dispatch({ type: "GET_PRODUCTS_DATA", payload: products });
	}, [products]);
	return <ProductCatContext.Provider value={{ ...state }}>{children}</ProductCatContext.Provider>;
};

const useProductCatContext = () => {
	return useContext(ProductCatContext);
};

export { useProductCatContext, ProductCatProvider };
