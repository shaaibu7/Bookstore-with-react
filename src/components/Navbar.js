import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import styles from './styles/Navbar.module.css';

const Navigation = () => (
  <header className={styles.header}>
    <div className={styles.head}>
      <h1>Bookstore CMS</h1>
      <nav className={styles.nav}>
        <NavLink to="/">BOOKS</NavLink>
        <NavLink to="/categories">CATEGORIES</NavLink>
      </nav>
    </div>
    <div className={styles.user}>
      <button type="button">
        <FaUser />
      </button>
    </div>
    <Outlet />
  </header>
);

export default Navigation;
