import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Navbar from '../components/Navbar';

const HomeLayout = () => {
	return (
		<div>
			<Header />
			<Navbar />
			<section className='py-20 align-element'>
				<Outlet />
			</section>
		</div>
	);
};

export default HomeLayout;
