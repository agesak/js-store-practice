import React from 'react';
import PropTypes from 'prop-types';
import Product from './Product'

const ProductList = (productList) => {

  const products = productList.products.map((product, index) => {
    return (
      <div key={index}>
      <Product itemName={product.itemName} imageLink={product.imageLink} standardPrice={product.standardPrice} discountPrice={product.discountPrice} />
      </div>
    )
  })

  return (
    <div>
      {products}
    </div>
  )
};

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
}

export default ProductList;