import CartContext from "./cart-context";

const CartProvider = (props) => {
	const addItemToCartHandler = (item) => {};

	const removeItemFromCartHandler = (id) => {};

	const cartContext = {
		items: [
			{
				amount: 5,
			},
			{
				amount: 6,
			},
		],
		totalAmount: 0,
		addItem: addItemToCartHandler,
		removeItem: removeItemFromCartHandler,
	};

	return (
		<CartContext.Provider value={cartContext}>
			{props.children}
		</CartContext.Provider>
	);
};

export default CartProvider;
