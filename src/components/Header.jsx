import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<header className='py-2 bg-neutral text-neutral-content'>
			<div className='flex justify-center align-element sm:justify-end'>
				<div className='flex items-center justify-center gap-x-6'>
					<Link
						to='/login'
						className='text-xs sm:text-sm link-hover link'>
						Sign in / Guest
					</Link>
					<Link
						to='/register'
						className='text-xs sm:text-sm link-hover link'>
						Create Account
					</Link>
				</div>
			</div>
		</header>
	);
};

export default Header;