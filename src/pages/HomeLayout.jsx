import { Outlet, useNavigation } from 'react-router-dom';

import Header from '../components/Header';
import Loading from '../components/Loading';
import Navbar from '../components/Navbar';

const HomeLayout = () => {
	const navigation = useNavigation();
	const isPageLoading = navigation.state === 'loading';

	return (
		<div>
			<Header />
			<Navbar />
			{isPageLoading ? (
				<Loading />
			) : (
				<section className='py-20 align-element'>
					<Outlet />
				</section>
			)}
		</div>
	);
};

export default HomeLayout;
