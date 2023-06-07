import { Outlet } from 'react-router-dom';
import Header from 'components/Header/Header';
import css from './Layout.module.css';

const Layout = () => {
  return (
    <div className={css.container}>
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
