import React, { useState } from "react";

const AuthContext = React.createContext({
	isLoggedIn: false,
	onLogout: () => {},
	onLogin: (email, password) => {},
});

export const AuthContextProvider = (props) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const logoutHandler = () => {
		localStorage.removeItem("loggedIn");
		setIsLoggedIn(false);
	};
	const loginHandler = () => {
		localStorage.setItem("loggedIn", "1");
		setIsLoggedIn(true);
	};
	return (
		<AuthContext.Provider
			value={{ isLoggedIn, onLogout: logoutHandler, onLogin: loginHandler }}
		>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthContext;
