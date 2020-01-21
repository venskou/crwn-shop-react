import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/user.actions';

import Cart from '../cart/cart.component';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';

const Header = ({ currentUser, signOutStart }) => (
  <header className="header">
    <Link to="/" className="header__logo-link">
      <Logo className="header__logo" />
    </Link>
    <div className="header__nav-container">
      <nav className="header__nav">
        <Link to="/shop" className="header__nav-link">
          Shop
        </Link>
        <Link to="/contact" className="header__nav-link">
          Contact
        </Link>
        {currentUser ? (
          <Link onClick={signOutStart} to={''} className="header__nav-link">
            Sign Out
          </Link>
        ) : (
          <Link to="/signin" className="header__nav-link">
            Sign In
          </Link>
        )}
      </nav>
      <Cart />
    </div>
  </header>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
