import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import ContactForm from '../../components/ContactForm/ContactForm';
import Filter from '../../components/Filter/Filter';
import ContactList from '../../components/ContactList/ContactList';
import phonebookOperations from '../../redux/phonebook/phonebook-operations'
import phonebookSelectors from '../../redux/phonebook/phonebook-selectors'
import styles from './Contacts.module.css'

const Contacts = ({ loading, error }) => {
  return (
    <div className={styles.container} >
      <h1>Phonebook</h1>
      {error && (
        <>
          <h1>Error</h1>
          <p>{error}</p>
        </>
      )}
      <ContactForm />
      {loading && (
        <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
      )}
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div >
  );
};
const mapStateToProps = state => ({
  error: phonebookSelectors.getError(state),
  loading: phonebookSelectors.getLoading(state)
})

export default connect(mapStateToProps)(Contacts);
