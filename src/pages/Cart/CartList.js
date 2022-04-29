import React from 'react';

const CartList = ({ item }) => {
  const { quantity, product } = item;
  return (
    <tbody>
      <tr>
        <td className="product_cart">
          <div className="product_content">
            <img className="product_image" src={product.thumbnail} />
            <div className="product_name">{product.name}</div>
            {/* <div className="option">
              <div className="option_name">{option[0].name}</div>
              <div className="option_quantity">{option[0].quantity}개</div>
              <div className="option_price">{option[0].price}원</div>
            </div> */}
          </div>
        </td>
        <td className="product_quantity">
          <p>{quantity}개</p>
        </td>
        <td className="product_price">
          <p>{product.price * quantity}원</p>
        </td>

        {/* <td className="option">
          <div className="option_content">
            <div className="option_name">{option.name}</div>
          </div>
        </td>
        <td className="option_quantity">
          <p>{option.quantity}개</p>
        </td>
        <td className="option_price">
          <p>{option.price}원</p>
        </td> */}
      </tr>
    </tbody>
  );
};

export default CartList;
