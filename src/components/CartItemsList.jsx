import CartItem from './CartItem';
import { useSelector } from 'react-redux';

const CartItemsList = () => {
	const cartItems = useSelector((state) => state.cart.cartItems);

	return (
		<>
			{cartItems.map((item) => (
				<CartItem key={item.cardID} cartItem={item} />
			))}
		</>
	);
};

export default CartItemsList;
