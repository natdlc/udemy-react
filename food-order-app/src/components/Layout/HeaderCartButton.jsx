import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import { useEffect } from "react";
import { useState } from "react";

const HeaderCartButton = (props) => {
	const cartCtx = useContext(CartContext);
	const { items } = cartCtx;
	const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

	const numOfCartItems = cartCtx.items.reduce((curNumber, item) => {
		return curNumber + item.amount;
	}, 0);

	const btnClasses = `
	${classes.button} 
	${btnIsHighlighted ? classes.bump : ""}
	`;

	useEffect(() => {
		if (items.length === 0) {
			return;
		}
		setBtnIsHighlighted(true);
		console.log("timer initializes!");
		const timer = setTimeout(() => {
			console.log("timer runs!");
			setBtnIsHighlighted(false);
		}, 300);

		return () => {
			console.log("unmount, timer clears");
			clearTimeout(timer);
		};
	}, [items]);

	return (
		<>
			<button onClick={props.onClick} className={btnClasses}>
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
