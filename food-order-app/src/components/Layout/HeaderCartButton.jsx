import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import { useEffect } from "react";

const HeaderCartButton = (props) => {
	const cartCtx = useContext(CartContext);

	const numOfCartItems = cartCtx.items.reduce((curNumber, item) => {
		return curNumber + item.amount;
	}, 0);

	useEffect(() => {}, [cartCtx.items]);

	return (
		<>
			<button
				onClick={props.onClick}
				className={`${classes.button} ${classes.bump}`}
			>
				<span className={classes.icon}>
					<CartIcon />
				</span>
				<span>Your Cart</span>
				<span className={classes.badge}>{numOfCartItems}</span>
			</button>
		</>
	);
};

export default HeaderCartButton;
