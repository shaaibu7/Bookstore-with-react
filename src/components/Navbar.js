import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styles from './styles/Navbar.module.css';

const Navigation = () => (
  <header className={styles.header}>
    <h1>Bookstore CMS</h1>
    <nav className={styles.nav}>
      <NavLink to="/">BOOKS</NavLink>
      <NavLink to="/categories">CATEGORIES</NavLink>
    </nav>
    <Outlet />
  </header>
);

export default Navigation;
