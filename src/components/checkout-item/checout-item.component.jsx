import React from 'react';
import { connect } from 'react-redux';
import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions';
import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <section className="checkout-item">
      <p className="checkout-item__product">
        <img src={imageUrl} alt={name} />
      </p>
      <div className="checkout-item__data-container">
        <h2 className="checkout-item__description">{name}</h2>
        <p className="checkout-item__quantity">
          <button
            className="checkout-item__arrow"
            onClick={() => removeItem(cartItem)}
            type="button"
          >
            &#10094;
          </button>
          <span className="checkout-item__quantity-value">{quantity}</span>
          <button className="checkout-item__arrow" onClick={() => addItem(cartItem)} type="button">
            &#10095;
          </button>
        </p>
        <p className="checkout-item__price">${price}</p>
        <button className="checkout-item__remove" onClick={() => clearItem(cartItem)} type="button">
          &#10005;
        </button>
      </div>
    </section>
  );
};

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
