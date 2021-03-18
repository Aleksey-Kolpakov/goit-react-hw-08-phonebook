import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import phonebookActions from '../../redux/phonebook/phonebook-actions'
import phonebookOperations from '../../redux/phonebook/phonebook-operations'
import styles from "./Register.module.css";
import phonebookSelectors from '../../redux/phonebook/phonebook-selectors'
class Register extends Component {
    state = {
        name: '',
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
            name: '',
            email: '',
            password: ''
        })
    }
    createContact = (event) => {
        event.preventDefault();
        const { email, password, name } = this.state;

        const user = {
            name,
            email,
            password
        }
        // this.props.addContactToState(contact);
        this.resetForm()
    }
    render() {
        const { email, password, name } = this.state
        return (

            <form className={styles.form} onSubmit={this.createContact} >
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
                <button className={styles.button} type="submit">Login</button>
            </form>
        );
    }
}

export default Register;

Register.propTypes = {

}

