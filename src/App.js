import React, { Suspense, lazy } from 'react';
import { Route, Switch,Redirect } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import Header from './components/Header/Header';
import routes from './routes';
const Login = lazy(() => import('./pages/Login/Login' /* webpackChunkName: "login-page" */));
const Contacts = lazy(() => import('./pages/Contacts/Contacts' /* webpackChunkName: "contacts-page" */));
const Register = lazy(() => import('./pages/Register/Register' /* webpackChunkName: "register-page" */));
const HomePage = lazy(() => import('./pages/HomePage/HomePage' /* webpackChunkName: "home-page" */));

const App = () => {
  return (
    <>
      <Header />
      <Suspense
        fallback={
          <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
        }
      >
        <Switch>
          <Route exact path={routes.home} component={HomePage} />
          <Route path={routes.login} component={Login} />
          <Route path={routes.register} component={Register} />
          <Route path={routes.contacts} component={Contacts} />
        </Switch>
      </Suspense>
    </>
  );
};

export default App;
