import React from 'react';
import { connect } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations'
import authSelectors from '../../redux/auth/auth-selectors'
import styles from './UserMenu.module.css'
const UserMenu = ({ logoutUser, user }) => {
    return (
        <div className={styles.userMenu}>
            <p>{user.email}</p>
            <button onClick={logoutUser}>Выйти</button>

        </div>
    );
};

const mapStateToProps = state => {
    return ({
        user: authSelectors.getUser(state),
    })
}

const mapDispatchToProps = dispatch => ({
    logoutUser: () => dispatch(authOperations.getLogout()),
});
export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);