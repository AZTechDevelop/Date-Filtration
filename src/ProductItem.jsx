import './App.css'
function ProductItem({ produs, onSelect }) {
  return (
    <div onClick={() => onSelect(produs)} className="product-list">
      <h3 className="product">{produs.nume}</h3>
    </div>
  );
}

export default ProductItem;
