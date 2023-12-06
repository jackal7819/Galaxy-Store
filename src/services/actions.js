import customFetch from './customFetch';
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

export const loginAction = (store) => async ({request}) => {
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

export const checkoutAction = (store) => async () => {
	console.log(store);
	return null;
};