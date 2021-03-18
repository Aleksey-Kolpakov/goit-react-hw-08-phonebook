import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import phonebookActions from '../../redux/phonebook/phonebook-actions'
import phonebookOperations from '../../redux/phonebook/phonebook-operations'
import styles from "./Login.module.css";
import phonebookSelectors from '../../redux/phonebook/phonebook-selectors'
class Login extends Component {
    state = {
        email: '',
        password: ''
    }
    handleChange = ({ target }) => {
        const { name, value } = target;
        this.setState({
            [name]: value
        })
    };
    resetForm = () => {
        this.setState({
            email: '',
            password: ''
        })
    }
    createContact = (event) => {
        event.preventDefault();
        const { email, password } = this.state;

        const user = {
            email,
            password
        }
        // this.props.addContactToState(contact);
        this.resetForm()
    }
    render() {
        const { email, password } = this.state
        return (

            <form className={styles.form} onSubmit={this.createContact} >
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
                <button className={styles.button} type="submit">Login</button>
            </form>
        );
    }
}

export default Login;

Login.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    addContactToState: PropTypes.func.isRequired
}

