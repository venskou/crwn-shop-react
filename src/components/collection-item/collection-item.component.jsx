import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';

import CustomButton from '../custom-button/custom-button.component';

import './collection-item.styles.scss';

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;

  return (
    <section className="collection-item">
      <div className="collection-item__image-container">
        <img className="collection-item__image" src={imageUrl} alt={`${name} - $${price}`} />
        <CustomButton
          className="collection-item__cart-btn"
          onClick={() => addItem(item)}
          type="inverse"
        >
          Add to cart
        </CustomButton>
      </div>
      <footer className="collection-item__footer">
        <p className="collection-item__name">{name}</p>
        <p className="collection-item__price">${price}</p>
      </footer>
    </section>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
