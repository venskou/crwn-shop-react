import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

import CheckoutItem from '../../components/checkout-item/checout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';
import './checkout.styles.scss';

const Checkout = ({ cartItems, total }) => (
  <section className="checkout">
    <header className="checkout__header">
      <p className="checkout__header-partition checkout__header-partition--product">Product</p>
      <p className="checkout__header-partition checkout__header-partition--description">
        Description
      </p>
      <p className="checkout__header-partition checkout__header-partition--quantity">Quantity</p>
      <p className="checkout__header-partition checkout__header-partition--price">Price</p>
      <p className="checkout__header-partition checkout__header-partition--remove">Remove</p>
    </header>
    {!cartItems.length && <p className="checkout__empty-message">Your cart is empty</p>}
    {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <p className="checkout__total">TOTAL: ${total}</p>
    {!!cartItems.length && (
      <>
        <div className="checkout__pay">
          <StripeCheckoutButton price={total} />
        </div>
        <div className="checkout__test-warning">
          <p>*Please use following test credit card for payments*</p>
          <p>CREDIT CARD: 4242 4242 4242 4242</p>
          <p>EXP: 01/20</p>
          <p>CW: 123</p>
        </div>
      </>
    )}
  </section>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(Checkout);
