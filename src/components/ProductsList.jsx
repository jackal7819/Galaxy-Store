import { Link, useLoaderData } from 'react-router-dom';

import formatPrice from '../services/formatPrice';

const ProductsList = () => {
	const { products } = useLoaderData();

	return (
		<div className='grid mt-12 gap-y-8'>
			{products.map((product) => (
				<Link
					key={product.id}
					to={`/products/${product.id}`}
					className='flex flex-col flex-wrap items-center p-8 duration-300 rounded-lg shadow shadow-secondary-content duration hover:shadow-md hover:shadow-secondary-content gap-y-4 group sm:flex-row'>
					<img
						src={product.attributes.image}
						alt={product.attributes.title}
						className='object-cover w-32 h-24 transition duration-300 rounded-lg sm:w-40 sm:h-32 group-hover:scale-105'
					/>
					<div className='ml-0 text-center sm:ml-16'>
						<h3 className='text-lg font-medium capitalize'>
							{product.attributes.title}
						</h3>
						<h4 className='font-medium capitalize text-md text-primary'>
							{product.attributes.company}
						</h4>
					</div>
					<p className='ml-0 text-lg font-medium sm:ml-auto'>
						{formatPrice(product.attributes.price)}
					</p>
				</Link>
			))}
		</div>
	);
};

export default ProductsList;
