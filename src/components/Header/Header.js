import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import UserMenu from '../UserMenu/UserMenu';
import styles from './Header.module.css'
const Header = () => {
    return (
        <header>
            <NavLink className={styles.NavLink} exact to={routes.home}>Home</NavLink>
            <NavLink className={styles.NavLink} to={routes.contacts}>COntacts</NavLink>
            <NavLink className={styles.NavLink} to={routes.login}>Login</NavLink>
            <NavLink className={styles.NavLink} to={routes.register}>Registration</NavLink>

            <UserMenu />
        </header>
    );
};

export default Header;