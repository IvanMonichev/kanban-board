import Board from '../board/board';
import Form from '../form/form';
import Header from '../header/header';
import Layout from '../layout/layout';
import { FC } from 'react';
import { ToastContainer } from 'react-toastify';

const App: FC = () => {
	return (
		<>
			<Header />
			<Layout>
				<Form />
				<Board />
			</Layout>
			<ToastContainer />
		</>
	);
};

export default App;
