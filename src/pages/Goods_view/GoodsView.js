import React, { useState } from 'react';
import './GoodsView.scss';
import './mock.json';
import MainOptionsBox from './Main_options_box/MainOptionsBox';
import SubOptionsBox from './Sub_options_box/SubOptionsBox';

function GoodsView({ items }) {
  const [isShow, setIsShow] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState();
  const {
    title,
    discount,
    old_price,
    new_price,
    images,
    description,
    options,
  } = items.result;

  return (
    <div>
      <div className="product_detail_container">
        <div className="inner_wrap">
          <div className="detail_top">
            <div className="detail_left">
              <div className="detail_image_container">
                <div className="detail_image_wrapper">
                  <img src={images[0].image_url} alt="chicken_image" />
                  <img src={images[1].image_url} alt="chicken_image" />
                  <img src={images[2].image_url} alt="chicken_image" />
                </div>
              </div>
            </div>
            <div className="detail_right">
              <div className="detail_information">
                <div className="detail_information_title">{title}</div>
                <div className="detail_information_wrapper">
                  <div className="product_price_wrapper">
                    <div className="product_discount">
                      <span className="discount_price">{discount}</span>
                      <span className="old_price">{old_price}</span>
                    </div>
                    <div className="product_new_price">{new_price}</div>
                  </div>
                </div>
                <div className="product_description">{description}</div>
                <div className="product_option">
                  <div className="choice_number_option">
                    <select className="option">
                      <option className="1_pack" value="2">
                        {title}
                      </option>
                    </select>
                  </div>
                  <div className="choice_add_option">
                    <select
                      className="option"
                      onChange={e => {
                        setSelectedOptions(e.target.value);
                        e.target.value !== ''
                          ? setIsShow(true)
                          : setIsShow(false);
                      }}
                    >
                      <option value="">{options[0].option_name}</option>
                      <option value="선물 포장1">
                        {options[1].option_name}
                      </option>
                      <option value="선물 포장2">
                        {options[2].option_name}
                      </option>
                      <option value="선물 포장3">
                        {options[3].option_name}
                      </option>
                      <option value="선물 포장4">
                        {options[4].option_name}
                      </option>
                      <option value="선물 포장5">
                        {options[5].option_name}
                      </option>
                    </select>
                  </div>
                  <MainOptionsBox items={items} />
                  {isShow === true ? (
                    <SubOptionsBox selectedOptions={selectedOptions} />
                  ) : null}
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
