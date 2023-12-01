import { editItem, removeItem } from '../store/cartSlice';

import { PropTypes } from 'prop-types';
import formatPrice from '../services/formatPrice';
import generateQuantity from '../services/generateQuantity';
import { useDispatch } from 'react-redux';

const CartItem = ({ cartItem }) => {
	const dispatch = useDispatch();
	const { cartID, title, price, image, quantity, company, productColor } =
		cartItem;

	const removeItemHandler = () => dispatch(removeItem({ cartID }));

	const quantityHandler = (event) => {
		dispatch(editItem({ cartID, quantity: parseInt(event.target.value) }));
	};

	return (
		<article className='flex flex-col flex-wrap pb-6 mb-12 border-b border-base-300 gap-y-4 sm:flex-row last:border-b-0'>
			<img
				src={image}
				alt={title}
				className='object-cover w-24 h-24 rounded-lg sm:h-32 sm:w-32'
			/>
			<div className='sm:ml-16 sm:w-48'>
				<h3 className='font-medium capitalize'>{title}</h3>
				<h4 className='mt-2 text-sm capitalize text-primary'>
					{company}
				</h4>
				<p className='flex items-center mt-2 text-sm capitalize gap-x-2'>
					color :
					<span
						className='badge badge-sm'
						style={{ backgroundColor: productColor }}
					></span>
				</p>
			</div>
			<div className='sm:ml-24'>
				<div className='max-w-xs form-control'>
					<label htmlFor='quantity' className='p-0 label'>
						<span className='label-text'>Quantity</span>
					</label>
					<select
						name='quantity'
						id='quantity'
						value={quantity}
						onChange={quantityHandler}
						className='mt-2 select select-secondary select-boarded select-xs'
					>
						{generateQuantity(quantity + 5)}
					</select>
				</div>
				<button
					className='mt-2 text-sm link link-primary link-hover'
					onClick={removeItemHandler}
				>
					remove
				</button>
			</div>
			<p className='font-medium sm:ml-auto'>{formatPrice(price)}</p>
		</article>
	);
};

CartItem.propTypes = {
	cartItem: {
		cartID: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired,
		image: PropTypes.string.isRequired,
		quantity: PropTypes.number.isRequired,
		company: PropTypes.string.isRequired,
		productColor: PropTypes.string.isRequired,
	},
};

export default CartItem;
