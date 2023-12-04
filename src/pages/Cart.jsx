import CartItemsList from '../components/CartItemsList';
import CartTotals from '../components/CartTotals';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import { useSelector } from 'react-redux';

const Cart = () => {
	const user = useSelector((state) => state.user.user);
	const numItemsInCart = useSelector((state) => state.cart.numItemsInCart);

	if (numItemsInCart === 0) return <SectionTitle text='Your cart is empty' />;

	return (
		<>
			<SectionTitle text='Shopping Cart' />
			<div className='grid gap-8 mt-8 lg:grid-cols-12'>
				<div className='lg:col-span-8'>
					<CartItemsList />
				</div>
				<div className='lg:col-span-4'>
					<CartTotals />
					{user ? (
						<Link
							to='/checkout'
							className='mt-8 btn btn-primary btn-block'
						>
							proceed to checkout
						</Link>
					) : (
						<Link
							to='/login'
							className='mt-8 uppercase btn btn-primary btn-block'
						>
							please login
						</Link>
					)}
				</div>
			</div>
		</>
	);
};

export default Cart;
