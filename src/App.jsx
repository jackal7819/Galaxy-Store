import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import {
	checkoutAction,
	loginAction,
	registerAction,
} from './services/actions';
import {
	checkoutLoader,
	landingLoader,
	ordersLoader,
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
import { store } from './store/store';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 1000 * 60 * 5,
		},
	},
});

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
				loader: landingLoader(queryClient),
			},
			{
				path: 'products/:id',
				element: <SingleProduct />,
				errorElement: <ErrorElement />,
				loader: singleProductLoader(queryClient),
			},
			{
				path: 'products',
				element: <Products />,
				errorElement: <ErrorElement />,
				loader: productsLoader(queryClient),
			},
			{
				path: 'checkout',
				element: <Checkout />,
				loader: checkoutLoader(store),
				action: checkoutAction(store, queryClient),
			},
			{
				path: 'orders',
				element: <Orders />,
				loader: ordersLoader(store, queryClient),
			},
			{ path: 'about', element: <About /> },
			{ path: 'cart', element: <Cart /> },
		],
	},
	{
		path: 'login',
		element: <Login />,
		errorElement: <Error />,
		action: loginAction(store),
	},
	{
		path: 'register',
		element: <Register />,
		errorElement: <Error />,
		action: registerAction,
	},
]);

const App = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
		</QueryClientProvider>
	);
};

export default App;
