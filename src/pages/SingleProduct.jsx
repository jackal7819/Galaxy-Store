import { Link, useLoaderData } from 'react-router-dom';

import { formatPrice } from '../services/formatPrice';
import { useState } from 'react';

const SingleProduct = () => {
	const { product } = useLoaderData();
	const { title, price, image, description, colors, company } =
		product.attributes;
	const [productColor, setProductColor] = useState(colors[0]);

	return (
		<section>
			<div className='text-md breadcrumbs'>
				<ul>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/products'>Products</Link>
					</li>
				</ul>
			</div>
			<div className='grid mt-6 gap-y-8 lg:grid-cols-2 lg:gap-x-16'>
				<img
					src={image}
					alt={title}
					className='object-cover rounded-lg h-96 w-96 lg:w-full md:h-96'
				/>
				<div>
					<h1 className='text-3xl font-bold capitalize'>{title}</h1>
					<h4 className='mt-2 text-xl font-bold text-primary'>
						{company}
					</h4>
					<p className='mt-3 text-xl'>{formatPrice(price)}</p>
					<p className='mt-6 leading-8'>{description}</p>
					<div className='mt-6'>
						<h4 className='font-medium tracking-wider capitalize text-md'>
							colors
						</h4>
						<div className='mt-2'>
							{colors.map((color) => (
								<button
									key={color}
									className={`badge-lg mr-2 ${
										color === productColor &&
										'shadow-inner shadow-black'
									}`}
									style={{ backgroundColor: color }}
									onClick={() =>
										setProductColor(color)
									}></button>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SingleProduct;
