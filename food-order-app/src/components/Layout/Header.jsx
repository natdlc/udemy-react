import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
	const modalClickHandler = () => {
		props.onModalClick(true);
	};

	return (
		<>
			<header className={classes.header}>
				<h1>ReactMeals</h1>
				<HeaderCartButton onClick={modalClickHandler} />
			</header>
			<div className={classes["main-image"]}>
				<img src={mealsImage} alt="table full of food" />
			</div>
		</>
	);
};

export default Header;
