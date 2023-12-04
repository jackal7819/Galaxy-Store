import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const links = [
	{ id: 1, url: '/', text: 'home' },
	{ id: 2, url: 'products', text: 'products' },
	{ id: 3, url: 'about', text: 'about' },
	{ id: 4, url: 'cart', text: 'cart' },
	{ id: 5, url: 'checkout', text: 'checkout' },
	{ id: 6, url: 'orders', text: 'orders' },
];

const Navlinks = () => {
	const user = useSelector((state) => state.user.user);

	return (
		<>
			{links.map((link) => {
				if ((link.url === 'checkout' || link.url === 'orders') && !user)
					return null;
				return (
					<li key={link.id}>
						<NavLink
							to={link.url}
							className='uppercase lg:capitalize'
						>
							{link.text}
						</NavLink>
					</li>
				);
			})}
		</>
	);
};

export default Navlinks;
