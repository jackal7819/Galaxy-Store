import './index.css';
import 'react-toastify/dist/ReactToastify.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import App from './App';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
	<QueryClientProvider client={queryClient}>
		<ToastContainer position='top-left' autoClose={5000} />
		<App />
	</QueryClientProvider>
);
