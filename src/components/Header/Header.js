import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import UserMenu from '../UserMenu/UserMenu';

const Header = () => {
    return (
        <header>
            <NavLink exact to={routes.home}>Home</NavLink>
            <NavLink to={routes.contacts}>COntacts</NavLink>
            <NavLink to={routes.login}>Login</NavLink>
            <NavLink to={routes.register}>Registration</NavLink>

            <UserMenu />
        </header>
    );
};

export default Header;