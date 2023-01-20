import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../auth/Firebase";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user);
			} else {
				setUser(null);
			}
		});
		return unsubscribe;
	}, [user]);

	return <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>;
};
const useAuthContext = () => {
	return useContext(AuthContext);
};
export { useAuthContext, AuthProvider };
