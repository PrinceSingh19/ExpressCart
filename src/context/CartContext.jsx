import { createContext, useContext, useReducer } from "react";
import reducer from "../reducer/CartReducer";
const CartContext = createContext();
const initialState = {
	cart: [],
	cartLoading: true,
	cartError: null,
};
const CartProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	console.log(state.cart);
	const addToCart = (product) => {
		dispatch({ type: "ADD_TO_CART", payload: product });
	};

	return <CartContext.Provider value={{ ...state, addToCart }}>{children}</CartContext.Provider>;
};

const useCartContext = () => {
	return useContext(CartContext);
};

export { useCartContext, CartProvider };
