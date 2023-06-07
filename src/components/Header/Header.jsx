import { NavLink } from 'react-router-dom';
import css from './Header.module.css';

const Header = () => {
  return (
    <div className={css.header}>
      <nav className={css.nav}>
        <NavLink
          style={({ isActive }) => {
            return {
              color: isActive ? 'red' : 'black',
              fontSize: '24px',
            };
          }}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          style={({ isActive }) => {
            return {
              color: isActive ? 'red' : 'black',
              fontSize: '24px',
            };
          }}
          to="/movies"
        >
          Movies
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
