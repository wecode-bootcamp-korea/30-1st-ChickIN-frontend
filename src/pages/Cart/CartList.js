import React from 'react';

function CartList({ item }) {
  return (
    <tbody>
      <tr>
        <td className="product">
          <div className="product_content">
            <div className="product_image" />
            <div className="product_name">{item.product.name}</div>
          </div>
        </td>
        <td className="product_quantity">
          <p>{item.quantity}개</p>
        </td>
        <td className="product_price">
          <p>{item.product.price * item.quantity}원</p>
        </td>
      </tr>
      <tr>
        <td className="option">
          <div className="option_content">
            <div className="option_image" />
            <div className="option_name">{item.option[0].name}</div>
          </div>
        </td>
        <td className="option_quantity">
          <p>1개</p>
        </td>
        <td className="option_price">
          <p>{item.option[0].price}원</p>
        </td>
      </tr>
    </tbody>
  );
}

export default CartList;
