import formatPrice from '../services/formatPrice';
import { useSelector } from 'react-redux';

const CartTotals = () => {
	const { cartTotal, shipping, tax, orderTotal } = useSelector(
		(state) => state.cart
	);
	return (
		<div className='card bg-base-200'>
			<div className='card-body'>
				<p className='flex justify-between pb-2 text-xs border-b border-base-300'>
					<span>Subtotal</span>
					<span className='font-medium'>
						{formatPrice(cartTotal)}
					</span>
				</p>
				<p className='flex justify-between pb-2 text-xs border-b border-base-300'>
					<span>Shipping</span>
					<span className='font-medium'>{formatPrice(shipping)}</span>
				</p>
				<p className='flex justify-between pb-2 text-xs border-b border-base-300'>
					<span>Tax</span>
					<span className='font-medium'>{formatPrice(tax)}</span>
				</p>
				<p className='flex justify-between pb-2 mt-4 text-sm'>
					<span>Order Total</span>
					<span className='font-medium'>
						{formatPrice(orderTotal)}
					</span>
				</p>
			</div>
		</div>
	);
};

export default CartTotals;
