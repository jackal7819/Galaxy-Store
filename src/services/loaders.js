import { customFetch } from './customFetch';

const productsUrl = '/products?featured=true';

export const landingLoader = async () => {
	const response = await customFetch(productsUrl);
	const products = response.data.data;
	return { products };
};

export const singleProductLoader = async ({params}) => {
	const response = await customFetch(`/products/${params.id}`);
	const product = response.data.data;
	return { product };
};
