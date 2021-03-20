import React from 'react';
import { connect} from 'react-redux';
import authOperations from '../../redux/auth/auth-operations'
const UserMenu = ({logoutUser}) => {
    return (
        <div>
            User email
            <button onClick={logoutUser}>Выйти</button>

        </div>
    );
};
const mapDispatchToProps = dispatch => ({
  logoutUser: () => dispatch(authOperations.getLogout()),
});
export default connect(null,mapDispatchToProps)(UserMenu);