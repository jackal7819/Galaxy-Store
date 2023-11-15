import { Link, useRouteError } from 'react-router-dom';

const Error = () => {
	const error = useRouteError();
	console.log(error);

	if (error.status === 404) {
		return (
			<main className='grid min-h-screen px-8 place-items-center'>
				<div className='text-center'>
					<p className='font-semibold text-9xl text-primary'>404</p>
					<h1 className='mt-4 text-3xl font-bold tracking-tight capitalize sm:text-5xl'>
						page not found
					</h1>
					<p className='mt-6 text-lg leading-7'>
						Sorry, we could not find the page you are looking for...
					</p>
					<div className='mt-10'>
						<Link to='/' className='uppercase btn btn-secondary'>
							go back home
						</Link>
					</div>
				</div>
			</main>
		);
	}

	return (
		<main className='grid min-h-screen px-8 place-items-center'>
			<h4 className='text-4xl font-bold text-center'>
				there was an error...
			</h4>
		</main>
	);
};

export default Error;
