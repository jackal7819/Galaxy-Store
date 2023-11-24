import customFetch from './customFetch';

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
