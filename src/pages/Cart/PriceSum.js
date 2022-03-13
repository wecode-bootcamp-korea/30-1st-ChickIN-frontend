import React from 'react';

const PriceSum = ({ items }) => {
  const priceSum = Number(
    items
      .map(item => item.quantity * item.product.price)
      .reduce((a, b) => a + b, 0)
  );

  return (
    <div className="price_sum">
      <div className="goods_total_box">
        <div className="goods_price_box">
          <div className="goods_price_header">
            <p>총 상품 금액</p>
          </div>
          <div className="goods_price">
            <p>{priceSum}원</p>
          </div>
        </div>
        <span>+</span>
        <div className="delivery_charge_box">
          <div className="delivery_charge_header">
            <p>배송비</p>
          </div>
          <div className="delivery_charge">
            <p>{DELIVERY_CHARGE}원</p>
          </div>
        </div>
      </div>
      <div className="total_price_box">
        <div className="total_price_header">
          <p>총 주문 금액</p>
        </div>
        <div className="total_price">
          <p>{priceSum + DELIVERY_CHARGE}원</p>
        </div>
      </div>
    </div>
  );
};

const DELIVERY_CHARGE = 2500;

export default PriceSum;
