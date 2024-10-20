import React, { useState } from 'react';

const products = [
  { name: 'AMD Ryzen', price: 245 }, { name: 'palli', price: 666 }
];

  function OrderForm ({ onProductChange, onQuantityChange }) {
    const [selectedProductIndex, setSelectedProductIndex] = useState(0);
    const [quantity, setQuantity] = useState(1);
  
    const handleProductChange = (event) => {
      const index = event.target.value;
      setSelectedProductIndex(index);
      onProductChange(products[index]);
    };
  
    const handleQuantityChange = (action) => {
      const newQuantity = action === 'increase' ? quantity + 1 : quantity - 1;
      setQuantity(newQuantity > 0 ? newQuantity : 0);
      onQuantityChange(newQuantity > 0 ? newQuantity : 0);
    };
  
    return (
      <div className="product-form">
        <select onChange={handleProductChange} value={selectedProductIndex}>
          {products.map((product, index) => (
            <option key={index} value={index}>
              {product.name}
            </option>
          ))}
        </select>
        <div>
          <button onClick={() => handleQuantityChange('decrease')}>-</button>
          <span>{quantity}</span>
          <button onClick={() => handleQuantityChange('increase')}>+</button>
        </div>
      </div>
    );
  };

export default OrderForm;