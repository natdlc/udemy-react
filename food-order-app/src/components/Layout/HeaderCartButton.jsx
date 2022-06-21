import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import { useContext } from "react";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
	const cart = useContext(CartContext);

	return (
		<>
			<button onClick={props.onClick} className={classes.button}>
				<span className={classes.icon}>
					<CartIcon />
				</span>
				<span>Your Cart</span>
				<span className={classes.badge}>{cart.items.length}</span>
			</button>
		</>
	);
};

export default HeaderCartButton;
