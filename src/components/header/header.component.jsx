import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import { selectNavigationVisibility } from '../../redux/navigation/navigation.selector';

import { setNavigationVisibility } from '../../redux/navigation/navigation.actions';
import { setOverlayVisibility } from '../../redux/overlay/overlay.actions';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import Cart from '../cart/cart.component';
import Navigation from '../navigation/navigation.component';

import './header.styles.scss';

const Header = ({ isNavVisible, setNavVisibility, setOverlayVisibility }) => {
  const navToggle = useRef(null);

  const toggleNavigation = () => {
    setNavVisibility(!isNavVisible);
    setOverlayVisibility(!isNavVisible);
  };

  const navToggleClass = classNames('header__nav-toggle', {
    'header__nav-toggle--cross': isNavVisible,
  });

  return (
    <header className="header">
      <button className={navToggleClass} type="button" onClick={toggleNavigation} ref={navToggle}>
        <span className="header__nav-toggle-box">
          <span />
        </span>
        Open Navigation
      </button>
      <Link to="/" className="header__logo-link">
        <Logo className="header__logo" />
      </Link>
      <Navigation navToggleRef={navToggle} />
      <Cart />
    </header>
  );
};

const mapStateToProps = () =>
  createStructuredSelector({
    isNavVisible: selectNavigationVisibility,
  });

const mapDispatchToProps = dispatch => ({
  setNavVisibility: isVisible => dispatch(setNavigationVisibility(isVisible)),
  setOverlayVisibility: isVisible => dispatch(setOverlayVisibility(isVisible)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
