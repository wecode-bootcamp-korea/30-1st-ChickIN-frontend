import React, { useEffect, useState } from 'react';
import './GoodsView.scss';
import './mock.json';
import Counter from './Count_box/CountBox';

function GoodsView({ items }) {
  const [isShow, setIsShow] = useState(false);

  return (
    <div>
      <div className="product_detail_container">
        <div className="inner_wrap">
          <div className="detail_top">
            <div className="detail_left">
              <div className="detail_image_container">
                <div className="detail_image_wrapper">
                  <img
                    src={items.result.images[0].image_url}
                    alt="chicken_image"
                  />
                  <img
                    src={items.result.images[1].image_url}
                    alt="chicken_image"
                  />
                  <img
                    src={items.result.images[2].image_url}
                    alt="chicken_image"
                  />
                </div>
              </div>
            </div>
            <div className="detail_right">
              <div className="detail_information">
                <div className="detail_information_title">
                  {items.result.title}
                </div>
                <div className="detail_information_wrapper">
                  <div className="product_price_wrapper">
                    <div className="product_discount">
                      <span className="discount_price">
                        {items.result.discount}
                      </span>
                      <span className="old_price">
                        {items.result.old_price}
                      </span>
                    </div>
                    <div className="product_new_price">
                      {items.result.new_price}
                    </div>
                  </div>
                </div>
                <div className="product_description">
                  {items.result.description}
                </div>
                <div className="product_option">
                  <div className="choice_number_option">
                    <select
                      onClick={() => {
                        setIsShow(true);
                      }}
                      className="option"
                    >
                      <option className="weight" value="1">
                        중량
                      </option>
                      <option className="1_pack" value="2">
                        1팩
                      </option>
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
                  {isShow === true ? <Counter items={items} /> : null}

                  <div className="buy_button_wrapper">
                    <button type="butotn">장바구니</button>
                    <button type="butotn">바로 구매</button>
                  </div>
                  <div className="total_price">
                    <p className="total">
                      <strong>총 구매 금액 : </strong>
                      <strong>{} </strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!— 댓글구현 —> */}
          <div className="detail_bottom" />
        </div>
      </div>
    </div>
  );
}

export default GoodsView;
