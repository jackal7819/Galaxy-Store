import customFetch from './customFetch';
import { redirect } from 'react-router-dom';
import { toast } from 'react-toastify';

const featuredProductsUrl = '/products?featured=true';
const productsUrl = '/products';

export const landingLoader = async () => {
	const response = await customFetch(featuredProductsUrl);
	const products = response.data.data;
	return { products };
};

export const singleProductLoader = async ({ params }) => {
	const response = await customFetch(`/products/${params.id}`);
	const product = response.data.data;
	return { product };
};

export const productsLoader = async ({ request }) => {
	const params = Object.fromEntries([
		...new URL(request.url).searchParams.entries(),
	]);
	const response = await customFetch(productsUrl, { params });
	const products = response.data.data;
	const meta = response.data.meta;
	return { products, meta, params };
};

export const checkoutLoader = (store) => async () => {
	const user = store.getState().user.user;

	if (!user) {
		toast.warn('You must be logged in to checkout');
		return redirect('/login');
	}
	return null;
};

export const ordersLoader =
	(store) =>
	async ({ request }) => {
		const user = store.getState().user.user;
		if (!user) {
			toast.warn('You must be logged in to view your orders');
			return redirect('/login');
		}
		const params = Object.fromEntries([
			...new URL(request.url).searchParams.entries(),
		]);
		try {
			const response = await customFetch('/orders', {
				params,
				headers: {
					Authorization: `Bearer ${user.token}`,
				},
			});
			return { orders: response.data.data };
		} catch (error) {
			const errorMessage =
				error?.response?.data?.error?.message ||
				'There was an error placing your order';
			toast.error(errorMessage);
			if (error.response.status === 401 || error.response.status === 403)
				return redirect('/login');
			return null;
		}
	};
