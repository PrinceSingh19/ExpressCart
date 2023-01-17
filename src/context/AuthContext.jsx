import { createContext, useContext, useEffect, useReducer, useState } from "react";
import {
	createUserWithEmailAndPassword,
	getAuth,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	updateProfile,
} from "firebase/auth";
import { auth } from "../auth/Firebase";
import { async } from "@firebase/util";

const AuthContext = createContext();

/* const getLocalData = () => {
	const item = localStorage.getItem("cartItem");
	const parsedData = JSON.parse(item);
	if (!Array.isArray(parsedData)) return [];
	return parsedData;
}; */

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	//console.log(user);

	const handleSignup = async (values) => {
		const { username, email, password } = values;
		try {
			await createUserWithEmailAndPassword(auth, email, password)
				.then((response) => console.log(response))
				.catch((error) => console.log(error.message));

			await updateProfile(auth.currentUser, {
				displayName: username,
			}).catch((error) => console.log(error.message));
		} catch (err) {
			console.log(err.message);
		}
	};

	const handleLogin = async (values) => {
		const { email, password } = values;
		try {
			const response = await signInWithEmailAndPassword(auth, email, password);
			console.log(response.user);
			return response.user;
		} catch (err) {
			console.log(err);
			return err.message;
		}
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user);
			} else {
				console.log("signed out");
			}
		});
		console.log(unsubscribe);
		return unsubscribe;
	}, []);

	return (
		<AuthContext.Provider value={{ user, handleSignup, handleLogin }}>
			{children}
		</AuthContext.Provider>
	);
};

const useAuthContext = () => {
	return useContext(AuthContext);
};

export { useAuthContext, AuthProvider };
