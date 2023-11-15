import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import About from './pages/About';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Error from './pages/Error';
import HomeLayout from './pages/HomeLayout';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Orders from './pages/Orders';
import Products from './pages/Products';
import Register from './pages/Register';
import SingleProduct from './pages/SingleProduct';

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomeLayout />,
		errorElement: <Error />,
		children: [
			{ index: true, element: <Landing /> },
			{ path: 'about', element: <About /> },
			{ path: 'cart', element: <Cart /> },
			{ path: 'checkout', element: <Checkout /> },
			{ path: 'login', element: <Login /> },
			{ path: 'orders', element: <Orders /> },
			{ path: 'products', element: <Products /> },
			{ path: 'register', element: <Register /> },
			{ path: 'products/:id', element: <SingleProduct /> },
		],
	},
]);

const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
