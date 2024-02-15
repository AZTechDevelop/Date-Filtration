// ProductList.js
import React from 'react';
import ProductItem from './ProductItem';

function ProductList({ onSelect }) {
  const produse = [
    { id: 1, nume: 'tip a'},
    { id: 2, nume: 'tip b'},
    { id:3, nume:'tip c'},
    { id:4, nume:'tip d'}
  ];

  return (
    <div className="product-list">
      {produse.map((produs) => (
        <ProductItem key={produs.id} produs={produs} onSelect={onSelect} />
      ))}
    </div>
  );
}

export default ProductList;
