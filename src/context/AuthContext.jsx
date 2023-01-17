import { createContext, useContext, useEffect, useState } from "react";
import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	updateProfile,
} from "firebase/auth";
import { auth } from "../auth/Firebase";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	console.log(user);

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
				setUser(null);
			}
		});
		console.log(unsubscribe);
		return unsubscribe;
	}, [user]);

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
