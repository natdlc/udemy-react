import User from "./User/User";
const UsersDisplay = (props) => {
	const content = props.users.map((user) => (
		<User
			key={user.id}
			username={user.user}
			age={user.age}
			onClickDelete={props.onClickDelete}
			id={user.id}
		/>
	));
	return content;
};

export default UsersDisplay;
