import React from "react";
import AddUser from "./components/Users/AddUser/AddUser";
import styles from "./App.module.css";
import UserDisplay from "./components/Users/UserDisplay/UserDisplay";
import Card from "./components/UI/Card";

function App() {
	return (
		<div className={styles["main-wrapper"]}>
			<Card>
				<AddUser />
				<UserDisplay />
			</Card>
		</div>
	);
}

export default App;
