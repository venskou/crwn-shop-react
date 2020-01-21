import React, { useRef } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectCartItems,
  selectCartItemsCount,
  selectCartHidden,
} from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart.styles.scss';

const Cart = ({ cartItems, itemCount, hidden, history, toggleCartHidden }) => {
  const cartToggle = useRef(null);

  return (
    <div className="cart">
      <button
        className="cart__dropdown-toggle"
        type="button"
        ref={cartToggle}
        onClick={toggleCartHidden}
      >
        <ShoppingIcon />
        <span className="cart__item-count">{itemCount}</span>
      </button>
      {hidden && <CartDropdown cartToggleRef={cartToggle} />}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  itemCount: selectCartItemsCount,
  hidden: selectCartHidden,
});

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(Cart);
