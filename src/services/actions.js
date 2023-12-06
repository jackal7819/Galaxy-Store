import { clearCart } from '../store/cartSlice';
import customFetch from './customFetch';
import formatPrice from './formatPrice';
import { loginUser } from '../store/userSlice';
import { redirect } from 'react-router-dom';
import { toast } from 'react-toastify';

export const registerAction = async ({ request }) => {
	const formData = await request.formData();
	const data = Object.fromEntries(formData);

	try {
		const response = await customFetch.post('/auth/local/register', data);
		toast.success('Account created successfully');
		console.log(response);
		return redirect('/login');
	} catch (error) {
		const errorMessage =
			error?.response?.data?.error.message ||
			'Please, double check your credentials';
		toast.error(errorMessage);
		return null;
	}
};

export const loginAction =
	(store) =>
	async ({ request }) => {
		const formData = await request.formData();
		const data = Object.fromEntries(formData);

		try {
			const response = await customFetch.post('/auth/local', data);
			store.dispatch(loginUser(response.data));
			toast.success('Logged in successfully');
			return redirect('/');
		} catch (error) {
			const errorMessage =
				error?.response?.data?.error?.message ||
				'Please, double check your credentials';
			toast.error(errorMessage);
			return null;
		}
	};

export const checkoutAction =
	(store) =>
	async ({ request }) => {
		const formData = await request.formData();
		const { name, address } = Object.fromEntries(formData);
		const user = store.getState().user.user;
		const { cartItems, orderTotal, numItemsInCart } = store.getState().cart;
		const info = {
			name,
			address,
			chargeTotal: orderTotal,
			orderTotal: formatPrice(orderTotal),
			cartItems,
			numItemsInCart,
		};

		try {
			const response = await customFetch.post(
				'/orders',
				{ data: info },
				{ headers: { Authorization: `Bearer ${user.token}` } }
			);
			
			console.log(response);
			store.dispatch(clearCart());
			return redirect('/orders');
		} catch (error) {
			console.log(error);
			const errorMessage =
				error?.response?.data?.error?.message ||
				'There was an error placing your order';
			toast.error(errorMessage);
			return null;
		}
	};
