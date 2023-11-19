import { Link, useLoaderData } from 'react-router-dom';

import { formatPrice } from '../services/formatPrice';

const ProductsGrid = () => {
	const { products } = useLoaderData();

	return (
		<div className='grid gap-4 pt-12 md:grid-cols-2 lg:grid-cols-3'>
			{products?.map((product) => (
				<Link
					key={product.id}
					to={`/product/${product.id}`}
					className='w-full transition shadow shadow-secondary-content card duration hover:-translate-y-5'>
					<figure className='px-4 pt-4'>
						<img
							src={product.attributes.image}
							alt={product.attributes.title}
							className='object-cover w-full h-64 rounded-xl md:h-48'
						/>
					</figure>
					<div className='items-center text-center card-body'>
						<h2 className='tracking-wider capitalize card-title'>
							{product.attributes.title}
						</h2>
						<span className='text-primary'>{formatPrice(product.attributes.price)}</span>
					</div>
				</Link>
			))}
		</div>
	);
};

export default ProductsGrid;
