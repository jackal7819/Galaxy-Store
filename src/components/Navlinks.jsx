import { NavLink } from 'react-router-dom';

const links = [
	{ id: 1, url: '/', text: 'home' },
    { id: 2, url: '/products', text: 'products' },
	{ id: 3, url: '/about', text: 'about' },
	{ id: 4, url: '/cart', text: 'cart' },
	{ id: 5, url: '/checkout', text: 'checkout' },
	{ id: 6, url: '/orders', text: 'orders' },
];

const Navlinks = () => {
	return (
		<>
			{links.map((link) => (
				<li key={link.id}>
					<NavLink to={link.url} className='uppercase lg:capitalize'>
						{link.text}
					</NavLink>
				</li>
			))}
		</>
	);
};

export default Navlinks;
