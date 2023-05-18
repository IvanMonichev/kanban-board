import Board from '../board/board';
import Form from '../form/form';
import Header from '../header/header';
import Layout from '../layout/layout';
import { FC } from 'react';

const App: FC = () => {
	return (
		<>
			<Header />
			<Layout>
				<Form />
				<Board />
			</Layout>
		</>
	);
};

export default App;
