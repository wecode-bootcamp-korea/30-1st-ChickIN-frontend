import Counter from './Counter_box/CounterBox';
import './GoodsView.scss';
import './mock.json';

function GoodsView({ items }) {
  return (
    <div>
      <div className="product_detail_container">
        <div className="inner_wrap">
          <div className="detail_top">
            <div className="detail_left">
              <div className="detail_image_container">
                <div className="detail_image_wrapper">
                  <img
                    src="https://image.shutterstock.com/image-photo/chiken-potato-other-vegetables-on-600w-534962260.jpg"
                    alt="chicken_lug_image"
                  />
                  <img src={items[0].imgUrl} alt="chicken_lug_image" />
                  <img src={items[1].imgUrl} alt="chicken_leg_image" />
                </div>
              </div>
            </div>
            <div className="detail_right">
              <div className="detail_information">
                <div className="detail_information_title">{items[0].title}</div>
                <div className="detail_information_wrapper">
                  <div className="product_price_wrapper">
                    <div className="product_discount">
                      <span className="discount_price">10%</span>
                      <span className="old_price">68,000원</span>
                    </div>
                    <div className="product_new_price">{items[0].price}</div>
                  </div>
                </div>
                <div className="product_description">
                  넘쳐흐르는 육즙과 특수부위의 농후한 향, 쫄깃한 식감까지 담은
                  채끝
                </div>
                <div className="product_option">
                  <div className="choice_number_option">
                    <select className="option">
                      <option value="">중량</option>
                      <option value="">1팩</option>
                    </select>
                  </div>
                  <div className="choice_add_option">
                    <select className="option">
                      <option value="">추가옵션</option>
                      <option value="cut">껍질 제거 (+1,000원)</option>
                      <option value="seasoning">시즈닝 (+2,000원)</option>
                      <option value="sauce">양념소스 추가 (+3,000원)</option>
                      <option value="vacuum">
                        수비드용 진공포장 (+1,000원)
                      </option>
                      <option value="bone">뼈 제거 (+1,000원)</option>
                    </select>
                  </div>
                  <div className="option_total_area">
                    <div className="order_product_option_display_area">
                      <span className="product_name">닭가슴살 더블팩</span>
                      <div className="product_price">
                        <Counter />
                        {/* <span className="product_count">
                          <input
                            type="text"
                            title="수량"
                            data-key="0"
                            className="product-count"
                            value="1"
                          />
                          <span>
                            <button type="button">증가</button>
                            <button type="button">감소</button>
                          </span>
                        </span> */}
                        <em>
                          <strong>{items[0].price}</strong>
                        </em>
                      </div>
                    </div>
                  </div>
                  <div className="buy_button_wrapper">
                    <button type="butotn">장바구니</button>
                    <button type="butotn">바로 구매</button>
                  </div>
                  <div className="total_price">
                    <p className="total">
                      <strong>총 구매 금액 : </strong>
                      <strong>{items[0].price} </strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- 댓글구현 --> */}
          <div className="detail_bottom" />
        </div>
      </div>
    </div>
  );
}

export default GoodsView;
