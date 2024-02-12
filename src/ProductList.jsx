// ProductList.js
import React from 'react';
import ProductItem from './ProductItem';

function ProductList({ onSelect }) {
  const produse = [
    { id: 1, nume: 'Ceaiuri'},
    { id: 2, nume: 'Tincturi'},
    { id:3, nume:'Alifii'},
    { id:4, nume:'Siropuri'}
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
