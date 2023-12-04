import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import {
	landingLoader,
	productsLoader,
	singleProductLoader,
} from './services/loaders';

import About from './pages/About';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Error from './pages/Error';
import ErrorElement from './components/ErrorElement';
import HomeLayout from './pages/HomeLayout';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Orders from './pages/Orders';
import Products from './pages/Products';
import Register from './pages/Register';
import SingleProduct from './pages/SingleProduct';
import { registerAction } from './services/actions';

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomeLayout />,
		errorElement: <Error />,
		children: [
			{
				index: true,
				element: <Landing />,
				errorElement: <ErrorElement />,
				loader: landingLoader,
			},
			{
				path: 'products/:id',
				element: <SingleProduct />,
				errorElement: <ErrorElement />,
				loader: singleProductLoader,
			},
			{
				path: 'products',
				element: <Products />,
				errorElement: <ErrorElement />,
				loader: productsLoader,
			},
			{ path: 'about', element: <About /> },
			{ path: 'cart', element: <Cart /> },
			{ path: 'checkout', element: <Checkout /> },
			{ path: 'orders', element: <Orders /> },
		],
	},
	{ path: 'login', element: <Login />, errorElement: <Error /> },
	{
		path: 'register',
		element: <Register />,
		errorElement: <Error />,
		action: registerAction,
	},
]);

const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
