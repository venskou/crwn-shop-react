import React, { useRef, useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { useMediaQuery } from 'react-responsive';
import classNames from 'classnames';

import { selectCartItems, selectCartVisibility } from '../../redux/cart/cart.selectors';

import { setCartVisibility } from '../../redux/cart/cart.actions';
import { setOverlayVisibility } from '../../redux/overlay/overlay.actions';

import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';

import './cart-dropdown.styles.scss';

const CartDropdown = ({
  cartToggleRef,
  isCartVisible,
  setCartVisibility,
  setOverlayVisibility,
  history,
  cartItems,
}) => {
  const cartDropdown = useRef(null);
  const cartToggle = cartToggleRef;

  useMediaQuery({ maxWidth: 576 }, undefined, isMobile => {
    if (isMobile && isCartVisible) {
      setOverlayVisibility(true);
    }

    if (!isMobile && isCartVisible) {
      setOverlayVisibility(false);
    }
  });

  const hideCart = () => {
    setCartVisibility(false);
    setOverlayVisibility(false);
  };

  useEffect(() => {
    const listener = ({ target }) => {
      const cartToggleEl = cartToggle.current;
      const cartDropdownEl = cartDropdown.current;

      const isCartToggle = cartToggleEl ? cartToggleEl.contains(target) : false;
      const isDropdown = cartDropdownEl ? cartDropdownEl.contains(target) : false;

      if (!cartToggleEl || !cartDropdownEl || isCartToggle || isDropdown) {
        return;
      }

      hideCart();
    };

    if (isCartVisible) {
      document.addEventListener('mousedown', listener);
    } else {
      document.removeEventListener('mousedown', listener);
    }

    return () => {
      document.removeEventListener('mousedown', listener);
    };
  }, [cartToggle, cartDropdown, isCartVisible]);

  const cartClass = classNames('cart-dropdown', {
    'cart-dropdown--open': isCartVisible,
  });

  const goToCheckout = () => {
    hideCart();
    history.push('/checkout');
  };

  return (
    <div className={cartClass} ref={cartDropdown}>
      <div className="cart-dropdown__items">
        {cartItems.length ? (
          cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
        ) : (
          <p className="cart-dropdown__empty-message">Your cart is empty</p>
        )}
      </div>
      <CustomButton onClick={goToCheckout} className="cart-dropdown__checkout-btn" type="button">
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  isCartVisible: selectCartVisibility,
});

const mapDispatchToProps = dispatch => ({
  setCartVisibility: isVisible => dispatch(setCartVisibility(isVisible)),
  setOverlayVisibility: isVisible => dispatch(setOverlayVisibility(isVisible)),
});

export default compose(connect(mapStateToProps, mapDispatchToProps), withRouter)(CartDropdown);
