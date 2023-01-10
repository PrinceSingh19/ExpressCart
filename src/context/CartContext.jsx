import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/CartReducer";

const CartContext = createContext();

const getLocalData = () => {
	const item = localStorage.getItem("cartItem");
	const parsedData = JSON.parse(item);
	if (!Array.isArray(parsedData)) return [];
	return parsedData;
};
const initialState = {
	cart: getLocalData(),
	cartLoading: true,
	cartError: null,
};
const CartProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const addToCart = (product) => {
		dispatch({ type: "ADD_TO_CART", payload: product });
	};

	const removeCart = (id) => {
		console.log(id);
		dispatch({ type: "REMOVE_CART", payload: id });
	};

	useEffect(() => {
		localStorage.setItem("cartItem", JSON.stringify(state.cart));
	}, [state.cart]);
	return (
		<CartContext.Provider value={{ ...state, addToCart, removeCart }}>
			{children}
		</CartContext.Provider>
	);
};

const useCartContext = () => {
	return useContext(CartContext);
};

export { useCartContext, CartProvider };
