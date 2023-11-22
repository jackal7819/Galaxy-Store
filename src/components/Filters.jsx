import { Form, Link } from 'react-router-dom';
import FormInput from './FormInput';

const Filters = () => {
	return (
		<Form className='grid items-center px-8 py-4 rounded-md bg-neutral gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
			<FormInput
				type='search'
				label='search product'
				name='search'
				size='input-sm'
			/>
			<button type='submit' className='uppercase btn btn-primary btn-sm'>
				search
			</button>
			<Link to='/products' className='uppercase btn btn-accent btn-sm'>
				reset
			</Link>
		</Form>
	);
};

export default Filters;
