import customFetch from './customFetch';
import { redirect } from 'react-router-dom';
import { toast } from 'react-toastify';

const featuredProductsUrl = '/products?featured=true';
const productsUrl = '/products';

const featuredProductsQuery = {
	queryKey: ['featuredProducts'],
	queryFn: () => customFetch(featuredProductsUrl),
};

export const landingLoader = (queryClient) => async () => {
	const response = await queryClient.ensureQueryData(featuredProductsQuery);
	const products = response.data.data;
	return { products };
};

const singleProductQuery = (id) => {
	return {
		queryKey: ['singleProductQuery', id],
		queryFn: () => customFetch(`/products/${id}`),
	};
};

export const singleProductLoader =
	(queryClient) =>
	async ({ params }) => {
		const response = await queryClient.ensureQueryData(
			singleProductQuery(params.id)
		);
		const product = response.data.data;
		return { product };
	};

const productsQuery = (queryParams) => {
	const { search, category, company, sort, price, shipping, page } =
		queryParams;
	return {
		queryKey: [
			'products',
			search ?? '',
			category ?? 'all',
			company ?? 'all',
			sort ?? 'a-z',
			price ?? 100000,
			shipping ?? false,
			page ?? 1,
		],
		queryFn: () => customFetch(productsUrl, { params: queryParams }),
	};
};

export const productsLoader =
	(queryClient) =>
	async ({ request }) => {
		const params = Object.fromEntries([
			...new URL(request.url).searchParams.entries(),
		]);
		const response = await queryClient.ensureQueryData(
			productsQuery(params)
		);
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

const ordersQuery = (params, user) => {
	return {
		queryKey: [
			'orders',
			params.page ? parseInt(params.page) : 1,
			user.username,
		],
		queryFn: () =>
			customFetch('/orders', {
				params,
				headers: {
					Authorization: `Bearer ${user.token}`,
				},
			}),
	};
};

export const ordersLoader =
	(store, queryClient) =>
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
			const response = await queryClient.ensureQueryData(
				ordersQuery(params, user)
			);
			return { orders: response.data.data, meta: response.data.meta };
		} catch (error) {
			const errorMessage =
				error?.response?.data?.error?.message ||
				'There was an error placing your order';
			toast.error(errorMessage);
			if (
				error?.response?.status === 401 ||
				error?.response?.status === 403
			)
				return redirect('/login');
			return null;
		}
	};
