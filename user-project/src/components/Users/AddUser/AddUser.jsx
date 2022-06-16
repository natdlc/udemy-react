import { useState } from "react";
import Card from "../../UI/Card";
import Button from "../../UI/Button";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
	const [usernameState, setUsernameState] = useState("");
	const [ageState, setAgeState] = useState("");

	const addUserHandler = (event) => {
		event.preventDefault();
	};
	return (
		<Card className={`${styles.test} test2`}>
			<form onSubmit={addUserHandler} className={`${styles["form-wrapper"]}`}>
				<div className={styles["form-control-wrapper"]}>
					<label htmlFor="username">username</label>
					<input className="basic-input" type="text" id="username" />
				</div>
				<div className={styles["form-control-wrapper"]}>
					<label htmlFor="age">age</label>
					<input className="basic-input" type="number" id="age" />
				</div>
				<Button>Add User</Button>
			</form>
		</Card>
	);
};
export default AddUser;
