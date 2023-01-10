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
	totalPrice: 0,
	totalAmount: 0,
	deliveryFee: 6.12,
};
const CartProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	console.log(state.totalAmount);
	const addToCart = (product) => {
		dispatch({ type: "ADD_TO_CART", payload: product });
	};

	const removeCart = (id) => {
		console.log(id);
		dispatch({ type: "REMOVE_CART", payload: id });
	};

	const setIncrease = (id) => {
		dispatch({ type: "SET_INCREASE", payload: id });
	};

	const setDecrease = (id) => {
		dispatch({ type: "SET_DECREASE", payload: id });
	};

	useEffect(() => {
		dispatch({ type: "TOTAL_CART_PRICE_AMOUNT" });
		localStorage.setItem("cartItem", JSON.stringify(state.cart));
	}, [state.cart]);
	return (
		<CartContext.Provider value={{ ...state, addToCart, removeCart, setDecrease, setIncrease }}>
			{children}
		</CartContext.Provider>
	);
};

const useCartContext = () => {
	return useContext(CartContext);
};

export { useCartContext, CartProvider };
