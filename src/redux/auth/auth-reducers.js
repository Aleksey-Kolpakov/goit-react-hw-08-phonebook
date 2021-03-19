import { createReducer, combineReducers } from '@reduxjs/toolkit';
import authActions from './auth-actions'
const initialState = { name: null, email: null };
const { registerSuccess,
    registerRequest,
    registerError,
    loginSuccess,
    loginRequest,
    loginError,
    logoutSuccess,
    logoutRequest,
    logoutError,
    getUserSuccess,
    getUserRequest,
    getUserError, } = authActions

const user = createReducer(initialState, {
    [registerSuccess]: (state, { payload }) => payload,
    [loginSuccess]: (state, { payload }) => payload,
    [getUserSuccess]: (state, { payload }) => payload,
    [logoutSuccess]: () => initialState,
})

const isAuthorized = createReducer(false, {
    [registerSuccess]: () => true,
    [loginSuccess]: () => true,
    [getUserSuccess]: () => true,
    [logoutSuccess]: () => false,
    [registerError]: () => false,
    [loginError]: () => false,
    [getUserError]: () => false,
    [logoutError]: () => true,
})

const token = createReducer(null, {
    [registerSuccess]: (_, { payload }) => payload,
    [loginSuccess]: (_, { payload }) => payload,
    [logoutSuccess]: () => null,
})

const error = createReducer(false, {
    [registerSuccess]: () => false,
    [registerRequest]: () => false,
    [registerError]: (_, { payload }) => payload,
    [loginSuccess]: () => false,
    [loginRequest]: () => false,
    [loginError]: (_, { payload }) => payload,
    [logoutSuccess]: () => false,
    [logoutRequest]: () => false,
    [logoutError]: (_, { payload }) => payload,
    [getUserSuccess]: () => false,
    [getUserRequest]: () => false,
    [getUserError]: (_, { payload }) => payload,
})
const authReducer = combineReducers({
    user,
    isAuthorized,
    token,
    error,
})

export default authReducer;