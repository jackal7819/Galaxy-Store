import { Form, Link, useLoaderData } from 'react-router-dom';

import FormCheckBox from './FormCheckBox';
import FormInput from './FormInput';
import FormRange from './FormRange';
import FormSelect from './FormSelect';

const Filters = () => {
	const { meta, params } = useLoaderData();
	console.log(params);

	return (
		<Form className='grid items-center px-8 py-4 rounded-md bg-neutral gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
			<FormInput
				type='search'
				label='search product'
				name='search'
				size='input-sm'
				defaultValue={params.search}
			/>
			<FormSelect
				label='category'
				name='category'
				list={meta.categories}
				size='select-sm'
				defaultValue={params.category}
			/>
			<FormSelect
				label='select company'
				name='company'
				list={meta.companies}
				size='select-sm'
				defaultValue={params.company}
			/>
			<FormSelect
				label='sort by'
				name='order'
				list={['a-z', 'z-a', 'high', 'low']}
				size='select-sm'
				defaultValue={params.order}
			/>
			<FormRange
				name='price'
				label='select price'
				size='range-sm'
				price={params.price}
			/>
			<FormCheckBox
				label='free shipping'
				name='shipping'
				size='checkbox-sm'
				defaultValue={params.shipping}
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
