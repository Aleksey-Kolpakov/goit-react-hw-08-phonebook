import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './Register.module.css';
import authOperations from '../../redux/auth/auth-operations';
import authSelectors from '../../redux/auth/auth-selectors';
import Loader from 'react-loader-spinner'
class Register extends Component {
  state = {
    name: '',
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
      name: '',
      email: '',
      password: '',
    });
  };
  registerUser = event => {
    event.preventDefault();
    const { email, password, name } = this.state;

    const user = {
      name,
      email,
      password,
    };
    this.props.registerUser(user);
    this.resetForm();
  };
  render() {
      const { email, password, name } = this.state;
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
      <form className={styles.form} onSubmit={this.registerUser}>
        <label>
          Name
          <input
            className={styles.input}
            type="text"
            placeholder="Enter your name"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
        </label>
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
          Register
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
  registerUser: user => dispatch(authOperations.getRegister(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);

Register.propTypes = {};
