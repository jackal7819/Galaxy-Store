import { useQueryClient } from '@tanstack/react-query';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { clearCart } from '../store/cartSlice';
import { logoutUser } from '../store/userSlice';

const Header = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const queryClient = useQueryClient();
	const user = useSelector((state) => state.user.user);

	const logoutHandler = () => {
		navigate('/');
		dispatch(clearCart());
		dispatch(logoutUser());
		queryClient.removeQueries();
	};

	return (
		<header className='py-2 bg-neutral text-neutral-content'>
			<div className='flex justify-center align-element sm:justify-end'>
				{user ? (
					<div className='flex items-center gap-x-2 sm:gap-x-8'>
						<p className='text-xs sm:text-sm'>
							Hello, {user.username}
						</p>
						<button
							className='uppercase btn btn-xs btn-outline btn-'
							onClick={logoutHandler}
						>
							logout
						</button>
					</div>
				) : (
					<div className='flex items-center justify-center gap-x-6'>
						<Link
							to='/login'
							className='text-xs sm:text-sm link-hover link'
						>
							Sign in / Guest
						</Link>
						<Link
							to='/register'
							className='text-xs sm:text-sm link-hover link'
						>
							Create Account
						</Link>
					</div>
				)}
			</div>
		</header>
	);
};

export default Header;
