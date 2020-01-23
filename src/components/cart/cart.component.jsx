import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useMediaQuery } from 'react-responsive';

import {
  selectCartItems,
  selectCartItemsCount,
  selectCartVisibility,
} from '../../redux/cart/cart.selectors';

import { setCartVisibility } from '../../redux/cart/cart.actions';
import { setOverlayVisibility } from '../../redux/overlay/overlay.actions';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import './cart.styles.scss';

const Cart = ({ itemCount, setCartVisibility, isCartVisible, setOverlayVisibility }) => {
  const cartToggle = useRef(null);

  const isMobile = useMediaQuery({ maxWidth: 576 });

  const toggleCart = () => {
    setCartVisibility(!isCartVisible);
    if (isMobile) {
      setOverlayVisibility(!isCartVisible);
    }
  };

  return (
    <div className="cart">
      <button className="cart__dropdown-toggle" type="button" ref={cartToggle} onClick={toggleCart}>
        <ShoppingIcon />
        <span className="cart__item-count">{itemCount}</span>
      </button>
      <CartDropdown cartToggleRef={cartToggle} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  itemCount: selectCartItemsCount,
  isCartVisible: selectCartVisibility,
});

const mapDispatchToProps = dispatch => ({
  setCartVisibility: isVisible => dispatch(setCartVisibility(isVisible)),
  setOverlayVisibility: isVisible => dispatch(setOverlayVisibility(isVisible)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
