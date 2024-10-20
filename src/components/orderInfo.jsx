import React from 'react';

function OrderInfo ({ product, quantity }) {
  const totalPrice = product.price * quantity;

  return (
    <div>
      <h3>Order Summary</h3>
      <table border="1">
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
            <tr>
              <td>{product.name}</td>
              <td>{quantity}</td>
              <td>${totalPrice}</td>
            </tr>
        </tbody>
      </table>
    </div>
  );
}

export default OrderInfo;
