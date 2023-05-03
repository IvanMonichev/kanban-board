import { FC, PropsWithChildren } from 'react';

const Layout: FC<PropsWithChildren> = ({ children }) => (
  <main className='board-app__main'>
    <div className='board-app__inner'>{children}</div>
  </main>
);

export default Layout;
