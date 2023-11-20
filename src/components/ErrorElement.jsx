import { useRouteError } from 'react-router-dom';

const ErrorElement = () => {
	const error = useRouteError();
	console.log(error.message);

	return <h4 className='mt-20 text-4xl font-bold text-center capitalize'>{error.message}...</h4>;
};

export default ErrorElement;
