import React from 'react';
import './Cart.scss';
import CartList from './CartList';
import PriceSum from './PriceSum';
import CARTLIST from './CartListData';

const Cart = () => {
  const confirmOrder = () => {
    alert('주문이 완료되었습니다!');
  };

  return (
    <div className="cart">
      <div className="content_box">
        <div className="content_title">
          <h2>장바구니</h2>
        </div>
        <div className="cart_container">
          <div className="cart_content_list">
            <div class="order_table">
              {CARTLIST.map(item => (
                <CartList key={item.id} item={item} />
              ))}
            </div>
          </div>
          <PriceSum items={CARTLIST} />
          <div className="delivery_wrap">
            <div className="early_bird_desc">
              <p className="title">주문 전 꼭 확인해주세요!</p>
              <p className="desc">
                얼리버드, 예약 주문은 상품에 안내된 <span>지정된 출고일</span>
                로부터 새벽 배송 및 일반 배송으로 진행됩니다. <br /> 출고 지시
                상태가 되는 경우 <span>주문 취소 및 변경</span>이 불가합니다.
              </p>
            </div>
            <div className="naver_pay_desc">
              <p className="title">네이버 페이 주문 안내</p>
              <p className="desc">
                모든 네이버 페이 주문은 <span>‘일반 배송’</span>
                으로 진행됩니다.
              </p>
            </div>
          </div>
          <div className="button_wrap">
            <button onClick={confirmOrder}>주문하기</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
