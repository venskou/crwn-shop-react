import React, { useEffect, lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

import Header from './components/header/header.component';
import Spinner from './components/spinner/spinner.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';
import Overlay from './components/overlay/overlay.component';

import './App.scss';

const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'));
const SignInPage = lazy(() => import('./pages/sign-in-page/sign-in-page.component'));
const SignUpPage = lazy(() => import('./pages/sign-up-page/sign-up-page.component'));
const NotFoundPage = lazy(() => import('./pages/not-found/not-found.component'));

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div className="container">
      <Header />
      <ErrorBoundary>
        <Suspense fallback={<Spinner />}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route exact path="/checkout" component={CheckoutPage} />
            <Route
              exact
              path="/sign-in"
              render={() => (currentUser ? <Redirect to="/" /> : <SignInPage />)}
            />
            <Route
              exact
              path="/sign-up"
              render={() => (currentUser ? <Redirect to="/" /> : <SignUpPage />)}
            />
            <Route path="*" component={NotFoundPage} />
          </Switch>
        </Suspense>
      </ErrorBoundary>
      <Overlay />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
