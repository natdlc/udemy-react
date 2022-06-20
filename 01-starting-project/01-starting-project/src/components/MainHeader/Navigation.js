import React from "react";
import AuthContext from "../../context/auth-context";

import classes from "./Navigation.module.css";

const Navigation = (props) => {
	return (
		// way 1 of context api
		<AuthContext.Consumer>
			{/* ctx === object from createContext argument */}
			{(ctx) => {
				return (
					<nav className={classes.nav}>
						<ul>
							{ctx.isLoggedIn && (
								<li>
									<a href="/">Users</a>
								</li>
							)}
							{ctx.isLoggedIn && (
								<li>
									<a href="/">Admin</a>
								</li>
							)}
							{ctx.isLoggedIn && (
								<li>
									<button onClick={props.onLogout}>Logout</button>
								</li>
							)}
						</ul>
					</nav>
				);
			}}
		</AuthContext.Consumer>
	);
};

export default Navigation;
