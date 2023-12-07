import './index.css';
import 'react-toastify/dist/ReactToastify.css';

import App from './App';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import { store } from './store/store';

ReactDOM.createRoot(document.getElementById('root')).render(
	<Provider store={store}>
		<ToastContainer position='top-left' autoClose={5000} />
		<App />
	</Provider>
);
