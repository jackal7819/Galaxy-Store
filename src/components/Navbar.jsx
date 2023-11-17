import { NavLink } from 'react-router-dom';
import { FaBarsStaggered, FaCartShopping } from 'react-icons/fa6';
import Navlinks from './Navlinks';

const Navbar = () => {
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
					<ul className='menu menu-horizontal'><Navlinks/></ul>
				</div>
				<div className='navbar-end'>
                    <NavLink to='/cart' className='ml-4 btn btn-ghost btn-circle btn-md'>
                        <div className="indicator">
                        <FaCartShopping size={24}/>
                        <span className="badge badge-sm indicator-item badge-primary">4</span>
                        </div>
                    </NavLink>
                </div>
			</div>
		</nav>
	);
};

export default Navbar;
