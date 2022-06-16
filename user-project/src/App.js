import { useState } from "react";
import React from "react";
import AddUser from "./components/Users/AddUser/AddUser";
import styles from "./App.module.css";
import UsersDisplay from "./components/Users/UsersDisplay/UsersDisplay";
import Card from "./components/UI/Card";

const DUMMY_USERS = [
	{ user: "johnsmith", age: 25, id: "u1" },
	{ user: "nashcorpuz", age: 33, id: "u2" },
];

function App() {
	const [usersState, setUsersState] = useState(DUMMY_USERS);

	const addUserHandler = (newUser) => {
		setUsersState((prevState) => {
			const newUsers = [...prevState];
			newUsers.unshift(newUser);
			return newUsers;
		});
	};

  const deleteUserHandler = (userId) => {
    console.log('clicked');
    console.log(userId);
		setUsersState((prevState) => {
			const newUsers = [...prevState];
			return newUsers.filter((user) => userId !== user.id);
		});
	};

	let content = <p>No users found.</p>;
	if (usersState.length > 0) {
		content = <UsersDisplay users={usersState} onClickDelete={deleteUserHandler} />;
	}
	return (
		<Card className={styles["main-wrapper"]}>
			<Card>
				<AddUser onAddUser={addUserHandler} />
			</Card>
			<Card>{content}</Card>
		</Card>
	);
}

export default App;
