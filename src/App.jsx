// App.js
import React, { useState } from 'react';
import './App.css'; 
import ProductList from './ProductList';

function App() {
  const [produsSelectat, setProdusSelectat] = useState(null);

  const handleSelect = (produs) => {
    setProdusSelectat(produs);
  };

  return (
    <div className="App">
      <h1>Das</h1>
      <ProductList onSelect={handleSelect} />
      {produsSelectat && (
        <div className="d-flex justify-content-end">
          <h2>Detalii Produs</h2>
          <p>{produsSelectat.nume}</p>
          
        </div>
      )}
    </div>
  );
}

export default App;
