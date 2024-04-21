import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Header from '../Header/Header';

const Layout = () => {
  return (
    <div>
      <Header />
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default Layout;
