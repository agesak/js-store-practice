import React from 'react';
import PropTypes from 'prop-types';

const Product = (props) => {

    // If the discounted price is less than the standard price then the component should display the discounted price with some visual indicator (e.g. the price text is red).
  const pricing = () => {

    if (props.standardPrice > props.discountPrice) {
      return (
        <span className="text-danger">{props.discountPrice}</span>
      );
    } else {
      return (
        <span>{props.discountPrice}</span>
      )
    }
  }

  return (
    <div>
      <h4>{props.itemName}</h4>
      <img src={props.imageLink} alt=""/>
      <span>{pricing()}</span>
    </div>
  )
};

Product.propTypes = {
  itemName: PropTypes.string.isRequired,
  imageLink: PropTypes.string.isRequired,
  standardPrice: PropTypes.number.isRequired,
  discountPrice: PropTypes.number.isRequired
}

export default Product;