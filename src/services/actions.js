import customFetch from './customFetch';
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
