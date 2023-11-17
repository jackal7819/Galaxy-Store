import { NavLink } from 'react-router-dom';
import {
	FaBarsStaggered,
	FaCartShopping,
	FaMoon,
	FaSun,
} from 'react-icons/fa6';
import Navlinks from './Navlinks';
import { useEffect, useState } from 'react';

const themes = { retro: 'retro', coffee: 'coffee' };
const getTheme = () => localStorage.getItem('theme') || themes.retro;
const classSun = getTheme() === 'retro' ? 'swap-on' : 'swap-off';
const classMoon = getTheme() === 'retro' ? 'swap-off' : 'swap-on';

const Navbar = () => {
	const [theme, setTheme] = useState(getTheme());

	const themeHandler = () => {
		const newTheme = theme === themes.retro ? themes.coffee : themes.retro;
		setTheme(newTheme);
	};

	useEffect(() => {
		document.documentElement.setAttribute('data-theme', theme);
		localStorage.setItem('theme', theme);
	}, [theme]);

	return (
		<nav className='bg-base-200'>
			<div className='navbar align-element'>
				<div className='navbar-start'>
					<NavLink
						to='/'
						className='items-center hidden text-3xl uppercase lg:flex btn btn-primary'>
						galaxy
					</NavLink>
					<div className='dropdown'>
						<label tabIndex={0} className='btn btn-ghost lg:hidden'>
							<FaBarsStaggered size={24} />
						</label>
						<ul
							tabIndex={0}
							className='p-2 mt-3 shadow menu-md menu dropdown-content bg-base-200 w-60'>
							<Navlinks />
						</ul>
					</div>
				</div>
				<div className='hidden navbar-center lg:flex'>
					<ul className='menu menu-horizontal'>
						<Navlinks />
					</ul>
				</div>
				<div className='navbar-end'>
					<label className='swap swap-rotate'>
						<input type='checkbox' onChange={themeHandler} />
						<FaSun size={24} className={classSun} />
						<FaMoon size={24} className={classMoon} />
					</label>
					<NavLink
						to='/cart'
						className='ml-4 btn btn-ghost btn-circle btn-md'>
						<div className='indicator'>
							<FaCartShopping size={24} />
							<span className='badge badge-sm indicator-item badge-primary'>
								4
							</span>
						</div>
					</NavLink>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
