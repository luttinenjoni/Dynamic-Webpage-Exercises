import React, { useState } from 'react';
import Header from './components/componentUI';
import OrderInfo from './components/orderInfo';
import OrderForm from './components/orderForm';
import '/src/styles/ui.css'

function App () {
  const [selectedProduct, setSelectedProduct] = useState({ name: 'AMD Ryzen', price: 245 });
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="app">
      <Header></Header>
      <OrderForm onProductChange={setSelectedProduct} onQuantityChange={setQuantity} />
      <OrderInfo product={selectedProduct} quantity={quantity} />
    </div>
  );
};

export default App;