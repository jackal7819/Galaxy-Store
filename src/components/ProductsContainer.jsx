import ProductsGrid from './ProductsGrid';
import ProductsList from './ProductsList';
import { useLoaderData } from 'react-router-dom';
import { useState } from 'react';
import { FaTrello, FaBars } from 'react-icons/fa6';

const ProductsContainer = () => {
	const { meta } = useLoaderData();
	const totalProducts = meta.pagination.total;

	const [layout, setLayout] = useState('grid');

	const setActiveStyles = (pattern) =>
		`text-xl btn btn-sm duration-500 btn-square ${
			pattern === layout
				? 'btn-primary text-primary-content'
				: 'btn-ghost text-based-content'
		}`;

	return (
		<>
			<div className='flex items-center justify-between pb-5 mt-8 border-b border-primary'>
				<h4 className='font-medium text-md'>
					{totalProducts} product{totalProducts > 1 && 's'}
				</h4>
				<div className='flex gap-x-2'>
					<button
						className={setActiveStyles('grid')}
						onClick={() => setLayout('grid')}>
						<FaTrello />
					</button>
					<button
						className={setActiveStyles('list')}
						onClick={() => setLayout('list')}>
						<FaBars />
					</button>
				</div>
			</div>
			<div>
				{totalProducts === 0 ? (
					<h5 className='mt-16 text-2xl'>
						Sorry, no products matched your search
					</h5>
				) : layout === 'grid' ? (
					<ProductsGrid />
				) : (
					<ProductsList />
				)}
			</div>
		</>
	);
};

export default ProductsContainer;
