import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './Login.module.css';
import authOperations from '../../redux/auth/auth-operations';
import authSelectors from '../../redux/auth/auth-selectors';
import Loader from 'react-loader-spinner';

class Login extends Component {
  state = {
    email: '',
    password: '',
  };
  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };
  resetForm = () => {
    this.setState({
      email: '',
      password: '',
    });
  };
  loginUser = event => {
    event.preventDefault();
    const { email, password } = this.state;
    const user = {
      email,
      password,
    };
    this.props.loginUser(user);
    this.resetForm();
  };
  render() {
    const { email, password } = this.state;
    const { error, loading } = this.props;
    return (
      <>
        {error && (
          <>
            <h1>Error</h1>
            <p>{error}</p>
          </>
        )}
        {loading && (
          <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
        )}
        <form className={styles.form} onSubmit={this.loginUser}>
          <label>
            Email
            <input
              className={styles.input}
              type="text"
              placeholder="Enter your email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Password
            <input
              className={styles.input}
              type="text"
              placeholder="Enter password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </label>
          <button className={styles.button} type="submit">
            Login
          </button>
        </form>
      </>
    );
  }
}

const mapStateToProps = state => ({
  error: authSelectors.getAuthError(state),
  loading: authSelectors.getAuthLoading(state),
});
const mapDispatchToProps = dispatch => ({
  loginUser: user => dispatch(authOperations.getLogin(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

Login.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  addContactToState: PropTypes.func.isRequired,
};
