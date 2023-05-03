import { FC } from 'react';
import Board from '../board/board';
import Form from '../form/form';
import Header from '../header/header';
import Layout from '../layout/layout';

const App: FC = () => (
  <>
    <Header />
    <Layout>
      <Form />
      <Board />
    </Layout>
  </>
);

export default App;
