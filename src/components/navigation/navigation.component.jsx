import React, { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import classNames from 'classnames';
import { useMediaQuery } from 'react-responsive';

import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectNavigationVisibility } from '../../redux/navigation/navigation.selector';

import { signOutStart } from '../../redux/user/user.actions';
import { setNavigationVisibility } from '../../redux/navigation/navigation.actions';
import { setOverlayVisibility } from '../../redux/overlay/overlay.actions';

import './navigation.styles.scss';

const Navigation = ({
  currentUser,
  navToggleRef,
  isNavVisible,
  setNavVisibility,
  setOverlayVisibility,
  signOutStart,
}) => {
  const location = useLocation();

  const navContainer = useRef(null);
  const navToggle = navToggleRef;

  const hideNavigation = () => {
    setNavVisibility(false);
    setOverlayVisibility(false);
  };

  const isMobile = useMediaQuery({ maxWidth: 576 }, undefined, isMobile => {
    if (!isMobile && isNavVisible) {
      hideNavigation();
    }
  });

  useEffect(() => {
    const listener = ({ target }) => {
      const navToggleEl = navToggle.current;
      const navContainerEl = navContainer.current;

      const isNavToggle = navToggleEl ? navToggleEl.contains(target) : false;
      const isNavContainer = navContainerEl ? navContainerEl.contains(target) : false;

      if (!navToggleEl || !navContainerEl || isNavToggle || isNavContainer) {
        return;
      }
      hideNavigation();
    };

    if (isMobile && isNavVisible) {
      document.addEventListener('mousedown', listener);
    } else {
      document.removeEventListener('mousedown', listener);
    }

    return () => {
      document.removeEventListener('mousedown', listener);
    };
  }, [navToggle, navContainer, isMobile, isNavVisible]);

  useEffect(() => {
    if (isNavVisible && isMobile) {
      hideNavigation();
    }
  }, [location]);

  const navContainerClass = classNames('navigation', {
    'navigation--open': isNavVisible,
  });

  return (
    <nav className={navContainerClass} ref={navContainer}>
      <div className="navigation__container">
        <Link to="/shop" className="navigation__link">
          Shop
        </Link>
        {currentUser ? (
          <Link onClick={signOutStart} to="" className="navigation__link">
            Sign Out
          </Link>
        ) : (
          <Link to="/signin" className="navigation__link">
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
};

const mapStateToProps = () =>
  createStructuredSelector({
    currentUser: selectCurrentUser,
    isNavVisible: selectNavigationVisibility,
  });

const mapDispatchToProps = dispatch => ({
  setNavVisibility: isVisible => dispatch(setNavigationVisibility(isVisible)),
  setOverlayVisibility: isVisible => dispatch(setOverlayVisibility(isVisible)),
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
