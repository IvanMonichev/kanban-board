import './assets/styles/style.css';
import App from './components/app/app';
import store from './store';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
	<Provider store={store}>
		<App />
	</Provider>,
);
