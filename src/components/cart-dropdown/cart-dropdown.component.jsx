import React, { useRef, useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';
import { createStructuredSelector } from 'reselect';

import './cart-dropdown.styles.scss';

const CartDropdown = ({ history, cartItems, toggleCartHidden, cartToggleRef }) => {
  const cartDropdown = useRef(null);
  const cartToggle = cartToggleRef;

  useEffect(() => {
    const listener = ({ target }) => {
      const cartToggleEl = cartToggle.current;
      const cartDropdownEl = cartDropdown.current;

      const isCartToggle = cartToggleEl ? cartToggleEl.contains(target) : false;
      const isDropdown = cartDropdownEl ? cartDropdownEl.contains(target) : false;

      if (!cartToggleEl || !cartDropdownEl || isCartToggle || isDropdown) {
        return;
      }

      toggleCartHidden();
    };

    document.addEventListener('mousedown', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
    };
  }, [cartToggle, cartDropdown]);

  return (
    <div className="cart-dropdown" ref={cartDropdown}>
      <div className="cart-dropdown__items">
        {cartItems.length ? (
          cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
        ) : (
          <p className="cart-dropdown__empty-message">Your cart is empty</p>
        )}
      </div>
      <CustomButton
        onClick={() => {
          toggleCartHidden();
          history.push('/checkout');
        }}
        className="cart-dropdown__checkout-btn"
        type="button"
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default compose(connect(mapStateToProps, mapDispatchToProps), withRouter)(CartDropdown);
