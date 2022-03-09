import './Cart.scss';

const Cart = () => {
  return (
    <div className="Cart">
      <div className="content_box">
        <div className="content_title">
          <h2>장바구니</h2>
        </div>
        <div className="cart_container">
          <div className="cart_content_list">
            <div class="order_table">
              <table>
                <thead>
                  <tr>
                    <th className="th_product">상품/옵션</th>
                    <th className="th_product_quantity">수량</th>
                    <th className="th_price">상품 금액</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="td_product">
                      <div className="td_product_content">
                        <div className="td_product_image" />
                        <div className="td_product_name">한우 채끝 150g</div>
                      </div>
                    </td>
                    <td className="td_product_quantity">
                      <p>1개</p>
                    </td>
                    <td className="td_product_price">
                      <p>100,500원</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="td_option">
                      <div className="td_option_content">
                        <div className="td_option_image" />
                        <div className="td_option_name">
                          (옵션) 새송이 & 미니 파프리카(180g)
                        </div>
                      </div>
                    </td>
                    <td className="td_option_quantity">
                      <p>1개</p>
                    </td>
                    <td className="td_option_price">
                      <p>6,000원</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="price_sum">
            <div className="goods_total_box">
              <div className="goods_price_box">
                <div className="goods_price_header">
                  <p>총 상품 금액</p>
                </div>
                <div className="goods_price">
                  <p>100,500원</p>
                </div>
              </div>
              <span>+</span>
              <div className="delivery_charge_box">
                <div className="delivery_charge_header">
                  <p>배송비</p>
                </div>
                <div className="delivery_charge">
                  <p>2,500원</p>
                </div>
              </div>
            </div>
            <div className="total_price_box">
              <div className="total_price_header">
                <p>총 주문 금액</p>
              </div>
              <div className="total_price">
                <p>103,000원</p>
              </div>
            </div>
          </div>
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
            <button>주문하기</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
